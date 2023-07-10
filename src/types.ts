export interface IData {
  project_name: string;
  description: string;
  requirements: string;
  user_stories: string;
  use_cases: string;
}

export type DataContextType = {
  data: IData;
  saveData: (data: IData) => void;
};