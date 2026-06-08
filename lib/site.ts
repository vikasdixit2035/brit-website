import { MAIN_SITE_NAME, MAIN_SITE_URL } from "@/lib/siteConfig";

export const SITE_URL = MAIN_SITE_URL;
export const SITE_NAME = MAIN_SITE_NAME;
export const SITE_EMAIL = "admissions@britinstitute.uk";
export const SITE_PHONE_UK_LOCAL = "7447 177848";
export const SITE_PHONE_UK = "+44 7447 177848";
export const SITE_PHONE_DISPLAY = "+44 (0) 7447 177848";
export const SITE_ADDRESS_LINES = [
  "London",
  "United Kingdom",
] as const;
export const SITE_ADDRESS = SITE_ADDRESS_LINES.join(", ");
export const SITE_ADDRESS_SHORT = "London, United Kingdom";

export const SITE_STATS = {
  learnersTrained: "10,000+",
  careerTransitions: "85%",
  hiringPartners: "100+",
  averageRating: "4.8",
};

export const DEFAULT_OG_IMAGE = "/hero-illustration.png";
