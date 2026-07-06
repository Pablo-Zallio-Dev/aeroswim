import { Franja, TimeTable } from "@/app/types/timetable.type";

type Props = {
  table: TimeTable[];
};

const DIAS_ORDEN = ["L · X · V", "M · J", "Sábado"];

function getHoraPorDia(franjas: Franja[], dia: string): string {
  const franja = franjas.find((f) => f.dias === dia);
  return franja?.hora ?? "--:--";
}

export default function TableDesktop({ table }: Props) {
  return (
    <div className="w-full my-12 hidden lg:block border border-borders bg-[#0a0e1a] overflow-hidden font-mono">
      {/* Header */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr] px-6 py-4 bg-backgroundGrayDark border-b border-borders">
        <span className="text-sm  font-jetBrainsMono  uppercase tracking-widest text-white/40">
          CATEGORÍA
        </span>
        {DIAS_ORDEN.map((dia) => (
          <span
            key={dia}
            className="text-sm  font-jetBrainsMono uppercase     tracking-widest text-grayText"
          >
            {dia}
          </span>
        ))}
        <span className="text-sm  font-jetBrainsMono uppercase  tracking-widest text-white/40 text-right">
          CUPO
        </span>
      </div>

      {/* Filas */}
      {table.map((row) => {
        const lleno = row.cupo.ocupado >= row.cupo.total;

        return (
          <div
            key={row.categoria}
            className="grid grid-cols-[1.5fr_1fr_1fr_1fr_0.8fr] px-6 py-7 bg-backgroundSecondary hover:bg-accent/5 border-b border-borders last:border-0 items-center transition-colors duration-150"
          >
            <span
              className={`font-jetBrainsMono font-black uppercase italic text-sm ${
                lleno ? "text-rose-400" : "text-accent"
              }`}
            >
              {row.categoria}
            </span>

            {DIAS_ORDEN.map((dia) => (
              <span key={dia} className="text-white font-jetBrainsMono text-sm">
                {getHoraPorDia(row.franjas, dia)}
              </span>
            ))}

            <span
              className={`text-sm text-right ${
                lleno ? "text-rose-400" : "text-cyan-400/70"
              }`}
            >
              {lleno
                ? "[ FULL ]"
                : `[ ${String(row.cupo.ocupado).padStart(2, "0")}/${row.cupo.total} ]`}
            </span>
          </div>
        );
      })}
    </div>
  );
}
