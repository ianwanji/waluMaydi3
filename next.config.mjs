


import withPWA from 'next-pwa';
const isProduction = process.env.NODE_ENV === 'production';
 
const config = {
reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

 
const nextConfig = withPWA({
  dest: 'public',
  scope: '/',

  disable: !isProduction,
})(
  config
);
 
export default nextConfig;
