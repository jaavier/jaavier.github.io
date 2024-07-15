type DescriptionI18n = {
  en: string;
  es: string
  [key: string]: string
}

declare type Project = {
  name: string;
  description: DescriptionI18n;
  url: string;
  stars: number;
  forks: number;
  date: string;
  image: string;
  features: string[]
  [key: string]: any
}