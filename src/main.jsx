import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from "./Greeting.jsx" 
import Mydish from './My_dish.jsx'
import Titlepage from './Title_page.jsx'
import Convert from './Convert.jsx'
import TodoList from './Date.jsx'
import FormatDate from './Date.jsx'
import HandleList from './Rendering_elements.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HandleList />
  </StrictMode>, 
)
