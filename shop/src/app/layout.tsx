'use client'

import "./globals.css";
import Header from "../../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store"
import { Nunito } from 'next/font/google';
import Footer from "./footer/page";
import Categories from "./categories/page";
import { usePathname } from "next/navigation";

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="body_layout">
          <Provider store={store}>
            {pathname !== "/" && (
              <Header />
            )}
            {pathname !== "/" && pathname !== "/cart" && (
              <Categories />
            )}
            {children}
            {pathname !== "/" && (
            <Footer />
          )}
          </Provider>
        </div>
      </body>
    </html>
  );
}
