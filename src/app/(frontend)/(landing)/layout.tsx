import { ReactNode } from "react";
import { Navbar } from "../_components/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
