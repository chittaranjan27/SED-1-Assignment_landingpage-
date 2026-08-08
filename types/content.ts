export type NavItem = {
  label: string;
  href: string;
};

export type ButtonData = {
  label: string;
  href: string;
  rightIcon?: string;
};

export type FeatureData = {
  id?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  button: ButtonData;
};
