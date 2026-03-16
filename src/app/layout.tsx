import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate Transaction Management Software | Paperless Pipeline",
  description:
    "Paperless Pipeline is the first and the simplest real estate transaction and commission management system that agents and brokers actually enjoy using. 1,000,000+ transactions closed in 17 years.",
  openGraph: {
    title: "Real Estate Transaction Management Software | Paperless Pipeline",
    description:
      "The transaction management system brokerages settle into for years. 1M+ transactions closed. Free trial available.",
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
            __html: `window.MEGA_TAG_CONFIG={siteKey:"sk_mmtgq42z_ykuonlhr0rb",gtmId:"GTM-TDRS3LT2"};window.API_ENDPOINT="https://optimizer.gomega.ai";window.TRACKING_API_ENDPOINT="https://events-api.gomega.ai";`,
          }}
        />
        <script src="https://cdn.gomega.ai/scripts/optimizer.min.js" async />
      </head>
      <body>

        
        {children}

        {/* CTM — Universal account, afterInteractive */}
        <Script src="https://572388.tctm.co/t.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
