import type { ReactNode } from "react";
import HomeLayout from "@/components/landing/HomeLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
