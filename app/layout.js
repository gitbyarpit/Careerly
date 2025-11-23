import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CareerLy - AI-Powered Career Growth Platform",
    template: "%s | CareerLy"
  },
  description: "Accelerate your career with AI-powered tools. Get personalized resume optimization, cover letter generation, interview preparation, and industry insights tailored to your professional journey.",
  keywords: ["career growth", "AI resume builder", "cover letter generator", "interview preparation", "career development", "job search", "professional development", "industry insights", "AI career coach"],
  authors: [{ name: "Arpit Agarwal" }],
  creator: "Arpit Agarwal",
  publisher: "CareerLy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://careerly.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "CareerLy - AI-Powered Career Growth Platform",
    description: "Accelerate your career with AI-powered tools. Get personalized resume optimization, cover letter generation, interview preparation, and industry insights.",
    siteName: "CareerLy",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CareerLy - AI-Powered Career Growth Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CareerLy - AI-Powered Career Growth Platform",
    description: "Accelerate your career with AI-powered tools. Get personalized resume optimization, cover letter generation, and interview preparation.",
    images: ["/og-image.png"],
    creator: "@careerly",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >    <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>

            {/* header */}
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Toaster richColors />
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>
                  Engineered with precision - Arpit Agarwal
                </p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
