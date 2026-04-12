import './App.css';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhereToBuy from './components/WhereToBuy/WhereToBuy';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
    </div>
  );
}

export default App;
