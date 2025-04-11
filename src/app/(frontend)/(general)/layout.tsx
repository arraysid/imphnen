import { ReactNode } from "react";
import { Footer } from "../_components/footer";
import { Navbar } from "../_components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
