import { Metadata } from "next";
import Titles from "../components/common/layout/Titles";
import { TimeTable } from "../types/timetable.type";
import TableDesktop from "./components/TableDesktop";
import TableMobile from "./components/TableMobile";

export const metadata: Metadata = {
  title: "Aeroswim - Horarios",
  description: "Pagina de horarios",
};

export default function Timetables() {

      const timeTable : TimeTable[] = [
    
                  {
                        "categoria": "Bebés",
                         "franjas": [
        { "dias": "L · X · V", "hora": "10:00 - 10:45" },
        { "dias": "M · J", "hora": "17:00 - 17:45" },
        { "dias": "Sábado", "hora": "10:00 - 10:45" }
      ],
                        "cupo": { "ocupado": 6, "total": 10 }
                  },
                  {
                        "categoria": "Infantil A",
                        "franjas": [
        { "dias": "L · X · V", "hora": "17:00 - 18:30" },
        { "dias": "M · J", "hora": "16:00 - 17:30" },
        { "dias": "Sábado", "hora": "09:00 - 11:00" }
      ],
                        "cupo": { "ocupado": 12, "total": 20 }
                  },
                  {
                        "categoria": "Adulto Pro",
                        "franjas": [
        { "dias": "L · X · V", "hora": "06:00 - 07:30" },
        { "dias": "M · J", "hora": "19:00 - 20:30" },
        { "dias": "Sábado", "hora": "08:00 - 10:00" }
      ],
                        "cupo": { "ocupado": 8, "total": 15 }
                  },
                  {
                        "categoria": "Master Elite",
                       "franjas": [
        { "dias": "L · X · V", "hora": "13:00 - 14:30" },
        { "dias": "M · J", "hora": "07:00 - 08:30" },
        { "dias": "Sábado", "hora": null }
      ],
                        "cupo": { "ocupado": 15, "total": 15 }
                  }
            
      ]


      return (
            <section className=" bg-backgroundSecondary ">

            <section className=" flex flex-col items-center w-full m-auto px-6  max-w-350  ">
                  <section className=" w-full mt-30 lg:mt-50 ">
                        <Titles text={"horarios de sesiòn"} titleSize={"large"} />
                        <TableMobile table={timeTable} />
                        <TableDesktop table={timeTable} />
                  </section>
            </section>
            </section>
      )
}
