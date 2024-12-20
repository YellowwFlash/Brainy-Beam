import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import chessStore from '@redux/store/store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'

const store = chessStore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
