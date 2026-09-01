import { MAIN_SITE_NAME, MAIN_SITE_URL } from "@/lib/siteConfig";

export const SITE_URL = MAIN_SITE_URL;
export const SITE_NAME = MAIN_SITE_NAME;
export const SITE_EMAIL = "admissions@britinstitute.uk";
export const SITE_PHONE_UK_LOCAL = "7447 177848";
export const SITE_PHONE_UK = "7447 177848";
export const SITE_PHONE_DISPLAY = "7447 177848";
export const SITE_WHATSAPP_NUMBER = "447447177848";
export const SITE_ADDRESS_STREET = "58 Peregrine Rd";
export const SITE_ADDRESS_LOCALITY = "Ilford";
export const SITE_ADDRESS_POSTCODE = "IG6 3SZ";
export const SITE_ADDRESS_COUNTRY = "United Kingdom";
export const SITE_ADDRESS_COUNTRY_CODE = "GB";
export const SITE_ADDRESS_LINES = [
  SITE_ADDRESS_STREET,
  `${SITE_ADDRESS_LOCALITY} ${SITE_ADDRESS_POSTCODE}`,
  SITE_ADDRESS_COUNTRY,
] as const;
export const SITE_ADDRESS = SITE_ADDRESS_LINES.join(", ");
export const SITE_POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: SITE_ADDRESS_STREET,
  addressLocality: SITE_ADDRESS_LOCALITY,
  postalCode: SITE_ADDRESS_POSTCODE,
  addressCountry: SITE_ADDRESS_COUNTRY_CODE,
} as const;

export const SITE_STATS = {
  learnersTrained: "10,000+",
  careerTransitions: "85%",
  hiringPartners: "1,000+",
  averageRating: "4.8",
};

export const DEFAULT_OG_IMAGE = "/og.png";
