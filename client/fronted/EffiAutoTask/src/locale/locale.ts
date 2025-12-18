export const localeConfig = {
  es: {
    label: "Español",
    iso: "es",
  },
  en: {
    label: "English",
    iso: "en",
  },
  fr: {
    label: "Français",
    iso: "fr",
  },
  de: {
    label: "Deutsch",
    iso: "de",
  },
  ko: {
    label: "한국어",
    iso: "ko",
  },
  jp: {
    label: "日本語",
    iso: "jp",
  },
}

export type Locale = keyof typeof localeConfig
