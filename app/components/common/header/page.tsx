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
            p-6 xl:px-20 2xl:px-70
            bg-background
            border-b border-borders "
      >
        <section
          className="  
                        flex justify-between items-center lg:justify-between 
                        w-full
                        
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
