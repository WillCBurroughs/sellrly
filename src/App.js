import logo from './logo.svg';
import './index.css';
import NavBarDesktop from './components/molecules/NavBarDesktop';
import FAQSDesktop from './components/molecules/FAQSDesktop';
import PreFooterDesktop from './components/molecules/PreFooterDesktop';
import FooterDesktop from './components/molecules/FooterDesktop';
import ServicesAboveFold from './components/molecules/ServicesAboveFold';
import ServicesServicesDesktop from './components/molecules/ServicesServicesDesktop';
import TransformCampaignSectionDesktop from './components/atoms/TransformCampaignSectionDesktop';
import WhoWeServeDesktopHero from './components/molecules/WhoWeServeDesktopHero';
import WhoWeServeContainerDesktop from './components/molecules/WhoWeServeContainerDesktop';
import AbousUsDesktopFold from './components/molecules/AboutUsDesktopFold';
import HoldBannersAboutUsDesktop from './components/molecules/HoldBannersAboutUsDesktop';
import FoundersSectionDesktop from './components/molecules/FoundersSectionDesktop';
import ContactUsDesktopFold from './components/molecules/ContactUsDesktopFold';
import { Routes, Route, Outlet } from "react-router-dom";
import HomePageDesktop from './components/templates/HomePageDesktop';
import ServicesDesktop from './components/templates/ServicesDesktop';

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
    <>
      <WhoWeServeDesktopHero/> 
      <WhoWeServeContainerDesktop/>
      <TransformCampaignSectionDesktop id = "TransformWhoWeServe"/>
      <FAQSDesktop id = "FAQSDesktopWhoWeServe"/>
      <PreFooterDesktop id = "PreFooterDesktopWhoWeServe"/>
      <FooterDesktop id = "FooterDesktopWhoWeServe" />
    </>
  )
}

function AboutUs(){
  return (
    <>
      <AbousUsDesktopFold/>
      <HoldBannersAboutUsDesktop/>
      <FoundersSectionDesktop/>
      <FAQSDesktop id = "FAQSDesktopAboutUs"/>
      <PreFooterDesktop id = "PreFooterDesktopAboutUs"/>
      <FooterDesktop id = "FooterDesktopAboutUs" />
    </>
  )
}

function ContactUs(){
  return (
    <>
      <ContactUsDesktopFold/>
      <FAQSDesktop id = "FAQSDesktopContactUs"/>
      <PreFooterDesktop id = "PreFooterDesktopContactUs"/>
      <FooterDesktop id = "FooterDesktopContactUs" />
    </>
  )
}

function Layout() {
  return (
    <>
    <NavBarDesktop/>
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
