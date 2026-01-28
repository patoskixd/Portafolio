export interface Certificate {
  id: string;
  title: string;
  institution: string;
  year: string;
  category: "diploma" | "course" | "certification";
  pdfUrl?: string;
  verifyUrl?: string;
  description?: string;
}

export const certificates: Certificate[] = [
  {
    id: "diplomado-uct",
    title: "Diplomado en Desarrollo de Software",
    institution: "Universidad Católica de Temuco",
    year: "2025",
    category: "diploma",
    pdfUrl: "/docs/certificados/diplomado-uct.pdf",
    description:
      "Programa integral de desarrollo de software con énfasis en arquitectura y buenas prácticas.",
  },
  {
    id: "platzi-next",
    title: "Curso de Next.js",
    institution: "Platzi",
    year: "2024",
    category: "course",
    verifyUrl: "https://platzi.com/p/tuusuario/curso/xxx/diploma/xxx/",
  },
  {
    id: "platzi-fastapi",
    title: "Curso de FastAPI",
    institution: "Platzi",
    year: "2024",
    category: "course",
    verifyUrl: "https://platzi.com/p/tuusuario/curso/xxx/diploma/xxx/",
  },
  {
    id: "platzi-typescript",
    title: "Curso de TypeScript",
    institution: "Platzi",
    year: "2023",
    category: "course",
    verifyUrl: "https://platzi.com/p/tuusuario/curso/xxx/diploma/xxx/",
  },
  {
    id: "platzi-react",
    title: "Curso de React.js",
    institution: "Platzi",
    year: "2023",
    category: "course",
    verifyUrl: "https://platzi.com/p/tuusuario/curso/xxx/diploma/xxx/",
  },
];

export function getCertificatesByCategory(
  category: Certificate["category"]
): Certificate[] {
  return certificates.filter((c) => c.category === category);
}
