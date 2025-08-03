import { type SchemaTypeDefinition } from 'sanity';

import { hero } from './hero';
import { about } from './about';
import { menu } from './menu';
import { menuItem } from './menuItem';
import { reservation } from './reservation';
import { clickAndCollect } from './clickAndCollect';
import { values } from './values';
import { suppliers } from './suppliers';
import { location } from './location';
import { socialMedia } from './socialMedia';
import { contact } from './contact';
import { openingHours } from './openingHours';
import { settings } from './settings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    hero,
    about,
    menu,
    menuItem,
    reservation,
    clickAndCollect,
    values,
    suppliers,
    location,
    socialMedia,
    contact,
    openingHours,
    settings,
  ],
}; 
