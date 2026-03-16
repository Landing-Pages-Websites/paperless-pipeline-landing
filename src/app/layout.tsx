import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate Transaction Management Software | Paperless Pipeline",
  description: "Streamline your real estate transactions with Paperless Pipeline. The simple, powerful solution trusted by brokers and agents. Free trial available.",
  openGraph: {
    title: "Real Estate Transaction Management Software | Paperless Pipeline",
    description: "Streamline your real estate transactions with Paperless Pipeline. The simple, powerful solution trusted by brokers and agents.",
    images: ["/og-image.jpg"],
    url: "https://paperless-pipeline-landing.vercel.app",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* MegaTag config — set BEFORE optimizer loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.MEGA_TAG_CONFIG={siteKey:"sk_mmrwx5od_t5tr28hbeeg"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        <script src="https://cdn.gomega.ai/scripts/optimizer.min.js" async />
      </head>
      <body className={inter.className}>
        {children}

        {/* CTM — Universal account, afterInteractive */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}