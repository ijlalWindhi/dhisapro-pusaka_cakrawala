import { createStore } from 'zustand/vanilla';

export type GlobalState = {
  isModalOpen: boolean;
  selectedProvince: string | null;
};

export type GlobalActions = {
  setIsModalOpen: (isModalOpen: boolean) => void;
  setSelectedProvince: (selectedProvince: string | null) => void;
};

export type GlobalStore = GlobalState & GlobalActions;

export const defaultInitState: GlobalState = {
  isModalOpen: false,
  selectedProvince: null,
};

export const createGlobalStore = (
  initState: GlobalState = defaultInitState,
) => {
  return createStore<GlobalStore>()((set) => ({
    ...initState,

    setIsModalOpen: (isModalOpen) => set(() => ({ isModalOpen })),
    setSelectedProvince: (selectedProvince) =>
      set(() => ({ selectedProvince })),
  }));
};
