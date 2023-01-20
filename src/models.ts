export interface CustomComponent {
  className?: string;
  children: string | React.ReactNode | React.ReactNode[];
}

export interface IProductOption {
  imgSrc: string;
  color: string;
  isAvailable: boolean;
}
