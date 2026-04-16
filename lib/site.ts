export const SITE_URL = "https://britinstitute.uk";
export const SITE_NAME = "Brit Institute";
export const SITE_EMAIL = "info@britinstitute.uk";
export const SITE_PHONE_UK = "+447520664011";
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
