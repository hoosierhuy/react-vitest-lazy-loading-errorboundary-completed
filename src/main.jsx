import { StrictMode, Fragment, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'

import Data from './Data.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Data />
  </StrictMode>,
)
