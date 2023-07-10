//@ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import theme from "./theme";
import DataProvider from "./context";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <ChakraProvider>
              <DataProvider>
                  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                  <App />
              </DataProvider>
          </ChakraProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
