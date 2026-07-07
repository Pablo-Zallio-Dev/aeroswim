import Badge from "@/app/components/common/layout/Badge";
import BtnAccent from "@/app/components/common/layout/BtnAccent";
import Paragraph from "@/app/components/common/layout/Paragraph";
import BadgeInfoHome from "./BadgeInfoHome";


export default function Hero(){
      return(
            <>
            <section className="absolute inset-0 w-full h-screen bg-linear-to-r from-background/80 via-background/80 to-background/40"></section>
                  <section className=" absolute inset-0 w-full h-screen bg-linear-to-t from-background/50 via-transparent to-transparent/10 border-b border-borders "> </section>
                  <section className=" absolute z-100 w-full max-w-350 px-6 2xl:px-0   h-screen flex flex-col justify-center items-start  ">
                        <Badge text={"Rendimiento Sin Límites"} />
                        <h1 className=" w-min mt-6 uppercase tracking-tighter font-inter font-black italic text-5xl sm:text-6xl md:text-8xl xl:text-9xl  ">rompe la <span className=" text-accent " >superficie</span> </h1>
                        <section className=" max-w-xl mt-6 ">
                        <Paragraph text={"Entrenamiento técnico de élite diseñado para nadadores que buscan precisión, velocidad y disciplina en cada brazada."} textSize={"large"} />
                        </section>
                        <section className="  flex flex-col sm:flex-row items-center gap-8  mt-10  ">
                              <BtnAccent text={"apúntate"} link={"/contact"} />
                              <section className=" flex justify-center gap-5 ">
                                    <div className=" hidden  sm:block  border border-borders  "></div>
                                    <BadgeInfoHome title={"temp agua"} info={"27.5º C"} />
                                    <BadgeInfoHome title={"ph nivel"} info={"7.2"} />
                              </section>
                        </section>
                  </section>
            </>
      )
}