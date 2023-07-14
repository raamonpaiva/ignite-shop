/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  //Config necessária pro next pegar as imagens do stripe
  images: {
    domains: [
      'files.stripe.com'
    ]
  },
}

module.exports = nextConfig
