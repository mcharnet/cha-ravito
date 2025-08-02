'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  title: 'Cha Ravito CMS',
  projectId: "t4r4w8my",
  dataset: "production",
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
  ],
})
