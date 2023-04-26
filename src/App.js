import { useEffect, useState } from 'react';
import NavBar from './components/nav';
import PageRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';
import { SetJWT } from './store/context';
import Cookies from 'js-cookie';

function App() {
  const [jwt, setJwt] = useState("");
  useEffect(() => {
    setJwt(Cookies.get("accessToken"));
  }, []);

  return (
    <div className="App">
      <SetJWT.Provider value={{ jwt, setJwt }} >
        <BrowserRouter>
          <NavBar />
          <PageRoutes />
        </BrowserRouter>
      </SetJWT.Provider>
    </div>
  );
}

export default App;
