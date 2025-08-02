import { type SchemaTypeDefinition } from 'sanity'

import menuItem from '../schemas/menuItem'
import event from '../schemas/event'
import hero from '../schemas/hero'
import contact from '../schemas/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuItem, event, hero, contact],
}
