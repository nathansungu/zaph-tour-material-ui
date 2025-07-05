import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PagesRoutes from "./routes/routes";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f4f4f4',
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
