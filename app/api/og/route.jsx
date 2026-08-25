// app/api/og/route.jsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const SITE_URL = 'https://formvalidation.nforshifu234dev.com'
const LOGO_URL = `${SITE_URL}/logo.png`

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'NFSFU234FormValidation'
  const subtitle = searchParams.get('subtitle') || 'nfsfu234/form-validation'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0d0d0d',
          color: '#fff',
          padding: 60
        }}
      >
        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <img src={LOGO_URL} width={56} height={56} style={{ borderRadius: 12 }} />
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 700 }}>
            <span style={{ opacity: 0.55, fontWeight: 500 }}>nfsfu234/</span>
            <span>form-validation</span>
          </div>
        </div>

        {/* Title block */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#ff5f2e', fontSize: 30, marginBottom: 16 }}>
            {subtitle}
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
            {title}
          </div>
        </div>

        {/* Footer row — domain + version, same info a real visit would show */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(255,255,255,0.45)'
          }}
        >
          <span>formvalidation.nforshifu234dev.com</span>
          <span>v3 · zero dependencies</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        // max-age: browsers hold it a day (a link preview is usually viewed once)
        // s-maxage: CDN holds it a year — this is what actually kills repeat
        //   crawler/regeneration cost, since it's per exact title+subtitle query
        // stale-while-revalidate: a cache miss serves stale instantly while
        //   refreshing in the background, instead of blocking the request
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400'
      }
    }
  )
}