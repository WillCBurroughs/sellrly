import React from "react";
import '../../index.css';
import TopSectionTerms from "../molecules/TopSectionTerms";
import SectionTerms from "../molecules/SectionTerms";
import FooterDesktop from "../molecules/FooterDesktop";

function PrivacyPolicyDesktop(props) {
  return (
    <>
        <div className="holdDesktop">
            <TopSectionTerms 
            text = "Sellrly Privacy Policy"
            subtext = "Effective 19 August 2025"
            maintext = "Sellrly (“we,” “us,” or “our”) values your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal and business information when you use our website, platform, applications, and services (collectively, the “Platform”). By accessing or using the Platform, you agree to this Privacy Policy. If you do not agree, do not use Sellrly."
            />
            <SectionTerms
            text = "1. Information We Collect"
            maintext = "Information You Provide to Us We collect personal and business information that you voluntarily provide, including: Name, email address, phone number Business credentials and tax IDs Payment or payout details (via third-party processors) Product listings, reviews, and seller content Customer service communications or support requests Information We Automatically Collect When you use Sellrly, we may automatically collect: IP address, device and browser information Site usage data (pages viewed, clicks, search history) Session data and behavioral signals Cookies, pixels, and tracking data Information from Third Parties We may receive additional information from: Payment processors and service providers Ad platforms, analytics vendors, and third-party tools Public databases and verification partners" 
            />
            <SectionTerms
            text = "2. How We Use Information"
            maintext = "We use your data to: Operate and maintain the Platform, Verify users, onboard sellers, and process transactions, Improve user experience and feature performance, Prevent fraud and ensure platform security, Provide customer support and respond to inquiries, Serve and optimize advertisements or promotions, Generate marketplace insights and trend data, Comply with legal or regulatory obligations"
            />
            <SectionTerms
            text = "3. How We Share Information"
            maintext = "We may share information with: Service providers (e.g., payment processors, data hosts, analytics firms), Other users, in cases where buyer-seller interaction requires data exchange (e.g., seller name, shipping info), Third-party platforms (e.g., TikTok, Shopify, email marketing tools) integrated into the Platform, Authorities, to comply with legal obligations or respond to law enforcement requests, Business successors, in the event of a merger, acquisition, or asset sale, We do not sell your personal information."
            />
            <SectionTerms
            text = "4. Cookies & Tracking Technologies"
            maintext = "We use cookies, web beacons, and tracking technologies to: Keep users logged in, Needed to fulfill the purposes outlined above, Required to comply with legal, financial, or operational obligations, You may request deletion of your account or data by contacting us." 
            />
            <SectionTerms
            text = "5. Data Retention"
            maintext = "We retain your information as long as: Your account remains active, Needed to fulfill the purposes outlined above, Required to comply with legal, financial, or operational obligations, You may request deletion of your account or data by contacting us."
            />
            <SectionTerms
            text = "6. Your Rights"
            maintext = "Depending on your jurisdiction, you may have rights to: Access or correct your personal data, Request deletion or portability of your data, Object to or restrict certain processing activities. To exercise your rights, email us at [Insert Privacy Email Address]. We may require identity verification before processing your request."
            />
            <SectionTerms 
            text = "7. Security Measures"
            maintext = "We implement technical and organizational safeguards to protect your data, including encryption, access controls, and regular audits. However, no system is 100% secure, and you use the Platform at your own risk."
            />
            <SectionTerms
            text = "8. Children's Privacy"
            maintext = "The Platform is not intended for use by children under 13 (or under 16 in some jurisdictions). We do not knowingly collect personal data from minors. If we learn that we have collected data from a child, we will delete it promptly."
            />
            <SectionTerms
            text = "9. International Data Transfers"
            maintext = "If you access the Platform from outside the United States, your information may be transferred to and processed in the U.S. or other jurisdictions that may not provide the same level of data protection. By using Sellrly, you consent to such transfers."
            />
            <SectionTerms
            text = "10. Changes to This Policy"
            maintext = "We may update this Privacy Policy periodically. Material changes will be posted on this page with an updated effective date. Continued use of the Platform after changes constitutes your acceptance of the revised policy."
            />
            <SectionTerms
            text = "11. Data Ownership and Usage Right"
            maintext = "Sellrly is the sole and exclusive owner of all data collected, generated, aggregated, or derived through or from: Platform usage, Buyer and seller behavior, Transactional history, Engagement with ads or content, Traffic sources, device data, and session signals Sellrly retains perpetual, royalty-free, and irrevocable rights to: Analyze, use, and enhance this data to drive Platform functionality, traffic, and monetization, Build and improve internal tools, algorithms, AI models, and recommendation systems, Aggregate and anonymize data for reporting, resale, or commercial partnerships, Promote marketplace visibility through traffic-driving strategies (e.g., syndication, search optimization, cross-platform advertising), By using the Platform, you grant Sellrly full rights to use this data without attribution, compensation, or approval, regardless of your future participation on the Platform."
            />
            <SectionTerms
            text = "12. Contact Information"
            subtext = "For privacy-related questions, data requests, or complaints: contact@sellrly.com"
            maintext = "Address: Sellrly PO Box 616 Purchase, NY 10577"
            />
            
        </div>
        <FooterDesktop id = "termsFooter"/>
    </>
  );
}

export default PrivacyPolicyDesktop;
