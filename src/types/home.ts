export interface Country {
  flag: string;
  independent: boolean;
  name: string;
  region: string;
}

export interface CountryFilter {
  region: string | undefined;
}
