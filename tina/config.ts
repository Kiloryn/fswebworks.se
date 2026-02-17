import { defineConfig } from 'tinacms'

// @ts-ignore - Next.js app directory
export default defineConfig({
  branch: 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'out',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public'
    }
  },
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Page Content',
        path: 'content',
        format: 'json',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Page Title'
          },
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              { type: 'string', name: 'badge', label: 'Badge Text' },
              { type: 'string', name: 'heading', label: 'Heading' },
              { type: 'string', name: 'subheading', label: 'Subheading' },
              { type: 'string', name: 'ctaPrimary', label: 'Primary CTA' },
              { type: 'string', name: 'ctaSecondary', label: 'Secondary CTA' }
            ]
          },
          {
            type: 'object',
            name: 'services',
            label: 'Services Section',
            fields: [
              { type: 'string', name: 'sectionTitle', label: 'Section Title' },
              { type: 'string', name: 'sectionSubtitle', label: 'Section Subtitle' }
            ]
          },
          {
            type: 'object',
            name: 'contact',
            label: 'Contact Section',
            fields: [
              { type: 'string', name: 'sectionTitle', label: 'Section Title' },
              { type: 'string', name: 'sectionSubtitle', label: 'Section Subtitle' }
            ]
          }
        ]
      }
    ]
  }
})
