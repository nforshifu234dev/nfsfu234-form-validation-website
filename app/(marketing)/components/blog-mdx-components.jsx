'use client'
import { useState } from 'react'

function getCodeText(children) {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(getCodeText).join('')
  if (children?.props?.children) return getCodeText(children.props.children)
  return ''
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="blog-copy-btn"
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

// Extracts a YouTube video ID from a full URL, or passes through a bare ID.
function extractYouTubeId(input) {
  if (!input) return null
  const match = input.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  )
  return match ? match[1] : input
}

// <YouTube id="dQw4w9WgXcQ" /> or <YouTube id="https://youtu.be/dQw4w9WgXcQ" />
function YouTube({ id, title = 'YouTube video' }) {
  const videoId = extractYouTubeId(id)
  if (!videoId) return null
  return (
    <div className="blog-embed-wrap">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}

// Generic <iframe> written directly in MDX (CodeSandbox, StackBlitz, etc.)
// Pass height="500px" (or any CSS length) to switch out of the 16:9
// aspect-ratio wrapper into a fixed-height one — useful for embeds
// that aren't video (CodeSandbox, StackBlitz, forms, etc).
function Iframe({ height, style, ...props }) {
  if (height) {
    return (
      <div className="blog-embed-wrap blog-embed-fixed" style={{ height }}>
        <iframe loading="lazy" {...props} />
      </div>
    )
  }
  return (
    <div className="blog-embed-wrap">
      <iframe loading="lazy" {...props} />
    </div>
  )
}

function Img({ alt, ...props }) {
  return (
    <figure className="blog-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={alt || ''} loading="lazy" {...props} />
      {alt && <figcaption className="blog-img-caption">{alt}</figcaption>}
    </figure>
  )
}

function Table(props) {
  return (
    <div className="blog-table-wrap">
      <table {...props} />
    </div>
  )
}

export const blogComponents = {
  pre: ({ children, ...props }) => {
    const codeText = getCodeText(children)

    return (
      <div className="blog-code-wrap">
        <CopyButton text={codeText} />
        <pre {...props} className="blog-code">
          {children}
        </pre>
      </div>
    )
  },
  a: (props) => (
    <a {...props} target={props.href?.startsWith('http') ? '_blank' : undefined}
       rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined} />
  ),
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  h4: (props) => <h4 {...props} />,
  ul: (props) => <ul {...props} />,
  ol: (props) => <ol {...props} />,
  blockquote: (props) => <blockquote className="blog-blockquote" {...props} />,
  hr: () => <hr className="blog-hr" />,
  table: Table,
  img: Img,
  iframe: Iframe,
  YouTube
}