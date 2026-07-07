'use client'
import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import { BtnSeason } from "@/app/data/data.results";
import BtnFilter from "./BtnFilter";
import { useCategoryFilterStore } from "@/app/store/filterResults.store";

export default function FilterSeason(){

        const selectedSeason = useCategoryFilterStore((state) => state.selectedSeason)
        const setSelectedSeason = useCategoryFilterStore((state) => state.setSelectedSeason)
      
       return (
          <section className="flex flex-col items-center sm:items-start ">
            <BadgeTitle text={"Temporada"} />
            <section className="pt-2">
              <section className=" flex flex-wrap justify-center items-center gap-2 ">
                {BtnSeason.map((cat) => (
                  <BtnFilter
                    key={cat}
                    title={cat}
                    isActive={cat === selectedSeason}
                    onSelect={() => setSelectedSeason(cat)}
                  />
                ))}
              </section>
            </section>
          </section>
        );
}