import Logo from "../layout/Logo";
import BtnMobileMenu from "./components/BtnMenuMobile";
import MenuMobile from "./components/MenuMobile";

export default function Header() {
  return (
    <>
      <section
        className=" 
            fixed top-0 left-0 z-200
           flex justify-center
            w-full 
            py-6 px-6 
            border-b border-borders
            bg-background
            lg:bg-background/50
            lg:backdrop-blur-3xl "
      >
        <section
          className="  
                        flex justify-between items-center lg:justify-between 
                        w-full  max-w-350
                        px-6
                        "
        >
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

/* p-6 xl:px-20 2xl:px-50 3xl:px-90 */
