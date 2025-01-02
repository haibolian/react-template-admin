import settingStore from "@/store/settingStore"
import { getSysTheme } from "@/utils/system"
import { theme } from "antd"
import { useMemo } from "react"
import { useStore } from "zustand"

const themePatchToken = {
  light: {
    components: {
      Layout: {
        headerBg: '#fff',
        siderBg: '#fff',
      }
    }
  },
  dark: {
    components: {
      Layout: {
        headerBg: 'rgb(20, 20, 20)',
        siderBg: 'rgb(20, 20, 20)',
      }
    }
  }
}

const useAntdTheme = () => {
  const settingTheme = useStore(settingStore, state => state.theme)

  const algorithm = useMemo(() => {
    return settingTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  }, [settingTheme])

  const themePatch = useMemo(() => {
    let theme = settingTheme;
    if(theme === 'auto') theme = getSysTheme()
    return themePatchToken[theme]
  }, [settingTheme])

  return { algorithm, themePatch }
}

export default useAntdTheme