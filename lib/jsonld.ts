import { CONTACT } from "./constants";

export function medicalClinicJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Instituto Nefrance",
    description:
      "Clínica multidisciplinar especializada em TDAH, TEA, dislexia e dificuldades de aprendizagem em Goiânia.",
    url: "https://institutonefrance.com.br",
    telephone: `+55${CONTACT.phoneIntl}`,
    image: "https://institutonefrance.com.br/og.png",
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
    medicalSpecialty: [
      "Neuropsicopedagogia",
      "Psicologia",
      "Neuropsicologia",
    ],
    sameAs: [CONTACT.instagram],
  };
}
