import { createStore } from 'zustand/vanilla';

export type GlobalState = {
  isModalOpen: boolean;
  isModalWarningOpen: boolean;
  isModalTutorialOpen: boolean;
  selectedProvince: string | null;
};

export type GlobalActions = {
  setIsModalOpen: (isModalOpen: boolean) => void;
  setIsModalWarningOpen: (isModalWarningOpen: boolean) => void;
  setIsModalTutorialOpen: (isModalTutorialOpen: boolean) => void;
  setSelectedProvince: (selectedProvince: string | null) => void;
};

export type GlobalStore = GlobalState & GlobalActions;

export const defaultInitState: GlobalState = {
  isModalOpen: false,
  isModalWarningOpen: false,
  isModalTutorialOpen: false,
  selectedProvince: null,
};

export const createGlobalStore = (
  initState: GlobalState = defaultInitState,
) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,

    setIsModalOpen: (isModalOpen) => set(() => ({ isModalOpen })),
    setIsModalWarningOpen: (isModalWarningOpen) => set(() => ({isModalWarningOpen})),
    setIsModalTutorialOpen: (isModalTutorialOpen) => set(() => ({isModalTutorialOpen})),
    setSelectedProvince: (selectedProvince) =>
      set(() => ({ selectedProvince })),
  }));
};
