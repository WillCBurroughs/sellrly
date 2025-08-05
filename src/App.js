import logo from './logo.svg';
import './index.css';
import PrimaryButton from './components/atoms/PrimaryButton';
import SecondaryButton from './components/atoms/SecondaryButton';
import NavBarItem from './components/atoms/NavBarItem';
import LogoTagline from './components/atoms/LogoTagline';
import NavBarDesktop from './components/molecules/NavBarDesktop';


function App() {
  return (
    <>
      <NavBarDesktop/>
      <br/>
      <br/>
      <br/>
      <br/>
            <br/>
      <br/>
      <br/>
      <br/>
      <h1> H1 </h1>
      <h2> H2 </h2>
      <h3> H3 </h3>
      <h4> H4 </h4>
      <h5> H5 </h5>
      <p className='blb'> Body | Large | Bold </p>
      <p className='blr'> Body | Large | Regular </p>
      <p className='bmb'> Body | Medium | Bold </p>
      <p className='bmr'> Body | Medium | Regular </p>
      <p className='bnb'> Body | Normal | Bold </p>
      <p className='bnr'> Body | Normal | Regular </p>
      <p className='stb'> Small Text Bold </p>
      <p className='str'> Small Text Regular </p>
      <PrimaryButton text = "Primary Button"/>
      <SecondaryButton text = "Secondary Button"/> 
      <NavBarItem text = "Who we serve"/> 
      <LogoTagline />
    </>
  );
}

export default App;
