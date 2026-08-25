import nextra from 'nextra'

const withNextra = nextra({
  latex: false,
  defaultShowCopyCode: true,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.nforshifu.com' }
    ]
  }
})