type ModalityPageKeys = keyof ReactNavigation.RootParamList;

export interface Modality {
  name: string;
  emoji: string;
  page?: ModalityPageKeys;
}
