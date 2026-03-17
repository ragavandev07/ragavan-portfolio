import type { Metadata } from "next";
import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.scss";

export const metadata: Metadata = {
    title: "Ragavan - Software engineer",
    description: "Experienced Frontend Engineer specializing in React, React Native, and TypeScript. Expert in building real-time chat applications, scalable UI architecture, and offline-first mobile solutions.",
    keywords: "Frontend Engineer, React Developer, React Native, TypeScript, Real-time Chat, Socket.io, MongoDB, Node.js, Mobile Development, Web Development",
    authors: [{ name: "Ragavan" }],
    openGraph: {
        title: "Ragavan - Software engineer",
        description: "Building scalable, real-time applications with modern web and mobile technologies",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ragavan - Software engineer",
        description: "Experienced Frontend Engineer specializing in React and React Native development",
    },
};

export const viewport = {
    themeColor: "#000000",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <AntdRegistry>
                    <ConfigProvider
                        theme={{
                            algorithm: theme.darkAlgorithm,
                            token: {
                                colorPrimary: "#ffffff",
                                colorInfo: "#a1a1aa",
                                borderRadius: 4,
                                fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                            },
                        }}
                    >
                        {children}
                    </ConfigProvider>
                </AntdRegistry>
            </body>
        </html>
    );
}
