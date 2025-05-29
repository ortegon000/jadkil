import ogImageSrc from "@images/social.png";

import partner1 from "@assets/images/customers/pepsico.webp";
import partner2 from "@assets/images/customers/tv-azteca.webp";
import partner3 from "@assets/images/customers/casa-alvarez.webp";
import partner4 from "@assets/images/customers/walmart.webp";
import partner5 from "@assets/images/customers/liverpool.webp";
import partner6 from "@assets/images/customers/delimarket.webp";

export const SITE = {
  title: "JADKIL - Comercializadora, suministros y transporte en México",
  tagline: "Comercializadora, suministros y transporte en México",
  description: "JADKIL es una empresa que se dedica a la comercialización de suministros y transporte en México.",
  description_short: "JADKIL es una empresa que se dedica a la comercialización de suministros y transporte en México.",
  url: "https://jadkil.com.mx",
  author: "ControlMas",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "es-MX",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "es-MX",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Comercializadora, suministros y transporte en México`,
  description: "Comercializadora, suministros y transporte en México",
  image: ogImageSrc,
};

export const partnersData = [
    {
        icon: partner1,
        name: "first",
        href: "#",
    },
    {
        icon: partner2,
        name: "Second",
        href: "#",
    },
    {
        icon: partner3,
        name: "Third",
        href: "#",
    },

    { 
        icon: partner4,
        name: "Fourth",
        href: "#",
    },
    {
        icon: partner5,
        name: "Fifth",
        href: "#",
    },
    {
        icon: partner6,
        name: "Sixth",
        href: "#",
    },
]