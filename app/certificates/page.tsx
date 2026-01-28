import { SectionHeading, Badge, PDFViewerLink } from "@/components";
import { certificates, getCertificatesByCategory } from "@/data/certificates";

export const metadata = {
  title: "Certificados | Portafolio",
  description: "Mis certificados y cursos completados",
};

export default function CertificatesPage() {
  const diplomas = getCertificatesByCategory("diploma");
  const courses = getCertificatesByCategory("course");
  const certifications = getCertificatesByCategory("certification");

  return (
    <main className="min-h-screen bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Certificados"
          subtitle="Formación continua y certificaciones profesionales"
        />

        {/* Diplomas */}
        {diplomas.length > 0 && (
          <section className="mb-16">
            <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Diplomados
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {diplomas.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} />
              ))}
            </div>
          </section>
        )}

        {/* Courses */}
        {courses.length > 0 && (
          <section className="mb-16">
            <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Cursos
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} compact />
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h3 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Certificaciones
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <CertificateCard key={cert.id} certificate={cert} compact />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

interface CertificateCardProps {
  certificate: (typeof certificates)[number];
  compact?: boolean;
}

function CertificateCard({ certificate, compact = false }: CertificateCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 ${
        compact ? "p-4" : "p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <Badge variant="secondary">{certificate.year}</Badge>
            {certificate.category === "diploma" && (
              <Badge variant="outline">⭐ Destacado</Badge>
            )}
          </div>
          <h4
            className={`font-semibold text-zinc-900 dark:text-zinc-100 ${
              compact ? "text-base" : "text-lg"
            }`}
          >
            {certificate.title}
          </h4>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {certificate.institution}
          </p>
          {certificate.description && !compact && (
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              {certificate.description}
            </p>
          )}
        </div>

        {/* Icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex gap-2">
        {certificate.pdfUrl && (
          <PDFViewerLink
            href={certificate.pdfUrl}
            label="Ver PDF"
            variant="secondary"
          />
        )}
        {certificate.verifyUrl && (
          <a
            href={certificate.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            Verificar
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
