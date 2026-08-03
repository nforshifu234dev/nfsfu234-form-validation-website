import { buildExampleTechArticleLd } from '@/lib/json-ld'
import { JsonLdScript } from '@/(marketing)/components/JsonLdScript'
import { getExampleSource } from '@/lib/examples'
import { ContentLayout } from '@/(marketing)/components/ContentLayout'
import { ExamplesSidebar } from '@/(marketing)/components/ExamplesSidebar'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { blogComponents } from '@/(marketing)/components/blog-mdx-components'

const SITE_URL = 'https://form-validation.nforshifu234dev.com'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const ex = getExampleSource(slug)
  if (!ex) return {}
  const ogUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(ex.meta.title)}&subtitle=Examples`
  return {
    title: ex.meta.title,
    description: ex.meta.excerpt,
    keywords: ex.meta.frameworks || [],
    alternates: { canonical: `${SITE_URL}/examples/${slug}` },
    openGraph: {
      title: ex.meta.title,
      description: ex.meta.excerpt,
      images: [{ url: ogUrl, width: 1200, height: 630 }]
    }
  }
}

export default async function ExamplePage({ params }) {
  const { slug } = await params
  const ex = getExampleSource(slug)
  if (!ex) notFound()

  const jsonLd = buildExampleTechArticleLd({
    title: ex.meta.title,
    description: ex.meta.excerpt,
    url: `${SITE_URL}/examples/${slug}`,
    frameworks: ex.meta.frameworks || []
  })

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <ContentLayout post={{ slug, ...ex.meta }} indexHref="/examples" indexLabel="Examples" tagsField="frameworks" tagPrefix="">
        <div className="examples-layout">
          <ExamplesSidebar activeSlug={slug} />
          <div><MDXRemote source={ex.content} components={blogComponents} /></div>
        </div>
      </ContentLayout>
    </>
  )
}