import { Route, Routes } from 'react-router-dom';
import { Login } from './pages';
import './sass/app.scss';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
