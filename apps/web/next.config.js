/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ["libsql", "@libsql/client"],
    cacheComponents: true
};

export default nextConfig;
