import Link from "next/link";
import { Toaster } from "./ui/toaster";

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="min-h-screen w-full relative">
        <Link href="/">
          <h1 className="text-9xl absolute bottom-0 left-0 z-[-1]  mb-4 text-slate-400/40 font-thin">
            TODO
          </h1>
        </Link>
        <Link
          href="https://github.com/leovoon/pocket-todo"
          className="absolute bottom-5 left-32 -rotate-12 hover:underline"
        >
          by leovoon
        </Link>
        {children}
        <Toaster />
      </main>
    </>
  );
};
