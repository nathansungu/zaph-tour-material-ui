import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PagesRoutes from "./routes/routes";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:'#003915', 
    },
    secondary: {
      main: '#516351',
    },
    background: {
      default: '#b6f1bb',
    },
  },
  typography: {
    fontFamily: ' "fantasy", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  }

  })

  return (
    <>
    <ThemeProvider theme={theme}>
       <BrowserRouter>
        < PagesRoutes/>
      </BrowserRouter>
    </ThemeProvider>
   
    
      
    </>
  );
}

export default App;
