'use client'
import Image from "next/image";

import { useBalance } from "@repo/store/balance";

export default function Page(): JSX.Element {

  const balance = useBalance();

  return (
    <main className="w-screen h-screen">
      <h1 className=" text-3xl font-medium">Hello Za Worldooo {balance}</h1>
      </main>
  );
}
