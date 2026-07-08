import Link from "next/link";
import Paragraph from "../components/common/layout/Paragraph";
import SubtitlePage from "../components/common/layout/SubtitlePage";
import Titles from "../components/common/layout/Titles";
import FormLogin from "./components/FormLogin";


export default function Login() {



      return (
            <section className=" flex justify-center pt-40 w-full m-auto mb-20 px-6 xl:px-6 max-w-350  ">
                  <section className=" flex flex-col gap-6 ">
                        <SubtitlePage text={"[ AUTH_MODULE ]"} />
                        <Titles text={"iniciar sesión"} titleSize={"large"} />
                        <section className=" max-w-100 ">
                        <Paragraph text="Accede al panel de socio para revisar tus sesiones, marcas y datos personales." textSize={"medium"} />
                        </section>
                        <FormLogin />
                        <section className="">
                              <p className=" font-jetBrainsMono uppercase text-xs text-grayText text-center ">¿no tienes cuenta? <Link href={"/contact"} className=" text-accent ">registrate</Link> </p>
                        </section>
                  </section>
            </section>
      )
}
