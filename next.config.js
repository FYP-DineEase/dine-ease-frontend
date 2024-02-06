/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      `${process.env.AWS_S3_USER_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com`,
      `${process.env.AWS_S3_RESTAURANT_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com`,
    ],
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
