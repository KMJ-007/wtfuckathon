/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud-gmdvxpxiw-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cloud-cyyvp1n1x-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cloud-jesxkj2ss-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cloud-gejxl81w3-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cloud-923vc3tyf-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cloud-may6tqv1i-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cloud-6kdgthbaa-hack-club-bot.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cloud-32xhqchng-hack-club-bot.vercel.app',
      },

    ],
  },
};

export default nextConfig;
