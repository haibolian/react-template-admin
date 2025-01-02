import { ConfigProvider } from "antd"
import Router from "./router"
import useAntdTheme from "./hooks/useAntdTheme"

function App() {
  const { algorithm, themePatch } = useAntdTheme()

  return (
    <ConfigProvider componentSize="middle" theme={{
      algorithm,
      token: {
      },
      components: {
        Layout: {
          headerHeight: '5rem',
          ...themePatch.components.Layout
        },
      }
    }}>
      <Router />
    </ConfigProvider>

  )
}

export default App
