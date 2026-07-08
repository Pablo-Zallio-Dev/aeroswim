# 🏊 Aeroswim

Web app para un club de natación: gestión de horarios de sesión, resultados de competiciones, acceso de socios y contacto/inscripción. Construida con Next.js App Router y un enfoque mobile-first.

🔗 **Demo:** [aeroswim.vercel.app](https://aeroswim.vercel.app)

## ✨ Funcionalidades

- **Home** — hero con imagen a pantalla completa y sección de accesos rápidos a los módulos del club.
- **El Club** — información institucional.
- **Horarios** — tabla de franjas horarias por categoría (Bebés, Infantil, Adulto Pro, Master Elite), con cupo ocupado/total, y vistas independientes para desktop y mobile.
- **Resultados** — galería de resultados de competiciones filtrable por categoría y temporada, con estado global gestionado en Zustand.
- **Login** — acceso de socios al panel personal (marcas, sesiones, datos).
- **Contacto** — formulario de contacto/inscripción con validación (`react-hook-form`).

## 🛠️ Tecnologías

- Next.js
- React Hook Form
- Tailwind CSS
- Zustand

## 📁 Estructura del proyecto

```
app/
├── club/            # Página "El Club"
├── components/
│   └── common/      # Header, Footer, layout (botones, títulos, badges…)
├── contact/         # Formulario e info de contacto
├── data/            # Datos de resultados (data.results.ts)
├── home/            # Hero, accesos, secciones de la home
├── login/           # Formulario de acceso de socios
├── results/         # Galería y filtros de resultados
├── store/           # Stores de Zustand (filtros, menú mobile)
├── timetables/       # Tablas de horarios (desktop/mobile)
├── types/           # Tipados (Results, TimeTable…)
├── layout.tsx
└── page.tsx
```

## 📌 Roadmap

- Conectar horarios y resultados a una fuente de datos dinámica
- Panel de socio funcional tras login
- Envío real del formulario de contacto (email/backend)

## 👤 Autor

**Pablo Zallio** — Frontend Developer (Next.js · React · TypeScript · Tailwind)
📍 Valencia, España