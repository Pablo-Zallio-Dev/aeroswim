import BadgeTitle from "../layout/BadgeTitle";
import Logo from "../layout/Logo";
import FlexLinksFooter from "./components/FlexLinksFooter";

export default function Footer() {
      return (
            <section className=" flex justify-center  border-t border-borders  ">
                  <section className=" py-12 px-6 2xl:px-0  w-full max-w-7xl "  >
                        <section className="flex flex-col md:flex-row gap-12 justify-between">
                              <section className="">
                                    <Logo light />
                                    <p className=" pt-6 max-w-80 font-jetBrainsMono uppercase text-xs text-grayText ">
                                          Centro de alto rendimiento especializado en dinámicas de fluido y
                                          biomecánica acuática.
                                    </p>
                              </section>
                              <section className="">
                                    <FlexLinksFooter />
                              </section>
                        </section>
                        <div className=" w-full mt-16 mb-8 border-t border-borders"></div>
                        <section className=" flex justify-between w-full ">
                              <BadgeTitle  text={"© 2026 AEROSWIM DATA SYSTEMS"} />
                              <BadgeTitle  text={"SWIM HARD · MADRID, ES"} />
                        </section>
                  </section>
            </section>
      );
}
