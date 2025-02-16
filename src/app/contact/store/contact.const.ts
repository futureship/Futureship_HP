export const ContactKindEnum = {
  homepage: 0,
  service: 1,
  article: 2,
  media: 3,
  staff: 4,
  other: 99,
} as const;
export type ContactKindEnum = keyof typeof ContactKindEnum;

export const contactKindEnumKeys = (): string[] => Object.keys(ContactKindEnum);

export type ContactKindSet = {
  [K in ContactKindEnum]: boolean;
};

export const initialContactKindSet = (): ContactKindSet => {
  const keys = Object.keys(ContactKindEnum);
  return Object.fromEntries([keys].map((key) => [key, false]));
};
