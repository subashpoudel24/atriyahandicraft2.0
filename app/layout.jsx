import GlobalProvider from "@/components/Application/GlobalProvider";
import "./globals.css";
import "../styles/loading.css";
import { Assistant } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import ClientLayout from "@/components/ClientLayout";
const assistantFont = Assistant({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "Atriya Handicraft",
  description: "Buy and sell Pashmine made clothing across World Wide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" crxemulator="">
      <body
        className={`${assistantFont.className} antialiased`}
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
