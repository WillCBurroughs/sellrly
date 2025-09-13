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
            text = "4. Advertiser Content & Platform License"
            maintext = "Advertisers retain all right, title, and interest in and to any advertising content submitted to the Platform, including but not limited to images, videos, product descriptions, branding elements, and promotional copy (“Ad Content”). This includes all applicable copyrights, trademarks, and intellectual property rights. Notwithstanding the foregoing, by submitting Ad Content to the Platform, the advertiser hereby grants Sellrly a non-exclusive, irrevocable, perpetual, royalty-free, fully sublicensable, worldwide license to: Use, reproduce, publicly display, perform, distribute, and modify the Ad Content, Create derivative works of the Ad Content for promotional, editorial, algorithmic, and operational purposes, Syndicate or distribute the Ad Content across SellrLY-owned properties and partner networks, Retain archived or derivative versions of Ad Content for compliance, analytics, or historical reference, This license survives the termination of any campaign, account, or agreement between the parties and applies to all content submitted or used within the scope of any campaign or promotion on the Platform." 
            />
            <SectionTerms
            text = "5. Anti-Fraud & Advertiser Representations"
            maintext = "Advertisers and sellers represent and warrant that: All content, offers, and products are lawful, truthful, and accurately described - No effort will be made to manipulate or artificially inflate metrics. Prohibited actions include but are not limited to: Click fraud or artificial engagement, Impression spoofing or bot traffic, Conversion inflation or misattribution, Use of deceptive landing pages or fake offers, Incentivized or paid interactions designed to manipulate campaign data Sellrly reserves the right to immediately: Suspend or terminate campaigns, Withhold performance payouts or credits, Ban user accounts, Share fraud data with applicable authorities or industry watchdogs Violations may result in legal action and forfeiture of all paid and unpaid media spend."
            />
            <SectionTerms
            text = "6. Data Ownership"
            maintext = "Sellrly exclusively owns all platform-level data generated through use of the Platform, including but not limited to: Campaign performance and attribution data, User engagement metrics, Buyer and seller behavior, Clickstream, session data, and conversion paths, Derived or aggregated insights. By using the Platform, you grant Sellrly a perpetual, royalty-free license to: Use this data for algorithm development, recommendation engines, and performance optimization, Train AI and machine learning models, Produce internal reports or third-party anonymized data products Sellrly reserves the right to immediately: Suspend or terminate campaigns, Withhold performance payouts or credits, Ban user accounts, Share fraud data with applicable authorities or industry watchdogs You acknowledge that you have no ownership or control over this data, even if derived from your activity."
            />
            <SectionTerms 
            text = "7. Dispute Resolution & Metrics Authority"
            maintext = "In the case of a campaign or billing dispute: SellrLY’s internal reporting, analytics systems, and platform logs shall serve as the final and binding source of truth. Third-party data, user-side analytics, or self-reported results will not be accepted unless pre-approved in writing. Any billing dispute must be submitted in writing within 10 calendar days of invoice issuance or campaign completion. Failure to raise a timely dispute waives your right to challenge the charge."
            />
            <SectionTerms
            text = "8. Prohibited Conduct"
            maintext = "In the case of a campaign or billing dispute: Promote or sell counterfeit, illegal, or unlicensed goods, Upload false or infringing content, Interfere with the Platform's security, integrity, or uptime Misrepresent yourself or your business Circumvent fee structures or engage in unauthorized scraping, cloning, or resale of the Platform Violations will result in termination and possible legal action."
            />
            <SectionTerms
            text = "9. Account Termination"
            maintext = "Sellrly may suspend or permanently terminate your access at any time for: Breach of these Terms, Legal or regulatory risk, Fraudulent or unethical conduct, Platform abuse. All rights granted to Sellrly under these Terms will survive termination."
            />
            <SectionTerms
            text = "10. Governing Law & Venue"
            maintext = "These Terms are governed by and construed under the laws of the State of [Insert State], without regard to conflict of law principles. You agree to resolve any disputes exclusively in the state or federal courts located in [Insert County, State], or via binding arbitration where applicable."
            />
            <SectionTerms
            text = "11. Modifications to Terms"
            maintext = "Sellrly reserves the right to modify these Terms at any time. Updated versions will be posted with a revised effective date. Continued use of the Platform after such changes constitutes acceptance of the updated Terms."
            />
            <SectionTerms
            text = "12. Contact Information"
            subtext = "contact@sellrly.com"
            maintext = "Address: Sellrly PO Box 616 Purchase, NY 10577"
            />
            
        </div>
        <FooterDesktop id = "termsFooter"/>
    </>
  );
}

export default PrivacyPolicyDesktop;
