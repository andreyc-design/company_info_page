import './App.scss';
import { AppRoutes } from '~routes';
import Navbar from '~shared/components/navbar/Navbar.tsx';

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
