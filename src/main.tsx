import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

createRoot(document.getElementById('app')!).render(
  <App />
)
