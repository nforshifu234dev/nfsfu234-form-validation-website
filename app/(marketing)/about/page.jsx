// app/(marketing)/about/page.jsx

import Image from 'next/image'
import { sharedFooterColumns } from '@/lib/footer-links'
import { buildOrganizationLd } from '@/lib/json-ld'
import { JsonLdScript } from '../components/JsonLdScript'

const SITE_URL = 'https://form-validation.nforshifu234dev.com'

export const metadata = {
  title: 'About',
  description:
    'Learn the story behind NFSFU234FormValidation, the NFSFU234 ecosystem, and the vision behind its growing family of developer tools.',
  openGraph: {
    images: [
      {
        url: `${SITE_URL}/api/og?title=About&subtitle=NFSFU234FormValidation`,
        width: 1200,
        height: 630
      }
    ]
  }
}

const ECOSYSTEM_PROJECTS = [
  {
    name: 'NFSFU234FormValidation',
    description:
      'HTML-first form validation for modern web applications with AJAX, asynchronous validation, configuration-driven rules and framework support.',
    url: 'https://form-validation.nforshifu234dev.com/docs/v3/getting-started',
    label: 'Get Started'
  },
  {
    name: 'NFSFU234TourGuide',
    description:
      'A lightweight React library for onboarding experiences, walkthroughs and interactive product tours.',
    url: 'https://tour-guide.nforshifu234dev.com',
    label: 'Check it out'
  },
  {
    name: 'NFSFU234ShotSweep',
    description:
      'A developer tool for capturing clean website screenshots for documentation, testing, automation and content creation.',
    url: 'https://shot-sweep.nforshifu234dev.com',
    label: 'Learn more'
  },
  {
    name: 'WishIT',
    description:
      'An emotional technology platform focused on helping people preserve wishes, memories and meaningful moments digitally.',
    url: 'https://wish-it.app',
    label: 'Discover WishIT'
  },
  {
    name: 'HealthHub',
    description:
      'A healthcare platform focused on improving access to healthcare across Africa through modern technology.',
    url: 'https://healthhub.nforshifu234dev.com',
    label: 'Learn more'
  }
]

const PHILOSOPHY_PRINCIPLES = [
  'Solve real problems developers face every day.',
  'Reduce repetitive work.',
  'Prefer simplicity over unnecessary abstraction.',
  'Keep dependencies to a minimum.',
  'Design APIs that feel natural to use.',
  'Build tools that scale from hobby projects to production applications.'
]

const BRAND_LAYERS = [
  {
    name: 'IAMNOTSHIFU',
    description:
      'is the personal brand of the creator, where ideas, development and public communication originate.'
  },
  {
    name: 'NFORSHIFU234 Dev',
    description:
      'is the developer brand through which the libraries, documentation and developer resources are published.'
  },
  {
    name: 'NFORSHIFU LOGICFORGE LTD',
    description:
      'is the registered company responsible for the products, intellectual property and long-term development of the ecosystem.'
  },
  {
    name: 'NFSFU234',
    description:
      'is the unified open-source ecosystem that brings every maintained developer tool together under one npm scope and shared philosophy.'
  }
]

const TIMELINE = [
  {
    year: '2023',
    text: '🚀 The first version of NFSFU234FormValidation is released, introducing form validation utilities and AJAX helpers.'
  },
  {
    year: '2024',
    text: '⚡ Version 3 Beta introduces TypeScript, React support and a redesigned validation architecture while development shifts toward larger ecosystem goals.'
  },
  {
    year: '2025',
    text: '🛠 Development expands beyond a single library. Work begins on WishIT, HealthHub, ShotSweep, TourGuide and the broader NFSFU234 ecosystem while FormValidation continues evolving behind the scenes.'
  },
  {
    year: '2026',
    text: (
      <>
        🎉 NFSFU234 Open Source Day officially launches the
        <strong> @nfsfu234</strong> npm scope, NFSFU234FormValidation v3, the
        redesigned documentation platform and the next generation of developer
        tools built under one ecosystem.
      </>
    )
  }
]

function Breadcrumb() {
  return (
    <nav className="blog-breadcrumb">
      <a href="/">Home</a>
      <span>/</span>
      <span>About</span>
    </nav>
  )
}

