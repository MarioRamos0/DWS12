import LogIn from '../LogIn/LogIn';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Register from '../Register/Register';

const AppRoutes = () => {
  let element = useRoutes([
    { path: '/', element: <LogIn /> },
    { path: '/Home', element: <Home /> },
    { path: '/Register', element: <Register /> },
  ]);

  return element;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;