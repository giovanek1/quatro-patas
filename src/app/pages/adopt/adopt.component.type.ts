export type AdoptionCard = {
  srcImg: string;
  title: string;
  description: string;
  isFav: boolean;
  adopted: boolean;
}

export type PropUpdateAdoptionType = 'isFav' | 'adopted';

export type AdoptionModal = {
  srcImg: string;
  srcAlt: string;
  title: string;
  description: string;
  bgClass: string;
}
