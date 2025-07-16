"use client";
import Header from "./Header";
import { usePathname } from "next/navigation";

export default function HeaderClient() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return <Header hideOnTop={isHome} />;
} 