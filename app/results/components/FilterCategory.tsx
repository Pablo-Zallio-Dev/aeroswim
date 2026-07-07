'use client'
import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import { BtnCategory } from "@/app/data/data.results";
import BtnFilter from "./BtnFilter";
import { useCategoryFilterStore } from "@/app/store/filterResults.store";

export default function FilterCategory() {

       const selectedCategory = useCategoryFilterStore((state) => state.selectedCategory)
              const setSelectedCategory = useCategoryFilterStore((state) => state.setSelectedCategory)

  return (
    <section className=" flex flex-col items-center sm:items-start  ">
      <BadgeTitle text={"category"} />
      <section className="pt-2">
        <section className=" flex flex-wrap justify-center gap-2 ">
          {BtnCategory.map((cat) => (
            <BtnFilter
              key={cat}
              title={cat}
              isActive={cat === selectedCategory}
              onSelect={() => setSelectedCategory(cat)}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
