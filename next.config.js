/** @type {import('next').NextConfig} */

const MODE = process.env.MODE || 'development' // production, development, localhost

/**
 * 환경별로 API_END_POINT 분리시 아래의 도메인 변경
 */
const API_DOMAIN = {
  localhost: process.env.API_BASE_URL,
  development: process.env.API_BASE_URL,
  production: process.env.API_BASE_URL
}[MODE]

const API_ENCODE_KEY = process.env.API_ENCODE_KEY
const API_DECODE_KEY = process.env.API_DECODE_KEY

/**
 * https://nextjs.org/docs/api-reference/next.config.js/ignoring-typescript-errors
 * 빌드시 typescript 무시
 */
const IGNORE_BUILD_ERRORS = {
  development: false,
  staging: false,
  production: true
}[MODE]

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  env: {
    MODE,
    API_DOMAIN,
    API_ENCODE_KEY,
    API_DECODE_KEY
  },
  compiler: {
    styledComponents: true
  },
  typescript: {
    ignoreBuildErrors: IGNORE_BUILD_ERRORS
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
