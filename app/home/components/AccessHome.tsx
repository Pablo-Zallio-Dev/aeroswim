import BtnAccent from "@/app/components/common/layout/BtnAccent";
import BtnPrimary from "@/app/components/common/layout/BtnPrimary";
import Titles from "@/app/components/common/layout/Titles";

export default function AccessHome(){
      return(
            <section className=" flex flex-col xl:flex-row xl:justify-between items-center text-center  gap-6 w-full  py-20 px-6 2xl:px-0  max-w-350  ">
                  <Titles text={"listo para sumergirte"} titleSize={"large"} />
                  <section className=" flex flex-col xl:flex-row  items-start  gap-4 ">
                        <BtnAccent accent text={"solicita acceso"} link={"/contact"} />
                        <BtnPrimary text={"soy socio"} link={""} large />
                  </section>
            </section>
      )
}