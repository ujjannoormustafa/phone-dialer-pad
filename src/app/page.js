"use client"
import Image from "next/image";
import Dialer from "./componets/Dialer";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Here is Phone Dialer</h1>
      <Dialer />
    </>
  );
}
