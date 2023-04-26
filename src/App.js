import NavBar from './components/nav';
import PageRoutes from './routes/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <PageRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
