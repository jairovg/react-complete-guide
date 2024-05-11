type BasicInfo = {
  title: string;
  description: string;
};

export type Concept = BasicInfo & {
  image: string;
};

export type Example = BasicInfo & {
  code: string;
};
