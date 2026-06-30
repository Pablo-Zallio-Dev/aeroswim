import BtnHeader from "./components/common/header/components/BtnHeader";
import Badge from "./components/common/layout/Badge";
import BtnAccent from "./components/common/layout/BtnAccent";
import Logo from "./components/common/layout/Logo";

export default function Home() {
      return (
            <section className=" p-10 ">
                  <section className=" flex flex-col ">
                  <Logo />
                  <Logo light />

                  </section>
                  <BtnHeader mobile text='Iniciar sesion' />
                  <BtnHeader text='Iniciar sesion' />
                  <section className="">
                  <BtnHeader contact text='Unete' />
                  <BtnHeader mobile contact text='Unete' />

                  </section>

                  <Badge text='rendimiento sin límites' />

                  <section className=" w-max ">
                        <BtnAccent  text='Apúntate' link='/contact' />
                  </section>
                        <BtnAccent accent text='Enviar solicitud' link='/contact' />
             

            </section>
      )
}
