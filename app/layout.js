"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`justify-center mx-auto`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
