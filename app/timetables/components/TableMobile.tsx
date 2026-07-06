import { TimeTable } from "@/app/types/timetable.type";

type Props = {
      table: TimeTable[];
};


export default function TableMobile({ table }: Props) {

      console.log(table)


      return (
            <section className=" flex flex-col gap-4 my-16 lg:hidden ">
                  {
                        table.map((item) => (
                              <section key={item.categoria} className=" flex flex-col gap-5 border border-borders p-6      ">
                                    <section className=" flex justify-between ">
                                          <h3 className={` uppercase font-inter ${ item.cupo.ocupado === item.cupo.total ?'text-accentAlert' :'text-accent' } italic font-bold `}> {item.categoria} </h3>

                                          <p className={` " font-jetBrainsMono ${item.cupo.ocupado === item.cupo.total ? 'text-accentAlert' : 'text-grayText'}  text-sm " `}>
                                                {item.cupo.ocupado === item.cupo.total ? '[ Full ]' : `[ ${item.cupo.ocupado} / ${item.cupo.total} ]`}
                                          </p>
                                    </section>
                                    <section className=" flex flex-col gap-2 ">
                                          {
                                                item.franjas.map((time) => (
                                                      <section key={time.dias} className="flex justify-between">
                                                            <p className="font-jetBrainsMono text-grayText text-sm"> {time.dias} </p>
                                                            <p className="font-jetBrainsMono text-whiteText text-sm"> {time.hora} </p>
                                                      </section>
                                                ))
                                          }
                                    </section>
                              </section>
                        ))
                  }
            </section>
      )
}