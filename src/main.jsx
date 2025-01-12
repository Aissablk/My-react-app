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
import OneElement from './Rendering_composants.jsx'
import ListItem from './Rendering_composants.jsx'
import Affiche from './Rendering_composants.jsx'
import Lion from './Conditions.jsx'
import Affichage from './Conditions_2.jsx'
import TodoKeylist from './Keys_in_react.jsx'
import ButtonList from './Passing_data_between_companents.jsx'
import Mynewbutton from './State_React.jsx'
import NewButton from './State_React.jsx'
import Profile from './Sculptruel.jsx'
import Person from './More_about_state.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Person />
  </StrictMode>, 
) 
