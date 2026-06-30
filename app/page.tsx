import BtnHeader from "./components/common/header/components/BtnHeader";
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

            </section>
      )
}
