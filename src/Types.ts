export type ProjectsType = {
  id: number;
  name: string;
  desc: string;
  img?: string;
  github: string;
  livedemo?: string;
  tech: string[];
};

export type TechDataType = {
  name: string;
  data: string[];
}[];
