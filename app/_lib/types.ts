export type BossaGeneral = {
  id: string;
  forenings_namn: string;
  pengar_insamlat: number;
};

export type BossaDetailed = {
  id: string;
  phone_number: string;
  swish_sum: number;
  description: string;
};

export type BossaPrivate = {
  id: string;
  password: string;
  forenings_namn: number;
  active: boolean;
};
