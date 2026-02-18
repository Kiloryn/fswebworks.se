'use client'

import { useEffect, useState } from 'react'
import { TinaCMS, TinaProvider } from 'tinacms'

const tinaConfig = {
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || 'b3e1c303-9506-402d-b961-731fc3e185cf',
  token: process.env.NEXT_PUBLIC_TINA_TOKEN || 'b6ba928d88971e082d545d1429c8652417dfeac0',
  build: {
    outputFolder: 'out',
    publicFolder: 'public'
  },
  // Enable media
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public'
    }
  },
}

export default function AdminPage() {
  const [cms, setCms] = useState<TinaCMS | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function initCms() {
      try {
        const { TinaCMS: TCMS } = await import('tinacms')
        const newCms = new TCMS(tinaConfig)
        await newCms.init()
        setCms(newCms)
      } catch (err) {
        console.error('Failed to initialize TinaCMS:', err)
        setError(err instanceof Error ? err.message : 'Failed to initialize CMS')
      }
    }
    initCms()
  }, [])

  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#0a0a0a',
        color: 'white',
        fontFamily: 'system-ui'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>CMS Loading Error</h1>
          <p style={{ color: '#666' }}>{error}</p>
        </div>
      </div>
    )
  }

  if (!cms) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#0a0a0a',
        color: 'white',
        fontFamily: 'system-ui'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            border: '3px solid #333',
            borderTopColor: '#c8a46e',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <p>Loading CMS...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </div>
    )
  }

  return (
    <TinaProvider cms={cms}>
      <div style={{ 
        minHeight: '100vh', 
        background: '#0a0a0a',
        color: 'white',
        padding: '2rem',
        fontFamily: 'system-ui'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            TinaCMS is ready!
          </h1>
          <p style={{ color: '#666', marginBottom: '2rem' }}>
            Click the pencil icon in the bottom-left corner to start editing.
          </p>
          <div style={{ 
            background: '#111', 
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '1rem'
          }}>
            <p><strong>Client ID:</strong> {tinaConfig.clientId}</p>
            <p><strong>Status:</strong> Connected</p>
          </div>
          <a 
            href="/" 
            target="_blank"
            style={{ 
              display: 'inline-block',
              marginTop: '1rem',
              color: '#c8a46e',
              textDecoration: 'underline'
            }}
          >
            View Website →
          </a>
        </div>
      </div>
    </TinaProvider>
  )
}
