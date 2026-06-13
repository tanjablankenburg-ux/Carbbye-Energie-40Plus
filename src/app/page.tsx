"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const result = localStorage.getItem("energiecheck_result");
    router.replace(result ? "/dashboard" : "/start");
  }, [router]);
  return null;
}
