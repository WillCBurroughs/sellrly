
import './index.css';
import NavBar from './components/templates/NavBar';
import { Routes, Route, Outlet } from "react-router-dom";
import HomePageDesktop from './components/templates/HomePageDesktop';
import ServicesDesktop from './components/templates/ServicesDesktop';
import WhoWeServeDesktop from './components/templates/WhoWeServeDesktop';
import AboutUsDesktop from './components/templates/AboutUsDesktop';
import ContactUsDesktop from './components/templates/ContactUsDesktop';

// Homepage for routing
function HomePage() {
  return (
    <>
      <HomePageDesktop/>
    </>
  );
}

// Catch all for page not found
function NotFound()    { return <div style={{padding:0}}>404</div>; }

// Services page
function ServicesPage()  { 
  return (
    <ServicesDesktop/>
  )
}

function WhoWeServe() {
  return (
    <WhoWeServeDesktop/>
  )
}

function AboutUs(){
  return (
      <AboutUsDesktop/>
  )
}

function ContactUs(){
  return (
    <>
      <ContactUsDesktop/>
    </>
  )
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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
