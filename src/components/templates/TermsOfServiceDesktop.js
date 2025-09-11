import React from "react";
import '../../index.css';
import TopSectionTerms from "../molecules/TopSectionTerms";
import SectionTerms from "../molecules/SectionTerms";

function TermsOfServiceDesktop(props) {
  return (
    <>
        <div className="holdDesktop">
            <TopSectionTerms 
            text = "Sellrly Terms of Service"
            subtext = "Effective 19 August 2025"
            maintext = "Welcome to Sellrly. These Terms of Service (“Terms”) govern your access to and use of the Sellrly platform, website, applications, tools, and services (collectively, the “Platform”). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, do not use Sellrly."
            />
            <SectionTerms
            text = "1. Platform Role & Disclaimer"
            maintext = "Sellrly is a marketplace and media platform that enables users to promote, sell, and advertise products. We do not manufacture, fulfill, store, verify, or guarantee any products or services offered by users. Sellrly is not the seller of record. All sales, claims, warranties, and product responsibilities are borne solely by the seller. Advertisers and sellers are responsible for their own content, legal compliance, and commercial activity." 
            />
            <SectionTerms
            text = "2. User Responsibilities"
            maintext = "Sellers are fully responsible for: Accurate product listings, inventory, shipping, and returns, Legal compliance including taxes, labeling, and product safety Customer support and post-sale communications. Buyers acknowledge that: Sellrly is not a party to any sales transaction, All purchases are made directly with sellers at their own risk, Product issues, disputes, or claims must be handled with the seller directly "
            />
        </div>
    </>
  );
}

export default TermsOfServiceDesktop;

        // <h2>{props.text}</h2>
        // <p className='subtext'>{props.subtext}</p>
        // <p className='mainText'>{props.maintext}</p>