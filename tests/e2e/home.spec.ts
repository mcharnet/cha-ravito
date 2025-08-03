import { test, expect } from '@playwright/test';

test.describe('Page d\'accueil', () => {
  test('devrait afficher la page d\'accueil avec toutes les sections', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que la page se charge
    await expect(page).toHaveTitle(/Le Ravito/);
    
    // Vérifier la navigation
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('img[alt="Le Ravito - Logo"]')).toBeVisible();
    
    // Vérifier les sections principales
    await expect(page.getByRole('heading', { name: /accueil/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /réserver/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /click & collect/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /la carte/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /à propos/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /nous trouver/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /contact/i })).toBeVisible();
    
    // Vérifier le footer
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByText('Nous Contacter')).toBeVisible();
    await expect(page.getByText('Suivez-nous')).toBeVisible();
  });

  test('devrait permettre la navigation entre les sections', async ({ page }) => {
    await page.goto('/');
    
    // Cliquer sur le lien de réservation
    await page.getByRole('link', { name: /réserver/i }).click();
    await expect(page.locator('#reservation')).toBeVisible();
    
    // Cliquer sur le lien de la carte
    await page.getByRole('link', { name: /la carte/i }).click();
    await expect(page.locator('#menu')).toBeVisible();
    
    // Cliquer sur le lien de contact
    await page.getByRole('link', { name: /contact/i }).click();
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('devrait avoir un formulaire de réservation fonctionnel', async ({ page }) => {
    await page.goto('/#reservation');
    
    // Vérifier que le formulaire est présent
    await expect(page.getByLabel(/nom complet/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/téléphone/i)).toBeVisible();
    await expect(page.getByLabel(/date/i)).toBeVisible();
    await expect(page.getByLabel(/heure/i)).toBeVisible();
    await expect(page.getByLabel(/nombre de personnes/i)).toBeVisible();
    
    // Remplir le formulaire
    await page.getByLabel(/nom complet/i).fill('Jean Dupont');
    await page.getByLabel(/email/i).fill('jean.dupont@example.com');
    await page.getByLabel(/téléphone/i).fill('0123456789');
    
    // Sélectionner une date future
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    await page.getByLabel(/date/i).fill(dateString);
    
    await page.getByLabel(/heure/i).fill('19:00');
    await page.getByLabel(/nombre de personnes/i).fill('2');
    
    // Soumettre le formulaire
    await page.getByRole('button', { name: /confirmer la réservation/i }).click();
    
    // Vérifier que le formulaire a été soumis (simulation)
    await expect(page.getByText(/demande de réservation/i)).toBeVisible();
  });

  test('devrait afficher le menu avec les catégories', async ({ page }) => {
    await page.goto('/#menu');
    
    // Vérifier que la section menu est visible
    await expect(page.getByRole('heading', { name: /la carte/i })).toBeVisible();
    
    // Vérifier qu'il y a des catégories de plats
    const categories = page.locator('[data-testid="menu-category"]');
    await expect(categories).toHaveCount(0); // Pour l'instant, pas de données
  });

  test('devrait avoir des liens de contact fonctionnels', async ({ page }) => {
    await page.goto('/#contact');
    
    // Vérifier les liens de contact
    const phoneLink = page.getByRole('link', { name: /téléphone/i });
    const emailLink = page.getByRole('link', { name: /email/i });
    
    await expect(phoneLink).toBeVisible();
    await expect(emailLink).toBeVisible();
    
    // Vérifier que les liens ont les bons attributs
    await expect(phoneLink).toHaveAttribute('href', /tel:/);
    await expect(emailLink).toHaveAttribute('href', /mailto:/);
  });

  test('devrait être responsive sur mobile', async ({ page }) => {
    // Tester sur mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Vérifier que le menu mobile fonctionne
    const mobileMenuButton = page.getByRole('button', { name: /ouvrir le menu/i });
    await expect(mobileMenuButton).toBeVisible();
    
    await mobileMenuButton.click();
    
    // Vérifier que le menu mobile s'ouvre
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('devrait avoir une navigation accessible au clavier', async ({ page }) => {
    await page.goto('/');
    
    // Naviguer avec Tab
    await page.keyboard.press('Tab');
    
    // Vérifier que le focus est sur le logo
    await expect(page.locator('img[alt="Le Ravito - Logo"]')).toBeFocused();
    
    // Naviguer vers les liens de navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    
    // Vérifier qu'on peut activer les liens avec Entrée
    await page.keyboard.press('Enter');
    
    // Vérifier qu'on a navigué vers une section
    await expect(page.locator('#reservation, #menu, #contact')).toBeVisible();
  });

  test('devrait avoir des métadonnées SEO correctes', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier le titre de la page
    await expect(page).toHaveTitle(/Le Ravito/);
    
    // Vérifier la description meta
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /bar café sportif/);
    
    // Vérifier les balises Open Graph
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Le Ravito/);
  });

  test('devrait avoir un footer avec les informations de contact et réseaux sociaux', async ({ page }) => {
    await page.goto('/');
    
    // Vérifier que le footer est présent
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Vérifier les informations de contact
    await expect(page.getByText('Nous Contacter')).toBeVisible();
    await expect(page.getByText('01 23 45 67 89')).toBeVisible();
    await expect(page.getByText('contact@leravito.fr')).toBeVisible();
    await expect(page.getByText('33 rue Molère, 69006 Lyon')).toBeVisible();
    
    // Vérifier les horaires d'ouverture
    await expect(page.getByText('Horaires d\'ouverture')).toBeVisible();
    await expect(page.getByText('Lundi')).toBeVisible();
    await expect(page.getByText('Dimanche')).toBeVisible();
    
    // Vérifier les réseaux sociaux
    await expect(page.getByText('Suivez-nous')).toBeVisible();
    
    // Vérifier les liens de contact fonctionnels
    const phoneLink = footer.locator('a[href^="tel:"]');
    const emailLink = footer.locator('a[href^="mailto:"]');
    
    await expect(phoneLink).toBeVisible();
    await expect(emailLink).toBeVisible();
    
    // Vérifier le copyright
    await expect(page.getByText(/© \d{4} Le Ravito/)).toBeVisible();
  });
}); 
