export interface SliderState {
  sliders: Slider[];
  loading: boolean;
  error: any;
}

export interface Slider {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  imageUrl: string;
}

export interface SliderResponse {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  image: Image;
}

interface Image {
  id: number;
  path: string;
  createdAt: string;
  updatedAt: string;
}
