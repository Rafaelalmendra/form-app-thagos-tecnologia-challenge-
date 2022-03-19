import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import theme from './styles/theme';
import Login from './pages/login';
import Sucess from './pages/sucess';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sucess" element={<Sucess />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
