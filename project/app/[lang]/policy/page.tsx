"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Globe, Shield, Cookie } from "lucide-react"

export default function PrivacyPolicyContent() {
  const [openSection, setOpenSection] = useState<string | null>("intro")

  const handleNavClick = (sectionId: string) => {
    setOpenSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="space-y-8 mt-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          How we protect your data across our international shipping operations in compliance with global regulations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Card className="p-6 md:sticky md:top-24 h-fit">
          <h2 className="text-xl font-semibold mb-4">Contents</h2>
          <nav className="space-y-2">
            <button
              onClick={() => handleNavClick("intro")}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                openSection === "intro" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              Introduction
            </button>
            <button
              onClick={() => handleNavClick("gdpr")}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                openSection === "gdpr" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              GDPR (European Union)
            </button>
            <button
              onClick={() => handleNavClick("lgpd")}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                openSection === "lgpd" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              LGPD (Brazil)
            </button>
            <button
              onClick={() => handleNavClick("ccpa")}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                openSection === "ccpa" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              CCPA (California, USA)
            </button>
            <button
              onClick={() => handleNavClick("pipeda")}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                openSection === "pipeda" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              PIPEDA (Canada)
            </button>
            <button
              onClick={() => handleNavClick("cookies")}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                openSection === "cookies" ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted"
              }`}
            >
              Cookie Policy
            </button>
          </nav>
        </Card>

        <div className="md:col-span-3 space-y-8">
          <section id="intro" className="scroll-mt-24">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Introduction</h2>
              </div>
              <div className="space-y-4">
                <p>
                  At our international shipping company, we are committed to protecting your privacy and ensuring the
                  security of your personal information. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your data when you use our services across our operations in 17 countries worldwide.
                </p>
                <p>
                  We comply with various international data protection regulations, including the General Data
                  Protection Regulation (GDPR) in the European Union, the Lei Geral de Proteção de Dados (LGPD) in
                  Brazil, the California Consumer Privacy Act (CCPA) in California, USA, and the Personal Information
                  Protection and Electronic Documents Act (PIPEDA) in Canada.
                </p>
                <p>
                  This policy outlines your rights under these regulations and how we ensure compliance with each of
                  them in our global operations.
                </p>
              </div>
            </Card>
          </section>

          <section id="gdpr" className="scroll-mt-24">
            <Accordion
              type="single"
              collapsible
              value={openSection === "gdpr" ? "gdpr" : undefined}
              onValueChange={(value) => setOpenSection(value || null)}
            >
              <AccordionItem value="gdpr" className="border-none">
                <Card>
                  <AccordionTrigger className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-left">GDPR (European Union)</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="space-y-4 pt-4">
                      <h3 className="text-xl font-semibold">What is GDPR?</h3>
                      <p>
                        The General Data Protection Regulation (GDPR) is a comprehensive data protection law in the EU
                        that came into effect on May 25, 2018. It gives EU citizens more control over their personal
                        data and regulates how businesses can collect, use, and store this data.
                      </p>

                      <h3 className="text-xl font-semibold">Your Rights Under GDPR</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Right to Access</strong> - You can request a copy of your personal data that we hold.
                        </li>
                        <li>
                          <strong>Right to Rectification</strong> - You can request that we correct any inaccurate or
                          incomplete personal data.
                        </li>
                        <li>
                          <strong>Right to Erasure</strong> - You can request that we delete your personal data in
                          certain circumstances.
                        </li>
                        <li>
                          <strong>Right to Restrict Processing</strong> - You can request that we limit how we use your
                          data.
                        </li>
                        <li>
                          <strong>Right to Data Portability</strong> - You can request a copy of your data in a
                          machine-readable format.
                        </li>
                        <li>
                          <strong>Right to Object</strong> - You can object to our processing of your personal data.
                        </li>
                        <li>
                          <strong>Rights Related to Automated Decision Making</strong> - You have rights related to
                          automated decision-making and profiling.
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold">How We Comply</h3>
                      <p>We have implemented various measures to ensure GDPR compliance, including:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Obtaining explicit consent before collecting personal data</li>
                        <li>Implementing strong data security measures</li>
                        <li>Conducting regular data protection impact assessments</li>
                        <li>Maintaining detailed records of our data processing activities</li>
                        <li>Appointing a Data Protection Officer (DPO) to oversee GDPR compliance</li>
                        <li>Ensuring data processors comply with GDPR requirements</li>
                        <li>Providing mechanisms for you to exercise your rights</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="lgpd" className="scroll-mt-24">
            <Accordion
              type="single"
              collapsible
              value={openSection === "lgpd" ? "lgpd" : undefined}
              onValueChange={(value) => setOpenSection(value || null)}
            >
              <AccordionItem value="lgpd" className="border-none">
                <Card>
                  <AccordionTrigger className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-left">LGPD (Brazil)</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="space-y-4 pt-4">
                      <h3 className="text-xl font-semibold">What is LGPD?</h3>
                      <p>
                        The Lei Geral de Proteção de Dados (LGPD) is Brazil's data protection law that came into effect
                        in September 2020. It regulates the processing of personal data in Brazil and is similar to the
                        GDPR in many respects.
                      </p>

                      <h3 className="text-xl font-semibold">Your Rights Under LGPD</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Right to Confirmation</strong> - You can confirm if we process your personal data.
                        </li>
                        <li>
                          <strong>Right to Access</strong> - You can access your personal data that we hold.
                        </li>
                        <li>
                          <strong>Right to Correction</strong> - You can request correction of incomplete, inaccurate,
                          or outdated data.
                        </li>
                        <li>
                          <strong>Right to Anonymization, Blocking, or Deletion</strong> - You can request these actions
                          for unnecessary or excessive data.
                        </li>
                        <li>
                          <strong>Right to Portability</strong> - You can request the portability of your data to
                          another service provider.
                        </li>
                        <li>
                          <strong>Right to Deletion</strong> - You can request deletion of data processed with your
                          consent.
                        </li>
                        <li>
                          <strong>Right to Information</strong> - You can request information about public and private
                          entities with which we have shared your data.
                        </li>
                        <li>
                          <strong>Right to Revoke Consent</strong> - You can revoke your consent at any time.
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold">How We Comply</h3>
                      <p>We have implemented various measures to ensure LGPD compliance, including:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Obtaining explicit consent before collecting personal data</li>
                        <li>Implementing appropriate security measures to protect personal data</li>
                        <li>Appointing a Data Protection Officer (DPO) to oversee LGPD compliance</li>
                        <li>Maintaining records of data processing activities</li>
                        <li>Conducting data protection impact assessments</li>
                        <li>Providing mechanisms for you to exercise your rights</li>
                        <li>Reporting data breaches to the Brazilian National Data Protection Authority (ANPD)</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="ccpa" className="scroll-mt-24">
            <Accordion
              type="single"
              collapsible
              value={openSection === "ccpa" ? "ccpa" : undefined}
              onValueChange={(value) => setOpenSection(value || null)}
            >
              <AccordionItem value="ccpa" className="border-none">
                <Card>
                  <AccordionTrigger className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-left">CCPA (California, USA)</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="space-y-4 pt-4">
                      <h3 className="text-xl font-semibold">What is CCPA?</h3>
                      <p>
                        The California Consumer Privacy Act (CCPA) is a state statute intended to enhance privacy rights
                        and consumer protection for residents of California. It came into effect on January 1, 2020, and
                        gives California residents more control over the personal information that businesses collect
                        about them.
                      </p>

                      <h3 className="text-xl font-semibold">Your Rights Under CCPA</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Right to Know</strong> - You can request information about the personal information we
                          collect, use, disclose, and sell.
                        </li>
                        <li>
                          <strong>Right to Delete</strong> - You can request deletion of your personal information that
                          we have collected.
                        </li>
                        <li>
                          <strong>Right to Opt-Out</strong> - You can opt-out of the sale of your personal information.
                        </li>
                        <li>
                          <strong>Right to Non-Discrimination</strong> - We will not discriminate against you for
                          exercising your CCPA rights.
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold">How We Comply</h3>
                      <p>We have implemented various measures to ensure CCPA compliance, including:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Providing a "Do Not Sell My Personal Information" link on our website</li>
                        <li>Updating our privacy policy to include CCPA-required disclosures</li>
                        <li>Implementing processes to respond to consumer requests</li>
                        <li>Training our staff on CCPA requirements</li>
                        <li>Maintaining records of CCPA requests and our responses</li>
                        <li>Implementing reasonable security measures to protect personal information</li>
                        <li>Conducting regular assessments of our data practices</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="pipeda" className="scroll-mt-24">
            <Accordion
              type="single"
              collapsible
              value={openSection === "pipeda" ? "pipeda" : undefined}
              onValueChange={(value) => setOpenSection(value || null)}
            >
              <AccordionItem value="pipeda" className="border-none">
                <Card>
                  <AccordionTrigger className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-left">PIPEDA (Canada)</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="space-y-4 pt-4">
                      <h3 className="text-xl font-semibold">What is PIPEDA?</h3>
                      <p>
                        The Personal Information Protection and Electronic Documents Act (PIPEDA) is Canada's federal
                        privacy law for private-sector organizations. It sets out the ground rules for how businesses
                        must handle personal information in the course of their commercial activities.
                      </p>

                      <h3 className="text-xl font-semibold">Your Rights Under PIPEDA</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>Right to Access</strong> - You can request access to your personal information that we
                          hold.
                        </li>
                        <li>
                          <strong>Right to Correction</strong> - You can request correction of your personal information
                          if it is inaccurate or incomplete.
                        </li>
                        <li>
                          <strong>Right to Withdraw Consent</strong> - You can withdraw your consent for the collection,
                          use, and disclosure of your personal information.
                        </li>
                        <li>
                          <strong>Right to File a Complaint</strong> - You can file a complaint with the Privacy
                          Commissioner of Canada if you believe your rights have been violated.
                        </li>
                      </ul>

                      <h3 className="text-xl font-semibold">How We Comply</h3>
                      <p>We have implemented various measures to ensure PIPEDA compliance, including:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Obtaining meaningful consent before collecting, using, or disclosing personal information
                        </li>
                        <li>Limiting collection to what is necessary for identified purposes</li>
                        <li>Implementing appropriate security safeguards to protect personal information</li>
                        <li>Ensuring accuracy of personal information</li>
                        <li>Providing individuals with access to their personal information</li>
                        <li>Being transparent about our privacy practices</li>
                        <li>Limiting use, disclosure, and retention of personal information</li>
                        <li>Responding to complaints and inquiries</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </section>

          <section id="cookies" className="scroll-mt-24">
            <Accordion
              type="single"
              collapsible
              value={openSection === "cookies" ? "cookies" : undefined}
              onValueChange={(value) => setOpenSection(value || null)}
            >
              <AccordionItem value="cookies" className="border-none">
                <Card>
                  <AccordionTrigger className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Cookie className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-left">Cookie Policy</h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="space-y-4 pt-4">
                      <h3 className="text-xl font-semibold">What Are Cookies?</h3>
                      <p>
                        Cookies are small text files that are placed on your device when you visit a website. They are
                        widely used to make websites work more efficiently and provide information to the website
                        owners.
                      </p>

                      <h3 className="text-xl font-semibold">Types of Cookies We Use</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium">Essential Cookies</h4>
                          <p>
                            These cookies are necessary for the website to function properly. They enable core
                            functionality such as security, network management, and account access. You cannot opt out
                            of these cookies.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Performance Cookies</h4>
                          <p>
                            These cookies collect information about how you use our website, such as which pages you
                            visit most often. All information collected is aggregated and anonymous.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Functionality Cookies</h4>
                          <p>
                            These cookies allow the website to remember choices you make (such as your language
                            preference) and provide enhanced, more personal features.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium">Targeting/Advertising Cookies</h4>
                          <p>
                            These cookies are used to deliver advertisements more relevant to you and your interests.
                            They are also used to limit the number of times you see an advertisement and help measure
                            the effectiveness of advertising campaigns.
                          </p>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold">Managing Cookies</h3>
                      <p>
                        Most web browsers allow you to manage your cookie preferences. You can set your browser to
                        refuse cookies, or to alert you when cookies are being sent. The methods for doing so vary from
                        browser to browser, and from version to version.
                      </p>
                      <p>
                        You can also use our Cookie Consent Tool to manage your preferences for non-essential cookies on
                        our website.
                      </p>

                      <h3 className="text-xl font-semibold">Cookies and Global Privacy Regulations</h3>
                      <p>Different privacy regulations have specific requirements regarding cookies:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <strong>GDPR (EU)</strong>: Requires explicit consent before placing non-essential cookies.
                        </li>
                        <li>
                          <strong>LGPD (Brazil)</strong>: Requires clear information about cookies and the option to
                          accept or reject them.
                        </li>
                        <li>
                          <strong>CCPA (California)</strong>: Requires disclosure of cookies that collect personal
                          information and the option to opt-out of the sale of that information.
                        </li>
                        <li>
                          <strong>PIPEDA (Canada)</strong>: Requires meaningful consent for cookies that collect
                          personal information.
                        </li>
                      </ul>

                      <p>We comply with these regulations by:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Providing clear information about the cookies we use</li>
                        <li>Obtaining consent where required</li>
                        <li>Providing mechanisms to manage cookie preferences</li>
                        <li>Ensuring that our cookie practices align with our overall privacy policy</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  )
}