export interface Brand {
  id: number;
  name: string;
  logo: string;
}

export interface BrandState {
  brands: Brand[];
  loading: boolean;
  error: any;
}

export interface BrandsResponse {
  id: number;
  name: string;
  logo: Logo;
  createdAt: string;
  updatedAt: string;
}

export interface Logo {
  id: number;
  path: string;
  createdAt: string;
  updatedAt: string;
}
