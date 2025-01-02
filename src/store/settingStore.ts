import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeType = 'auto' | 'light' | 'dark'

interface SettingStoreType {
  theme: ThemeType,
  setTheme: (theme: ThemeType) => void
}

const settingStore = create<SettingStoreType>()(
  persist(set => ({
    theme: 'auto',
    setTheme: (theme: ThemeType) => set({ theme }),
  }),{
    name: 'settingStore',
    partialize: state => ({ theme: state.theme })
  })
)

export default settingStore