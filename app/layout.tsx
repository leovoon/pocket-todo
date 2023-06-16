import "./globals.css";
import { Reenie_Beanie } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";

const googleFont = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  preload: true,
});

export const metadata = {
  title: "Todoo App",
  description: "Created by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={googleFont.className}>
        <main className="min-h-screen w-full p-4 relative">
          <Link href="/">
            <h1 className="text-9xl absolute bottom-0 left-0 z-[-1]  mb-4 text-slate-400/40 font-thin">
              TODO
            </h1>
          </Link>
          <Link
            href="https://github.com/leovoon/pocket-todo"
            className="absolute bottom-5 left-32 -rotate-12"
          >
            by leovoon
          </Link>
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
