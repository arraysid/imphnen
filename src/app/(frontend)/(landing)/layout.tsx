import { ReactNode } from "react";
import { Footer } from "../_components/footer";
import { Navbar } from "../_components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
