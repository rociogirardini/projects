import NavBar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/Home';
import Experience from './components/Experience';
import Studies from './components/Studies';
import Contact from './components/Contact';
import Work from './components/Work';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
    typography: {
      fontFamily: "'Source Code Pro', monospace"
    }
  });

function App () {

    return (
        <ThemeProvider theme={darkTheme}>
            <NavBar />
            <Home />
            <Experience />
            <Work />
            <Studies />
            <Contact />
        </ThemeProvider>
    )
}

export default App;