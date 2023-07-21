import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import Image from "next/image";
import "@/app/global.css";

export const metadata = {
  title: "Next Todo App",
  description: "created app routers",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NextAuthProvider>
          <main className="min-h-screen w-full relative">
            <div className="inline-flex p-2 space-x-2 text-xs items-center mb-4 bg-stone-300 rounded-br-xl">
              <Image src="/icon1.png" width={24} height={24} alt="logo todo" />
              <Link href="/">
                <h1>TODO</h1>
              </Link>
              <Link
                href="https://github.com/leovoon/pocket-todo"
                className=" hover:underline"
              >
                by leovoon
              </Link>
            </div>
            {children}
            <Toaster />
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
