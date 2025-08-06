import logo from './logo.svg';
import './index.css';
import NavBarDesktop from './components/molecules/NavBarDesktop';
import HomeAboveFold from './components/molecules/HomeAboveFold';
import JumpDownButton from './components/atoms/JumpDownButton';

function App() {
  return (
    <>
      <NavBarDesktop/>
      <HomeAboveFold/>
      <JumpDownButton/>
    </>
  );
}

export default App;
