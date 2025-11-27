import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aurora N&N Business Solution Inc.",
    description: "Empowering Small Businesses with Expert Solutions - Website Building & Accounting Services Tailored for Your Needs",
    keywords: ["website building", "accounting services", "small business", "business solutions", "brand kits"],
    authors: [{ name: "Aurora N&N Business Solution Inc." }],
    openGraph: {
        title: "Aurora N&N Business Solution Inc.",
        description: "Empowering Small Businesses with Expert Solutions",
        type: "website",
    },
    icons: {
        icon: '/AuroraLogo.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://challenges.cloudflare.com" />
                <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
            </head>
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
