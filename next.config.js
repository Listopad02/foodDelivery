/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
};

module.exports = {
  images: {
    loader: "akamai",
    path: "",
    domains: ["xn--80aamqmn7eb2e.xn--p1ai"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
