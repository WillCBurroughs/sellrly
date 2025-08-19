import logo from './logo.svg';
import './index.css';
import NavBarDesktop from './components/molecules/NavBarDesktop';
import HomeAboveFold from './components/molecules/HomeAboveFold';
import JumpDownButton from './components/atoms/JumpDownButton';
import VideoDesktopHome from './components/molecules/VideoDesktopHome';
import BenefitsDesktop from './components/molecules/BenefitsDesktop';
import ComparisonDesktop from './components/molecules/ComparisonDesktop';
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
import { Routes, Route, Outlet } from "react-router-dom";

// Homepage for routing
function HomePage() {
  return (
    <>
      <HomeAboveFold/>
      <JumpDownButton/>
      <VideoDesktopHome/>
      <BenefitsDesktop/>
      <ComparisonDesktop/>
      <FAQSDesktop/>
      <PreFooterDesktop/>
      <FooterDesktop/>
    </>
  );
}

// Catch all for page not found
function NotFound()    { return <div style={{padding:0}}>404</div>; }

// Services page
function ServicesPage()  { 
  return (
    <>
    <ServicesAboveFold/>
    <ServicesServicesDesktop/>
    <TransformCampaignSectionDesktop id = "TransformServices"/>
    <FAQSDesktop id = "FAQSDesktopServices"/>
    <PreFooterDesktop id = "PreFooterDesktopServices"/>
    <FooterDesktop id = "FooterDesktopServices" />
    </>
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
