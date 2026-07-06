'use client'
import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import { BtnSeason } from "@/app/data/data.results";
import BtnFilter from "./BtnFilter";
import { useCategoryFilterStore } from "@/app/store/filterResults.store";

export default function FilterSeason(){

        const selected = useCategoryFilterStore((state) => state.selected)
        const setSelected = useCategoryFilterStore((state) => state.setSelected)
      
       return (
          <section className="">
            <BadgeTitle text={"Temporada"} />
            <section className="pt-2">
              <section className=" flex flex-wrap gap-2 ">
                {BtnSeason.map((cat) => (
                  <BtnFilter
                    key={cat}
                    title={cat}
                    isActive={cat === selected}
                    onSelect={() => setSelected(cat)}
                  />
                ))}
              </section>
            </section>
          </section>
        );
}