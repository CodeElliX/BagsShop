'use client'

import "./globals.css";
import Header from "../../components/Header/Header";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store"
import { Nunito } from 'next/font/google';
import Footer from "../../components/footer/page";
import Categories from "../../components/categories/page";
import { usePathname } from "next/navigation";
import ScrollToUp from '../../components/scroll-up/page'
import { useEffect } from "react";
import { getCartFromLS } from './utils/getCartFromLS'
import { setCart } from "./redux/cartSlice";

const nunito = Nunito({ subsets: ['latin'] })

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getCartFromLS();
    dispatch(setCart(data));
  }, [dispatch]);

  return (
    <div className="body_layout">
      {pathname !== "/" && <Header />}
      {pathname !== "/" && pathname !== "/cart" && <Categories />}
      {children}
      {pathname !== "/" && <Footer />}
      <ScrollToUp />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Provider store={store}>
          <LayoutContent>{children}</LayoutContent>
        </Provider>
      </body>
    </html>
  );
}


