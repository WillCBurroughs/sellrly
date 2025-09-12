import React from "react";
import '../../index.css';
import TopSectionTerms from "../molecules/TopSectionTerms";
import SectionTerms from "../molecules/SectionTerms";
import FooterDesktop from "../molecules/FooterDesktop";

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
            <SectionTerms
            text = "3. User Responsibilities"
            maintext = "No Guarantee of Results: All advertising and promotional services are sold “as is”. Sellrly does not guarantee campaign outcomes, reach, conversion rates, or return on ad spend. Performance may vary based on many factors outside Sellrly’s control. Prepayment Required: All campaigns must be paid in full in advance of launch. No placements will be held or delivered until payment is received and cleared. No refunds will be issued for: Campaigns that have been delivered in full or in part, Services rendered or in progress, Performance dissatisfaction unless there is a documented platform error"
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

export default TermsOfServiceDesktop;
