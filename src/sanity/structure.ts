import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Cha Ravito')
    .items([
      S.documentTypeListItem('menuItem').title('Menu Items'),
      S.documentTypeListItem('event').title('Événements'),
      S.divider(),
      S.documentTypeListItem('hero').title('Section Hero'),
      S.documentTypeListItem('contact').title('Contact'),
    ])
