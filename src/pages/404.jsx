import Header from "@/components/common/header";
import Head from "next/head";
import React from "react";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found - Bibek Shah</title>
      </Head>
      <section className="h-[100vh] w-full flex justify-center items-center bg-background">
        <Header />
        <div className="flex flex-row items-center leading-none">
          <h1 className="font-prompt font-semibold sm:text-[48px] text-[36px] text-primary pr-4 border-r-textDim border-r">
            404
          </h1>
          <span className="pl-4 font-prompt text-sm text-primary">
            The requested page is not found.
          </span>
        </div>
      </section>
    </>
  );
}
