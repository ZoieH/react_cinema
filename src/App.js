import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
