import logo from './logo.svg';
import './App.css';
import PrimaryButton from './components/atoms/PrimaryButton';
import SecondaryButton from './components/atoms/SecondaryButton';
import './index.css';

function App() {
  return (
    <>
      <PrimaryButton text = "Primary Button"/>
      <h2 className='test'> Clash Grotesk </h2>
      <SecondaryButton text = "Secondary Button"/> 
    </>
  );
}

export default App;
