'use client'

import { TinaCMS, TinaProvider } from 'tinacms'
import { useState } from 'react'

// TinaCMS configuration
const tinaConfig = {
  clientId: 'b3e1c303-9506-402d-b961-731fc3e185cf',
  token: 'b6ba928d88971e082d545d1429c8652417dfeac0',
  build: {
    outputFolder: 'out',
    publicFolder: 'public'
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
}

export default function TinaProviderWrapper({ children }: { children: React.ReactNode }) {
  const [cms] = useState(() => new TinaCMS(tinaConfig))

  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  )
}
