import { Match } from "../screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Modality: undefined;
      Home: undefined;
      Match: Match;
    }
  }
}