function AboutHero() {
  return (
    <section style={{ margin: '2rem 0 4rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr .85fr',
          gap: '3rem',
          alignItems: 'center'
        }}
      >
        <div>
          <span className="land-eyebrow">About</span>

          <h1
            style={{
              fontFamily: 'var(--land-display)',
              fontSize: 'clamp(2.5rem,5vw,4.5rem)',
              lineHeight: 1.05,
              margin: '.8rem 0 1.4rem'
            }}
          >
            Building developer tools that remove repetitive work.
          </h1>

          <p style={{ fontSize: '1.1rem' }}>
            NFSFU234FormValidation is the flagship open-source project of the{' '}
            <strong>NFSFU234 ecosystem</strong>. Built under the{' '}
            <strong>NFORSHIFU234 Dev</strong> developer brand and owned by
            <strong> NFORSHIFU LOGICFORGE LTD</strong>, the project exists to
            help developers spend less time rewriting boilerplate and more
            time building software.
          </p>
        </div>

        <Image
          src="/images/about/about-hero.png"
          alt="Workspace showing a developer building software with code editor, browser windows and notebooks representing the beginning of the NFSFU234 ecosystem."
          width={900}
          height={650}
          style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
        />
      </div>
    </section>
  )
}

function OriginStory() {
  return (
    <>
      <h2>Where it all began</h2>

      <Image
        src="/images/about/origin.png"
        alt="A developer working on HTML forms late at night, repeatedly writing validation logic and AJAX requests."
        width={1200}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '1.5rem'
        }}
      />

      <p>It started while <a href="https://www.iamnotshifu.com" target="_blank" rel="noopener noreferrer">IAMNOTSHIFU</a> was still learning to code.</p>

      <p>
        Every new project he picked up, He found myself writing the same thing
        again — form validation. Required fields, email checks, min/max
        lengths, error messages, the AJAX submit logic around it. Different
        project, same code, rebuilt from scratch every time.
      </p>

      <p>At some point he stopped and asked himself a simple question:</p>

      <blockquote>
        "Why am I rebuilding this every time? Why isn't there just one tool I
        can import and reuse across every project?"
      </blockquote>

      <p>
        That question is the entire reason NFSFU234FormValidation exists.
        Instead of writing validation logic from scratch again, the plan
        became: build it once, properly, and read the validation rules
        already sitting in the HTML — <code>required</code>,{' '}
        <code>type</code>, <code>pattern</code>, <code>minlength</code>,{' '}
        <code>maxlength</code>, <code>min</code>, <code>max</code> — instead
        of duplicating them in JavaScript.
      </p>
    </>
  )
}

function EcosystemGrowth() {
  return (
    <>
      <h2>From one library to an ecosystem</h2>

      <Image
        src="/images/about/evolution.png"
        alt="Illustration showing the evolution from one open-source library into an ecosystem of developer tools."
        width={1200}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '1.5rem'
        }}
      />

      <p>As experience grew, so did the ambition behind the project.</p>

      <p>
        What started as a validation helper gradually evolved into a complete
        client-side validation solution supporting AJAX submission,
        configuration-driven validation, automatic form registration,
        asynchronous validation, file and image validation, TypeScript
        support, generated API documentation, and framework integration
        across modern frontend stacks.
      </p>

      <p>But something else happened along the way.</p>

      <p>
        Building real software exposed other repetitive problems that
        developers faced every day.
      </p>

      <p>
        Those ideas eventually became separate projects rather than
        additional features inside one library.
      </p>
    </>
  )
}

function Philosophy() {
  return (
    <>
      <h2>The philosophy</h2>

      <Image
        src="/images/about/philosophy.png"
        alt="Illustration showing simple developer tools built with clean APIs, lightweight architecture and minimal dependencies."
        width={1200}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '1.5rem'
        }}
      />

      <p>
        Every project released under the NFSFU234 ecosystem follows the same
        philosophy.
      </p>

      <ul>
        {PHILOSOPHY_PRINCIPLES.map((principle) => (
          <li key={principle}>{principle}</li>
        ))}
      </ul>

      <p>
        These principles influence every decision—from API design and
        documentation to testing, releases and long-term maintenance.
      </p>
    </>
  )
}

function EcosystemGrid() {
  return (
    <>
      <h2>A growing ecosystem</h2>

      <Image
        src="/images/about/ecosystem.png"
        alt="A collection of interconnected developer tools representing the NFSFU234 ecosystem."
        width={1200}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '1.5rem'
        }}
      />

      <p>
        NFSFU234FormValidation eventually became the flagship project of a
        much broader vision.
      </p>

      <p>
        Rather than placing every idea inside one library, projects are
        developed independently so each solves a specific problem while
        working naturally alongside the others.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: '1.5rem',
          margin: '2rem 0'
        }}
      >
        {ECOSYSTEM_PROJECTS.map((project) => (
          <div className="land-feature" key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="land-button"
            >
              {project.label}
            </a>
          </div>
        ))}
      </div>

      <p>
        Together these projects represent the long-term vision of the NFSFU234
        ecosystem: practical software that helps developers and users
        accomplish more with less friction.
      </p>
    </>
  )
}

