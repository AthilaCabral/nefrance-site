import { CONTACT } from "./constants";
import { SITE_URL } from "./site";

// =====================================================================
// JSON-LD · Schema.org MedicalClinic
// ---------------------------------------------------------------------
// URL e image puxam do helper SITE_URL (env-aware). Quando o domínio
// próprio for registrado, basta setar NEXT_PUBLIC_SITE_URL na Vercel.
// O arquivo og.png ainda precisa existir em public/og.png — pendente.
// =====================================================================

export function medicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Instituto Nefrance",
    description:
      "Clínica multidisciplinar especializada em TDAH, TEA, dislexia e dificuldades de aprendizagem em Goiânia.",
    url: SITE_URL,
    telephone: `+55${CONTACT.phoneIntl}`,
    image: `${SITE_URL}/og.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.addressLine,
      addressLocality: CONTACT.addressCity,
      addressRegion: CONTACT.addressState,
      postalCode: CONTACT.addressCep,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Goiânia",
    },
    medicalSpecialty: ["Neuropsicopedagogia", "Psicologia", "Neuropsicologia"],
    sameAs: [CONTACT.instagram],
  };
}
