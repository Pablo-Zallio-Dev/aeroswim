import Paragraph from "@/app/components/common/layout/Paragraph";
import SubtitlePage from "@/app/components/common/layout/SubtitlePage";
import Titles from "@/app/components/common/layout/Titles";

export default function HeadResults(){
      return(
            <section className=" flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 ">
                  <section className=" flex flex-col gap-4 ">
                        <SubtitlePage text={"[ DATA_LOG: RESULTADOS ]"} />
                        <Titles text={"marcas y medallas"} titleSize={"large"} />
                  </section>
                  <section className=" max-w-96 ">
                  <Paragraph textSize={"medium"} text={"Histórico verificado de competiciones donde nuestros nadadores han registrado podio o récord de club."} />

                  </section>
            </section>
      )
}