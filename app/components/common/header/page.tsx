import Logo from "../layout/Logo";
import BtnMobileMenu from "./components/BtnMenuMobile";
import MenuMobile from "./components/MenuMobile";

export default function Header() {
      return (
            <>
                  <section
                        className=" 
            fixed top-0 z-200
           flex justify-center
            w-full
            p-6 xl:px-20 2xl:px-1/2
            bg-background
            border-b border-borders "
                  >
                        <section className="  
                        flex justify-between items-center lg:justify-between 
                        w-full
                        2xl:w-3/4
                        ">
                              <Logo />
                              <MenuMobile />
                              <section className=" lg:hidden ">
                                    <BtnMobileMenu />
                              </section>
                        </section>
                  </section>
            </>
      );
}
