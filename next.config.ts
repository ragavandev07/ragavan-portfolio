import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Enable SCSS support (built-in with Next.js + sass package)
    // Transpile Ant Design for SSR compatibility
    transpilePackages: ['antd', '@ant-design/icons', 'rc-util', 'rc-pagination', 'rc-picker'],
};

export default nextConfig;
