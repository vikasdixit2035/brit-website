import { MAIN_SITE_NAME, MAIN_SITE_URL } from "@/lib/siteConfig";

export const SITE_URL = MAIN_SITE_URL;
export const SITE_NAME = MAIN_SITE_NAME;
export const SITE_EMAIL = "info@britinstitute.uk";
export const SITE_PHONE_UK_LOCAL = "02034321901";
export const SITE_PHONE_UK = "+442034321901";
export const SITE_PHONE_DISPLAY = `${SITE_PHONE_UK_LOCAL} (or ${SITE_PHONE_UK} outside the UK)`;
export const SITE_ADDRESS_LINES = [
  "Office 7084",
  "58 Peregrine Road",
  "Hainault",
  "Ilford",
  "Essex",
  "IG6 3SZ",
] as const;
export const SITE_ADDRESS = SITE_ADDRESS_LINES.join(", ");
export const SITE_ADDRESS_SHORT = "Office 7084, 58 Peregrine Road, Hainault, Ilford, Essex, IG6 3SZ";

export const SITE_STATS = {
  learnersTrained: "10,000+",
  careerTransitions: "85%",
  hiringPartners: "100+",
  averageRating: "4.8",
};

export const DEFAULT_OG_IMAGE = "/hero-illustration.png";
