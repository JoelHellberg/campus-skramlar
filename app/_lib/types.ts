export type BossaGeneral = {
  id: string;
  forenings_namn: string;
  pengar_insamlat: number;
  banned: boolean;
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

export type BossaUpdate = {
  forening_id: string;
  created_at: Date;
  update: string;
};
