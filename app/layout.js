import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "./provider/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E6Data Code Editor",
  description: "Product of E6Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
