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

const ecosystemColumn = sharedFooterColumns.find(
  (c) => c.title === 'NFORSHIFU234 Ecosystem'
)

export default function AboutPage() {
  return (
    <>
      <JsonLdScript data={buildOrganizationLd()} />

      <div className="land-wrap">

        <nav className="blog-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>About</span>
        </nav>

        <section
          style={{
            margin: '2rem 0 4rem'
          }}
        >

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.15fr .85fr',
              gap: '3rem',
              alignItems: 'center'
            }}
          >

            <div>

              <span className="land-eyebrow">
                About
              </span>

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

              <p
                style={{
                  fontSize: '1.1rem'
                }}
              >
                NFSFU234FormValidation is the flagship open-source project of
                the growing <strong>NFSFU234 ecosystem</strong>.
                Built under the <strong>NFORSHIFU234 Dev</strong> developer
                brand and owned by
                <strong> NFORSHIFU LOGICFORGE LTD</strong>, the project exists
                to help developers spend less time rewriting boilerplate and
                more time building software.
              </p>

            </div>

            <Image
              src="/images/about/about-hero.jpg"
              alt="Workspace showing a developer building software with code editor, browser windows and notebooks representing the beginning of the NFSFU234 ecosystem."
              width={900}
              height={650}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '20px'
              }}
            />

          </div>

        </section>

        <div className="blog-prose">

          <h2>Where it all began</h2>

          <Image
            src="/images/about/origin.jpg"
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

          <p>
            The idea behind NFSFU234FormValidation didn't begin as a business
            plan or an open-source ambition.
          </p>

          <p>
            It began while <strong>IAMNOTSHIFU</strong> was learning web
            development.
          </p>

          <p>
            Project after project involved the same routine:
            building forms, writing validation logic, making AJAX requests,
            displaying error messages, collecting form data, and repeating
            almost identical code over and over again.
          </p>

          <p>
            Every contact form looked similar.
            Every login page behaved similarly.
            Every registration page required nearly the same validation logic.
          </p>

          <blockquote>
            "Why should developers rewrite the same validation code every
            time they build a form?"
          </blockquote>

          <p>
            That simple question became the starting point for what would
            eventually become <strong>NFSFU234FormValidation</strong>.
          </p>

          <p>
            Rather than forcing developers to describe validation twice,
            the goal became letting HTML do what HTML already does best.
          </p>

          <p>
            Browsers already understand attributes like
            <code> required</code>,
            <code> type</code>,
            <code> pattern</code>,
            <code> minlength</code>,
            <code> maxlength</code>,
            <code> min</code> and
            <code> max</code>.
          </p>

          <p>
            Instead of recreating those rules inside JavaScript,
            the library was designed to read the markup developers had
            already written, while still allowing additional configuration
            whenever more control was needed.
          </p>

          <h2>From one library to an ecosystem</h2>

          <Image
            src="/images/about/evolution.jpg"
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

          <p>
            As experience grew, so did the ambition behind the project.
          </p>

          <p>
            What started as a validation helper gradually evolved into a
            complete client-side validation solution supporting AJAX
            submission, configuration-driven validation, automatic form
            registration, asynchronous validation, file and image
            validation, TypeScript support, generated API documentation,
            and framework integration across modern frontend stacks.
          </p>

          <p>
            But something else happened along the way.
          </p>

          <p>
            Building real software exposed other repetitive problems that
            developers faced every day.
          </p>

          <p>
            Those ideas eventually became separate projects rather than
            additional features inside one library.
          </p>
                    <h2>The philosophy</h2>

          <Image
            src="/images/about/philosophy.jpg"
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
            Every project released under the NFSFU234 ecosystem follows the
            same philosophy.
          </p>

          <ul>
            <li>Solve real problems developers face every day.</li>
            <li>Reduce repetitive work.</li>
            <li>Prefer simplicity over unnecessary abstraction.</li>
            <li>Keep dependencies to a minimum.</li>
            <li>Design APIs that feel natural to use.</li>
            <li>Build tools that scale from hobby projects to production applications.</li>
          </ul>

          <p>
            These principles influence every decision—from API design and
            documentation to testing, releases and long-term maintenance.
          </p>

          <h2>A growing ecosystem</h2>

          <Image
            src="/images/about/ecosystem.jpg"
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

            <div className="land-feature">

              <h3>NFSFU234FormValidation</h3>

              <p>
                HTML-first form validation for modern web applications with
                AJAX, asynchronous validation, configuration-driven rules and
                framework support.
              </p>

            </div>

            <div className="land-feature">

              <h3>NFSFU234TourGuide</h3>

              <p>
                A lightweight React library for onboarding experiences,
                walkthroughs and interactive product tours.
              </p>

            </div>

            <div className="land-feature">

              <h3>NFSFU234ShotSweep</h3>

              <p>
                A developer tool for capturing clean website screenshots for
                documentation, testing, automation and content creation.
              </p>

            </div>

            <div className="land-feature">

              <h3>WishIT</h3>

              <p>
                An emotional technology platform focused on helping people
                preserve wishes, memories and meaningful moments digitally.
              </p>

            </div>

            <div className="land-feature">

              <h3>HealthHub</h3>

              <p>
                A healthcare platform focused on improving access to healthcare
                across Africa through modern technology.
              </p>

            </div>

          </div>

          <p>
            Together these projects represent the long-term vision of the
            NFSFU234 ecosystem: practical software that helps developers and
            users accomplish more with less friction.
          </p>

          <h2>Behind the ecosystem</h2>

          <Image
            src="/images/about/brands.jpg"
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

          <p>
            Each name within the ecosystem serves a different purpose.
          </p>

          <ul>
            <li>
              <strong>IAMNOTSHIFU</strong> is the personal brand of the creator,
              where ideas, development and public communication originate.
            </li>

            <li>
              <strong>NFORSHIFU234 Dev</strong> is the developer brand through
              which the libraries, documentation and developer resources are
              published.
            </li>

            <li>
              <strong>NFORSHIFU LOGICFORGE LTD</strong> is the registered company
              responsible for the products, intellectual property and long-term
              development of the ecosystem.
            </li>

            <li>
              <strong>NFSFU234</strong> is the unified open-source ecosystem that
              brings every maintained developer tool together under one npm
              scope and shared philosophy.
            </li>
          </ul>

          <h2>Timeline</h2>

          <Image
            src="/images/about/timeline.jpg"
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

            <h3>2023</h3>

            <p>
              🚀 The first version of NFSFU234FormValidation is released,
              introducing form validation utilities and AJAX helpers.
            </p>

            <h3>2024</h3>

            <p>
              ⚡ Version 3 Beta introduces TypeScript, React support and a
              redesigned validation architecture while development shifts toward
              larger ecosystem goals.
            </p>

            <h3>2025</h3>

            <p>
              🛠 Development expands beyond a single library. Work begins on
              WishIT, HealthHub, ShotSweep, TourGuide and the broader NFSFU234
              ecosystem while FormValidation continues evolving behind the
              scenes.
            </p>

            <h3>2026</h3>

            <p>
              🎉 NFSFU234 Open Source Day officially launches the
              <strong> @nfsfu234</strong> npm scope, NFSFU234FormValidation v3,
              the redesigned documentation platform and the next generation of
              developer tools built under one ecosystem.
            </p>

          </div>
          <h2>Looking ahead</h2>

          <Image
            src="/images/about/future.jpg"
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

          <p>
            NFSFU234FormValidation is only the beginning.
          </p>

          <p>
            The long-term vision extends far beyond a single validation
            library. Every project released under the ecosystem is designed to
            solve a specific problem while sharing the same principles of
            simplicity, performance and developer experience.
          </p>

          <p>
            Future releases will continue improving existing libraries,
            introducing new developer tools and expanding documentation,
            examples and educational resources for developers around the world.
          </p>

          <blockquote>
            Build practical software.
            Remove repetitive work.
            Help developers spend more time creating and less time rewriting
            the same code.
          </blockquote>

          <h2>Community</h2>

          <p>
            Open source grows because people build with it, test it, report
            issues and contribute ideas.
          </p>

          <p>
            Whether you're using one library or the entire ecosystem, every
            piece of feedback helps shape future releases.
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

          <h2>Get in touch</h2>

          <p>
            Have a question, found a bug, or want to contribute?
          </p>

          <p>
            We'd love to hear from you.
          </p>

          <ul>
            <li>
              <a href="/contact">
                Contact the team
              </a>
            </li>

            <li>
              <a href="https://github.com/nfsfu234/nfsfu234-form-validation">
                View the project on GitHub
              </a>
            </li>

            <li>
              <a href="https://x.com/nf_validator234">
                Follow NFSFU234FormValidation on X
              </a>
            </li>
          </ul>

          <hr
            style={{
              margin: '4rem 0'
            }}
          />

          <p
            style={{
              fontSize: '.95rem',
              opacity: .75,
              textAlign: 'center'
            }}
          >
            Built with ❤️ by{' '}
            <strong>IAMNOTSHIFU</strong> through{' '}
            <strong>NFORSHIFU234 Dev</strong>, a developer brand of{' '}
            <strong>NFORSHIFU LOGICFORGE LTD</strong>.
            <br />
            Proudly part of the growing{' '}
            <strong>NFSFU234 Open Source Ecosystem.</strong>
          </p>

        </div>

      </div>

    </>
  )
}
          