function BrandBreakdown() {
  return (
    <>
      <h2>Behind the ecosystem</h2>

      <Image
        src="/images/about/brands.png"
        alt="Diagram illustrating the relationship between IAMNOTSHIFU, NFORSHIFU234 Dev, NFORSHIFU LOGICFORGE LTD and the NFSFU234 ecosystem."
        width={1200}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '1.5rem'
        }}
      />

      <p>Each name within the ecosystem serves a different purpose.</p>

      <ul>
        {BRAND_LAYERS.map((brand) => (
          <li key={brand.name}>
            <strong>{brand.name}</strong> {brand.description}
          </li>
        ))}
      </ul>
    </>
  )
}

function Timeline() {
  return (
    <>
      <h2>Timeline</h2>

      <Image
        src="/images/about/timeline.png"
        alt="A visual timeline showing the journey from the first release of NFSFU234FormValidation in 2023 to the ecosystem launch in 2026."
        width={1200}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '2rem'
        }}
      />

      <div
        style={{
          borderLeft: '3px solid var(--land-accent)',
          paddingLeft: '1.5rem',
          marginBottom: '3rem'
        }}
      >
        {TIMELINE.map((entry) => (
          <div key={entry.year}>
            <h3>{entry.year}</h3>
            <p>{entry.text}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function LookingAhead() {
  return (
    <>
      <h2>Looking ahead</h2>

      <Image
        src="/images/about/future.png"
        alt="Developers collaborating while building the future of the NFSFU234 ecosystem."
        width={1200}
        height={700}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
          marginBottom: '1.5rem'
        }}
      />

      <p>NFSFU234FormValidation is only the beginning.</p>

      <p>
        The long-term vision extends far beyond a single validation library.
        Every project released under the ecosystem is designed to solve a
        specific problem while sharing the same principles of simplicity,
        performance and developer experience.
      </p>

      <p>
        Future releases will continue improving existing libraries,
        introducing new developer tools and expanding documentation, examples
        and educational resources for developers around the world.
      </p>

      <blockquote>
        Build practical software. Remove repetitive work. Help developers
        spend more time creating and less time rewriting the same code.
      </blockquote>
    </>
  )
}

function CommunitySection({ ecosystemColumn }) {
  return (
    <>
      <h2>Community</h2>

      <p>
        Open source grows because people build with it, test it, report
        issues and contribute ideas.
      </p>

      <p>
        Whether you're using one library or the entire ecosystem, every piece
        of feedback helps shape future releases.
      </p>

      {ecosystemColumn && (
        <>
          <h3>Explore the ecosystem</h3>

          <ul>
            {ecosystemColumn.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

function GetInTouch() {
  return (
    <>
      <h2>Get in touch</h2>

      <p>Have a question, found a bug, or want to contribute?</p>

      <p>We'd love to hear from you.</p>

      <ul>
        <li>
          <a href="/contact" className="land-button">
            Contact the team
          </a>
        </li>

        <li>
          <a href="https://github.com/nfsfu234/nfsfu234-form-validation" className="land-button">
            View the project on GitHub
          </a>
        </li>

        <li>
          <a href="https://x.com/nforshifu234dev" className="land-button">
            Follow NFORSHIFU234 Dev on X
          </a>
        </li>
      </ul>
    </>
  )
}

function AboutFooter() {
  return (
    <>
      <hr style={{ margin: '4rem 0' }} />

      <p style={{ fontSize: '.95rem', opacity: 0.75, textAlign: 'center' }}>
        Built with ❤️ by <strong>IAMNOTSHIFU</strong> through{' '}
        <strong>NFORSHIFU234 Dev</strong>, a developer brand of{' '}
        <strong>NFORSHIFU LOGICFORGE LTD</strong>.
        <br />
        Proudly part of the growing{' '}
        <strong>NFSFU234 Open Source Ecosystem.</strong>
      </p>
    </>
  )
}

export default function AboutPage() {
  const ecosystemColumn = sharedFooterColumns.find(
    (c) => c.title === 'NFORSHIFU234 Ecosystem'
  )

  return (
    <>
      <JsonLdScript data={buildOrganizationLd()} />

      <div className="land-wrap">
        <Breadcrumb />
        <AboutHero />

        <div className="blog-prose">
          <OriginStory />
          <EcosystemGrowth />
          <Philosophy />
          <EcosystemGrid />
          <BrandBreakdown />
          <Timeline />
          <LookingAhead />
          <CommunitySection ecosystemColumn={ecosystemColumn} />
          <GetInTouch />
          <AboutFooter />
        </div>
      </div>
    </>
  )
}