import logo from './logo.svg';
import './index.css';
import NavBarDesktop from './components/molecules/NavBarDesktop';
import HomeAboveFold from './components/molecules/HomeAboveFold';
import JumpDownButton from './components/atoms/JumpDownButton';
import VideoDesktopHome from './components/molecules/VideoDesktopHome';
import BenefitsDesktop from './components/molecules/BenefitsDesktop';
import ComparisonDesktop from './components/molecules/ComparisonDesktop';

function App() {
  return (
    <>
      <NavBarDesktop/>
      <HomeAboveFold/>
      <JumpDownButton/>
      <VideoDesktopHome/>
      <BenefitsDesktop/>
      <ComparisonDesktop/>
    </>
  );
}

export default App;
