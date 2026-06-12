import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)
 const anotherUser = " kaushal"

const reactElement = React.createElement( // if we have to use this then we have to import React in the file
  'a',
  { href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
