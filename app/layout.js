import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/react";

// Import styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  title: 'Saint Daniels Healthcare - Career Coaching & Workplace Solutions',
  description: 'Transform your career with Saint Daniels Healthcare. Expert career coaching, workplace wellness programs, and public health education for professional success.',
  keywords: 'career coaching, workplace solutions, public health education, professional development, career advancement, workplace wellness, Saint Daniels Healthcare',
  openGraph: {
    title: 'Saint Daniels Healthcare - Career Coaching & Workplace Solutions',
    description: 'Transform your career with Saint Daniels Healthcare. Expert career coaching, workplace wellness programs, and public health education for professional success.',
    url: 'https://saintdanielshealthcare.com',
    siteName: 'Saint Daniels Healthcare',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/saintdanielslogo.jpeg" type="image/jpeg" />
      </head>
      <body className={`${inter.className} root-layout`}>
        {children}
        <Analytics />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
} 