"use client";
import React from "react";
import { ScrollAnimation } from "../motion-framer/scrollAnimation";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import ScrollToTopButton from "../src/components/scrollTopButton";

const Page = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Header />
      <div className="max-w-[1920px] px-[8%] w-full  bg-slate-100 font-sans">
        <div className="flex justify-center py-[2%] flex-wrap md:flex-nowrap gap-4">
          <div className="flex flex-col gap-4 w-full">
            <ScrollAnimation>
              <div className="text-3xl text-yellow-500 font-sans font-bold">
                Services
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-base text-gray-800 font-sans ">
                <div className="text-xl mb-2 text-gray-800 font-sans font-bold">
                  Who We Serve
                </div>
                <ul className="list-disc ml-5 text-base">
                  <li>Clinical and Medical Groups</li>
                  <li>Private Health Insurance Companies</li>
                  <li>Hospital Systems</li>
                  <li>Healthcare Payers</li>
                  <li>Service Organizations</li>
                </ul>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-2xl text-yellow-500 font-sans font-bold mt-4">
                What We Do
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-base text-gray-800 font-sans ">
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Operations Support
                </div>
                <div className="text-base">
                  We offer program assessment and valuation, technical
                  assessment, operations, and vendor management. Our focus is on
                  improving operational effectiveness and vendor management.
                </div>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Consulting and Advisory Services
                </div>
                <div className="text-base">
                  We provide expert advisory or outsourced services for
                  identifying risk and quality gaps with strategic
                  recommendations for mitigation. Our services include risk
                  management & quality analytics, value-based contract
                  management, and financial projections & impact analysis.
                </div>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Data Analytics Services
                </div>
                <div className="text-base">
                  We offer comprehensive data analytics services including
                  extraction, staging, transformation, loading, warehousing, and
                  analysis to provide business insights.
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="text-2xl text-yellow-500 font-sans font-bold mt-4">
                We specialize in
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-base text-gray-800 font-sans ">
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Program Assessment / Valuation
                </div>
                <div className="text-base">
                  <ul>
                    <li className="font-bold">
                      Objective:{" "}
                      <span className="font-normal">
                        Engage experts in population valuation, risk scoring,
                        and financial projections to enhance Risk Adjustment and
                        Quality programs across MA, ACA, ACO, and Medicaid
                        sectors
                      </span>
                    </li>
                    <li className="font-bold">
                      Scope:{" "}
                      <span className="font-normal">
                        Includes developing, reviewing, and recommending
                        strategies for vendor RFPs to align with industry
                        standards and financial goals.
                      </span>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Technical Assessment
                </div>
                <div className="text-base">
                  <ul>
                    <li className="font-bold">
                      Objective:{" "}
                      <span className="font-normal">
                        Assess and optimize business requirements and technical
                        execution.
                      </span>
                    </li>
                    <li className="font-bold">
                      Details:{" "}
                      <span className="font-normal">
                        Design and implement workflows and technical solutions
                        for BPO projects.
                      </span>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Operations and Vendor Management
                </div>
                <div className="text-base">
                  <ul>
                    <li className="font-bold">
                      Objective:{" "}
                      <span className="font-normal">
                        Improve vendor management and operational effectiveness.
                      </span>
                    </li>
                    <li className="font-bold">
                      Focus:{" "}
                      <span className="font-normal">
                        Prioritize outcomes over volume or activity measure.
                      </span>
                    </li>
                  </ul>
                </div>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Risk Management & Quality Analytics
                </div>
                <div className="text-base">
                  <ul>
                    <li>
                      Offer expert advisory or outsourced services for
                      identifying risk and quality gaps, with strategic
                      recommendations for mitigation.
                    </li>
                    <li>
                      Proficient in Medicare Advantage, Medicaid, Commercial
                      ACA, and ACO program intricacies, ensuring regulatory
                      compliance.
                    </li>
                  </ul>
                </div>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Value-Based Contract Management
                </div>
                <div className="text-base">
                  <ul>
                    <li>
                      Comprehensive understanding of payer and provider dynamics
                      within Value-Based Contract frameworks.
                    </li>
                    <li>VBC contract review and operational processes</li>
                  </ul>
                </div>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Financial Projections & Impact Analysis
                </div>
                <div className="text-base">
                  <ul>
                    <li>
                      Accurately project the financial impact of risk adjustment
                      programs on population health metrics, including risk and
                      quality outcomes.
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>

            <br />
            <ScrollAnimation>
              <div className="text-3xl text-yellow-500 font-sans font-bold">
                Engagement Modes
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="text-base text-gray-800 font-sans mb-2">
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Consulting and Advisory Services
                </div>

                <ul className="list-disc ml-5 text-base">
                  <li>
                    Monthly retainer or fixed project rate for well defined
                    scope.
                  </li>
                  <li>
                    Lite Support – $1,600 month / Phone a Friend up to 6 hours
                    per month / 6 month commitment
                  </li>
                  <li>Additional Project hours can be purchased $500 per hr</li>
                  <li>
                    Projects can be priced for discounted rate with a bigger
                    commitment
                  </li>
                </ul>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Data Analytics Services
                </div>

                <ul className="list-disc ml-5 text-base">
                  <li>Implement data pipelines with Health Trixss</li>
                  <li>Managed services and infrastructure</li>
                  <li>
                    High Availability and secure access to data, reports and
                    dashboards
                  </li>
                </ul>
                <br />
                <div className="text-xl mb-3 text-gray-800 font-sans font-bold">
                  Health Trixss Subscription
                </div>

                <ul className="list-disc ml-5 text-base">
                  <li>
                    Lite Support – Phone a Friend up to 6 hours per month / 6
                    month commitment
                  </li>
                  <li>Additional Project hours are $500 per hr</li>
                  <li>
                    Larger projects can be priced for discounted rate with a
                    longer commitment
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Page;
