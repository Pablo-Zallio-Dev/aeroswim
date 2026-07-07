import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import Titles from "@/app/components/common/layout/Titles";
import { Results } from "@/app/types/results.type";

export default function CardResults( {resultInfo}: {resultInfo: Results} ){

      return(
            <section className=" flex flex-col w-full gap-4 p-4 bg-backgroundSecondary border border-borders lg:hover:border-accent transition-colors duration-200 ">
                <section className=" flex justify-between ">
                  <BadgeTitle text={resultInfo.fecha} accent />
                  <BadgeTitle text={resultInfo.temporada}  />
                </section>
                <Titles text={resultInfo.titulo} titleSize={"small"} />
                <section className=" flex gap-2 ">
                  <BadgeTitle text={resultInfo.lugar}  />
                  <BadgeTitle text={' - '}  />
                  <BadgeTitle text={resultInfo.categoria}  />
                </section>
                <section className=" flex flex-col gap-2 py-2  border-t border-borders ">
                  {
                        resultInfo.logros.map((item) => (
                              <section key={item} className=" flex gap-1.5 items-center ">
                                    <div className=" w-1 h-1 rounded-full bg-accent "></div>
                                    <h2  className=" font-inter text-sm text-whiteText "> {item} </h2>
                              </section>
                        ))
                  }
                </section>
            </section>
      )
}