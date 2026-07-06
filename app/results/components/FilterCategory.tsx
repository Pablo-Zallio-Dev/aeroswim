'use client'
import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import { BtnCategory } from "@/app/data/data.results";
import { useState } from "react";
import BtnFilter from "./BtnFilter";

export default function FilterCategory() {
  const [selected, setSelected] = useState('todas');

  return (
    <section className="">
      <BadgeTitle text={"category"} />
      <section className="pt-2">
        <section className=" flex flex-wrap gap-2 ">
          {BtnCategory.map((cat) => (
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
