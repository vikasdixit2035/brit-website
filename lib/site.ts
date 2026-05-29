import { MAIN_SITE_NAME, MAIN_SITE_URL } from "@/lib/siteConfig";

export const SITE_URL = MAIN_SITE_URL;
export const SITE_NAME = MAIN_SITE_NAME;
export const SITE_EMAIL = "admissions@britinstitute.co.uk";
export const SITE_PHONE_UK_LOCAL = "020 1234 5678";
export const SITE_PHONE_UK = "+442012345678";
export const SITE_PHONE_DISPLAY = "+44 (0) 20 1234 5678";
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
