import type { NextPage } from "next";
import Head from "next/head";

import SlideWorkspace from "@/features/Slide/SlideWorkspace";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>PechaKucha Presentation</title>
        <meta name="description" content="PechaKucha Presentation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="flex items-center justify-between h-20 border-b px-2">
          <h1 className="text-3xl font-bold">PechaKucha</h1>
          <div>User: Admin</div>
        </nav>

        <section className="flex" style={{ height: "calc(100vh - 5rem)" }}>
          <SlideWorkspace />
        </section>
      </main>
    </div>
  );
};

export default Home;
