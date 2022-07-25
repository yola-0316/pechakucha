import { useReducer, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import SlideLayout from "../components/SlideLayout/SlideLayout";

type Layout = "one" | "two";
type Slide = {
  name: string;
  layout?: Layout;
};

type Presentation = {
  slides: Slide[];
};

type ACTIONTYPE =
  | { type: "new"; payload?: void }
  | { type: "add"; payload: Slide }
  | { type: "update"; payload: Slide }
  | { type: "delete"; payload: Slide };

function reducer(state: Presentation, action: ACTIONTYPE) {
  const { type, payload } = action;
  switch (type) {
    case "new": {
      return state;
    }
    case "add": {
      const newSlide: Slide = { ...payload, layout: payload.layout ?? "one" };
      return { ...state, slides: [...state.slides, newSlide] };
    }
    default:
      throw Error("Unknown action.");
  }
}

const Home: NextPage = () => {
  const [presentationState, dispatch] = useReducer(reducer, {
    slides: [],
  });

  return (
    <div className="container mx-auto">
      <Head>
        <title>PechaKucha Presentation</title>
        <meta name="description" content="PechaKucha Presentation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <nav className="flex justify-between h-24">
          <h1 className="text-3xl font-bold">PechaKucha</h1>
          <button onClick={() => dispatch({ type: "new" })}>Create</button>
        </nav>

        <section className="flex" style={{ height: "calc(100vh - 6rem)" }}>
          {presentationState && (
            <>
              <aside className="basis-60">
                <div>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "add",
                        payload: { name: Math.random().toString(36).slice(-2) },
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <ul>
                  {presentationState.slides.map((slide) => (
                    <li key={slide.name} className="flex">
                      <b className="w-8">{slide.name}</b>
                      <span className="block grow h-40 leading-[10rem] text-center border m-4 bg-slate-200">thumbnail</span>
                    </li>
                  ))}
                </ul>
              </aside>
              <main className="grow flex items-center">
                <SlideLayout />
              </main>
            </>
          )}
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
