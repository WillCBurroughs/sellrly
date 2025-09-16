
import './index.css';
import NavBar from './components/templates/NavBar';
import { Routes, Route, Outlet } from "react-router-dom";
import HomePageAll from './components/pages/HomePageAll';
import ServicesPageAll from './components/pages/ServicesPageAll';
import WhoWeServeAll from './components/pages/WhoWeServeAll';
import AboutUsAll from './components/pages/AboutUsAll';
import ContactUsDesktop from './components/templates/ContactUsDesktop';
import TermsOfServiceDesktop from './components/templates/TermsOfServiceDesktop';
import PrivacyPolicyDesktop from './components/templates/PrivacyPolicyDesktop';

// Homepage for routing
function HomePage() {
  return (
    <>
      <HomePageAll/>
    </>
  );
}

// Catch all for page not found
function NotFound()    { return <div style={{padding:0}}>404</div>; }

// Services page
function ServicesPage()  { 
  return (
    <ServicesPageAll/>
  )
}

function WhoWeServe() {
  return (
    <WhoWeServeAll/>
  )
}

function AboutUs(){
  return (
      <AboutUsAll/>
  )
}

function ContactUs(){
  return (
    <>
      <ContactUsDesktop/>
    </>
  )
}

function TermsOfService(){
  return (
    <>
      <TermsOfServiceDesktop/>
    </>
  )
}

function PrivacyPolicy() {
  return (
    <>
      <PrivacyPolicyDesktop/>
    </>
  );
}

function Layout() {
  return (
    <>
    <NavBar />
    <Outlet /> 
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='Services' element = {<ServicesPage/>} />
        <Route path='Who-We-Serve' element = {<WhoWeServe/>} />
        <Route path="About-Us" element = {<AboutUs/>} />
        <Route path="Contact-Us" element = {<ContactUs/>}/>
        <Route path="terms-of-service" element = {<TermsOfService/>}/>
        <Route path="privacy-policy" element = {<PrivacyPolicy/>}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
