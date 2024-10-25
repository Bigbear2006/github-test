import { Route, Routes } from 'react-router-dom';
import { LoginForm } from './pages';
import './sass/app.scss';
import { AuthProvider } from './context/AuthContext';

export const App = () => {
  return (
		<AuthProvider>
			<Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
		</AuthProvider>
    
  );
};
