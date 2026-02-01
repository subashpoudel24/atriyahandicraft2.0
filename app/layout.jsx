import GlobalProvider from "@/components/Application/GlobalProvider";
import "./globals.css";
import "../styles/loading.css";
import { Playfair_Display, Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import ClientLayout from "@/components/ClientLayout";

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif'
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

export const metadata = {
  title: "Atriya Handicraft",
  description: "Buy and sell Pashmine made clothing across World Wide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <GlobalProvider>
          <ToastContainer />
          <ClientLayout>
            {children}
          </ClientLayout>
        </GlobalProvider>
      </body>
    </html>
  );
}
