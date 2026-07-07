import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import Paragraph from "@/app/components/common/layout/Paragraph";
import Titles from "@/app/components/common/layout/Titles";
import Link from "next/link";

export default function InfoContact(){
      return(
            <section className=" flex flex-col gap-8 w-full ">
                  <Titles text={"solicita acceso"} titleSize={"large"} />
                  <section className=" max-w-md ">
                  <Paragraph textSize={"medium"} text="Las admisiones están abiertas para el próximo trimestre. Evaluamos nivel técnico previo ingreso." />
                  </section>
                  <section className=" flex flex-col gap-6 ">
                        <section className=" flex flex-col gap-2 max-w-80 ">
                              <BadgeTitle accent text={"coordenadas"} />
                              <Titles text={"Calle del Agua 42, Parque Olímpico Madrid, ES"} titleSize={"medium"} />
                        </section>
                         <section className=" flex flex-col gap-2 w-min ">
                              <BadgeTitle accent text={"contacto"} />
                              <Titles text={"info@aeroswim.pro +34 910 22 33 44"} titleSize={"medium"} />
                        </section>
                         <section className=" flex flex-col gap-2 w-min ">
                              <BadgeTitle accent text={"redes"} />
                              <section className=" flex gap-4 font-jetBrainsMono uppercase text-whiteText text-xs ">
                                    <Link href={""}>instagram</Link>
                                    <Link href={""}>strava</Link>
                                    <Link href={""}>x/twitter</Link>
                              </section>
                        </section>
                  </section>
            </section>
      )
}