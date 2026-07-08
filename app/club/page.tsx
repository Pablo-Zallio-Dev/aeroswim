import { Metadata } from "next";
import ModulsClub from "./components/ModulsClub";

export const metadata: Metadata = {
  title: "Aeroswim - El club",
  description: "Pagina de el club",
};

export default function Club() {
  return (
      <section className=" w-full m-auto pt-30 px-6  max-w-350 ">
            <ModulsClub />
      </section>
  )
}
