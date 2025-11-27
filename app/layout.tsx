import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
            <body className={outfit.className}>
                {children}
                <Script
                    id="tawk-widget"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                            (function(){
                            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                            s1.async=true;
                            s1.src='https://embed.tawk.to/67ffeda8d825181910e0cd9c/1ip12mtt0';
                            s1.charset='UTF-8';
                            s1.setAttribute('crossorigin','*');
                            s0.parentNode.insertBefore(s1,s0);
                            })();
                        `,
                    }}
                />
            </body>
        </html>
    );
}
