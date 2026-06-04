export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  results: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}
