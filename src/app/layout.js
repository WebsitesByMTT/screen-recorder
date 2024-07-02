import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Free and Secure screen recorder captures anything from PC.",
  description: "This is the best Free and Secure screen recorder that can capture and edit videos like a pro. With this extension, you can record your screen and game.",
  icons: {
    icon: '/favicon.png',
  },
  keywords: "Free and Secure screen recorder, best recording software, online video recorder, screen record with audio, free screen recording software, screen recording on Chrome, game recording software, Real-time Draw Tool, Real-Time Blur Display, Download 4K UHD Video Quality, Webcam Recorder, free screen recorder, free screen recorder Chrome, how to screen record on Chrome, screen recorder free download, Chrome screen recorder with audio, free Game recording software, best game recording software, how to Game record on Chrome, Game screen recorder free download, record gameplay with audio, record gameplay, Free Webcam Recorder, webcam recording software, free webcam recording software, online video recorder, Capture HD Quality Video",
  openGraph: {
    title: "Free and Secure screen recorder captures anything from PC.",
    description: "This is the best Free and Secure screen recorder that can capture and edit videos like a pro. With this extension, you can record your screen and game.",
    type: 'website',
    siteName: "Screen Recorder",
    images: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en-us">
      <head>
         <meta name="google-site-verification" content="99Hona3Ekb9qMdSM1tSRJu1KarS3b3W2KRZMMESqQek" />
      </head>
      <body className={inter.className}>
        <div className="bg-white px-5 md:px-10 py-4 md:py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
