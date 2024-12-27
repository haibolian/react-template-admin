import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TabType = {
  key: string;
  label: string;
}

type TabsStoreType = {
  tabs: TabType[];
  addTab: (tab: TabType) => void;
  removeTab: (key: string) => void
}

const tabsStore = create<TabsStoreType>()(
  persist(set => ({
    tabs: [],
    addTab: (tab) => set(state => ({ tabs: [...state.tabs, tab] })),
    removeTab: (key) => set(state => ({ tabs: state.tabs.filter(t => t.key !== key)}))
  }),
  {
    name: 'tabsStore',
    storage: createJSONStorage(() => sessionStorage),
    partialize: state => ({ tabs: state.tabs }) 
  })
)

export default tabsStore;
