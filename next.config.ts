import nextra from 'nextra'

const withNextra = nextra({
  staticImage: true,
  latex: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
})
