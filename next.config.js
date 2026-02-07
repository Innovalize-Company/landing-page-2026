/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // IMPORTANTE para Netlify manual
  },
}

module.exports = nextConfig