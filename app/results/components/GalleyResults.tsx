'use client'
import { resultsData } from "@/app/data/data.results";
import { useCategoryFilterStore } from "@/app/store/filterResults.store";
import CardResults from "./CardResults";


export default function GalleryResults() {
      const selectedCategory = useCategoryFilterStore((state) => state.selectedCategory);
      const selectedSeason = useCategoryFilterStore((state) => state.selectedSeason);

      const filteredResults = resultsData.filter((item) => {
            const matchCategory = selectedCategory.toLowerCase() === 'todas' || 
                                 item.categoria.toLowerCase() === selectedCategory.toLowerCase();
            
            const matchSeason = selectedSeason.toLowerCase() === 'todas' || 
                               item.temporada.toLowerCase() === selectedSeason.toLowerCase();

            return matchCategory && matchSeason;
      });

      return (
            <section className="grid grid-cols-1 mb-20 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResults.length > 0 ? (
                        filteredResults.map((res) => (
                              <section key={res.id} className="">
                                    <CardResults  resultInfo={res} />
                              </section>
                        ))
                  ) : (
                        <p className="col-span-full font-jetBrainsMono py-12 text-center text-gray-500">
                              No se encontraron resultados para los filtros seleccionados.
                        </p>
                  )}
            </section>
      );
}
