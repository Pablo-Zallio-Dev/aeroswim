
import AccessHome from "./home/components/AccessHome";
import Hero from "./home/components/Hero";
import SectionModuls from "./home/components/SectionModuls";


export default function Home() {
      return (
            <>
                  <section style={{ backgroundImage: "url('/images/image_hero.webp')", backgroundPosition: 'center  -280px' }} className={` flex justify-center w-full h-screen bg-no-repeat  bg-center `}>
                        <Hero />
                  </section>
                  <section className="flex flex-col items-center w-full m-auto px-6 2xl:px-0  max-w-7xl ">

                        <section className=" flex flex-col items-center justify-center w-full py-20 ">
                              <section className=" w-full  ">
                                    <SectionModuls />
                              </section>
                        </section>
                  </section>
                  <section className=" w-full flex justify-center border-y border-borders bg-backgroundSecondary ">
                        <AccessHome />

                  </section>
            </>
      )
}

