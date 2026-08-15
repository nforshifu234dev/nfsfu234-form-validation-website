import Image from 'next/image'
import './hello.css'

export const metadata = {
  title: 'Hello, World'
}

export default function HelloWorldPage() {
  return (
    <main className="hello-page">
      <div className="hello-glow hello-glow-1" />
      <div className="hello-glow hello-glow-2" />

      <div className="hello-content">
        <a href="/" className="hello-brand">
          <Image
            src="/logo.png"
            alt=""
            width={32}
            height={32}
            priority
          />

          <span className="hello-brand-scope">
            nfsfu234/
          </span>

          form-validation
        </a>

        <h1>Hello, World.</h1>

        <div className="hello-terminal">
          <div className="hello-terminal-bar">
            <span />
            <span />
            <span />
          </div>

          <pre>
            <span className="hello-prompt">$</span>
            {' '}console.log(&quot;Hello, World&quot;);{'\n'}
            <span className="hello-prompt">$</span>
            {' '}// this page has no purpose but tradition{'\n'}
            <span className="hello-prompt">$</span>
            {' '}// built by IAMNOTSHIFU, NFORSHIFU234 Dev
          </pre>
        </div>

        <p className="hello-credit">
          Built by{' '}
          <a
            href="https://iamnotshifu.com"
            target="_blank"
            rel="noreferrer"
          >
            IAMNOTSHIFU
          </a>
          {' '}through{' '}
          <a
            href="https://nforshifu234dev.com"
            target="_blank"
            rel="noreferrer"
          >
            NFORSHIFU234 Dev
          </a>
          .
        </p>

        <p className="hello-tradition">
          Every project gets one of these. It&apos;s tradition.
        </p>
      </div>
    </main>
  )
}