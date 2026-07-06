export type TimeTable = {
  categoria: string;
  franjas: Franja[];
  cupo: Cupo;
};

export type Franja = {
  dias: string;
  hora: string | null;
};

export type Cupo = {
  ocupado: number;
  total: number;
};