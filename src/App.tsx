import { ConfigProvider } from "antd"
import Router from "./router"


function App() {
  return (
    <ConfigProvider componentSize="middle" theme={{
      components: {
        Layout: {
          headerHeight: '5rem',
        },
      }
    }}>
      <Router />
    </ConfigProvider>

  )
}

export default App
