"use client";

import Layout from "@/components/home/layout";
import Loader from "@/components/loader";
import { useCheckAuth } from "@/hooks/use-check-auth";
import { useTranslations } from "next-intl";

export default function Refund() {
  const { isLoading, isAuthenticated } = useCheckAuth();
  const t = useTranslations("Refund");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout isAuthenticated={isAuthenticated}>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              {t("title")}
            </h1>
            <p className="text-gray-600">
              {t("lastUpdated")}
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section1.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("section1.content")}
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section2.title")}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section2.subsection1.title")}</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section2.subsection1.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section2.subsection2.title")}</h3>
                  <p className="text-gray-700 mb-3">{t("section2.subsection2.intro")}</p>

                  <div className="space-y-3">
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">{t("section2.subsection2.moneyBack.title")}</h4>
                      <p className="text-sm text-gray-600">
                        {t("section2.subsection2.moneyBack.description")}
                      </p>
                    </div>
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">{t("section2.subsection2.technicalIssues.title")}</h4>
                      <p className="text-sm text-gray-600">
                        {t("section2.subsection2.technicalIssues.description")}
                      </p>
                    </div>
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">{t("section2.subsection2.serviceOutage.title")}</h4>
                      <p className="text-sm text-gray-600">
                        {t("section2.subsection2.serviceOutage.description")}
                      </p>
                    </div>
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">{t("section2.subsection2.unauthorizedPayment.title")}</h4>
                      <p className="text-sm text-gray-600">
                        {t("section2.subsection2.unauthorizedPayment.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section3.title")}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section3.subsection1.title")}</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section3.subsection1.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section3.subsection2.title")}</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section3.subsection2.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section4.title")}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section4.subsection1.title")}</h3>
                  <p className="text-gray-700 mb-3">{t("section4.subsection1.intro")}</p>

                  <div className="border border-black/40 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <span className="font-semibold">{t("section4.subsection1.email")}</span>{" "}
                      <a href="mailto:refunds@smartsrt.com" className="text-black/80 hover:text-black underline">
                        refunds@smartsrt.com
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">{t("section4.subsection1.subject")}</span> {t("section4.subsection1.subjectText")}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">{t("section4.subsection1.requiredInfo")}</p>
                      <ul className="space-y-1 text-sm text-gray-600 ml-6">
                        {(t.raw("section4.subsection1.requiredItems") as string[]).map((item: string, index: number) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section4.subsection2.title")}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">{t("section4.subsection2.initialResponse")}</span>
                      <span className="text-gray-600">{t("section4.subsection2.initialResponseTime")}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">{t("section4.subsection2.reviewDecision")}</span>
                      <span className="text-gray-600">{t("section4.subsection2.reviewDecisionTime")}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">{t("section4.subsection2.refundProcessing")}</span>
                      <span className="text-gray-600">{t("section4.subsection2.refundProcessingTime")}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="font-medium text-gray-800">{t("section4.subsection2.emailUpdates")}</span>
                      <span className="text-gray-600">{t("section4.subsection2.emailUpdatesTime")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section5.title")}
              </h2>
              <p className="text-gray-700 mb-4">{t("section5.intro")}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section5.creditCard.title")}</h3>
                  <p className="text-sm text-gray-600 mb-1">{t("section5.creditCard.description")}</p>
                  <p className="text-xs text-gray-500">{t("section5.creditCard.processingTime")}</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section5.paypal.title")}</h3>
                  <p className="text-sm text-gray-600 mb-1">{t("section5.paypal.description")}</p>
                  <p className="text-xs text-gray-500">{t("section5.paypal.processingTime")}</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section5.bankTransfer.title")}</h3>
                  <p className="text-sm text-gray-600 mb-1">{t("section5.bankTransfer.description")}</p>
                  <p className="text-xs text-gray-500">{t("section5.bankTransfer.processingTime")}</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section6.title")}
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section6.subsection1.title")}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {t("section6.subsection1.intro")}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    {(t.raw("section6.subsection1.items") as string[]).map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section6.subsection2.title")}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {t("section6.subsection2.intro")}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    {(t.raw("section6.subsection2.items") as string[]).map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section6.subsection3.title")}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {t("section6.subsection3.intro")}
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    {(t.raw("section6.subsection3.items") as string[]).map((item: string, index: number) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section7.title")}
              </h2>
              <p className="text-gray-700 mb-4">{t("section7.intro")}</p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  {(t.raw("section7.items") as string[]).map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section8.title")}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("section8.intro")}
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                {(t.raw("section8.items") as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section9.title")}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("section9.intro")}
              </p>
              <div className=" p-6 rounded-lg space-y-3">
                <div className="flex items-start">
                  <span className="font-bold mr-3">1.</span>
                  <div>
                    <p className="font-semibold text-gray-800">{t("section9.step1.title")}</p>
                    <p className="text-sm text-gray-600">{t("section9.step1.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3">2.</span>
                  <div>
                    <p className="font-semibold text-gray-800">{t("section9.step2.title")}</p>
                    <p className="text-sm text-gray-600">{t("section9.step2.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3">3.</span>
                  <div>
                    <p className="font-semibold text-gray-800">{t("section9.step3.title")}</p>
                    <p className="text-sm text-gray-600">{t("section9.step3.description")}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3">4.</span>
                  <div>
                    <p className="font-semibold text-gray-800">{t("section9.step4.title")}</p>
                    <p className="text-sm text-gray-600">{t("section9.step4.description")}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section10.title")}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("section10.intro")}
              </p>
              <div className="border border-black/40 rounded-lg p-6">
                <p className="font-mono text-sm text-gray-800 mb-3">
                  {t("section10.formula")}
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  {(t.raw("section10.notes") as string[]).map((note: string, index: number) => (
                    <p key={index}>• {note}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section11.title")}
              </h2>
              <p className="text-gray-700 mb-3">
                {t("section11.intro")}
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                {(t.raw("section11.items") as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section12.title")}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("section12.intro")}
              </p>
              <div className="border border-black/40 p-6 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section12.email")}</span>{" "}
                  <a href="mailto:refunds@smartsrt.com" className="text-black/80 hover:text-black underline">
                    refunds@smartsrt.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section12.supportEmail")}</span>{" "}
                  <a href="mailto:support@smartsrt.com" className="text-black/80 hover:text-black underline">
                    support@smartsrt.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section12.responseTime")}</span> {t("section12.responseTimeText")}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section12.businessHours")}</span> {t("section12.businessHoursText")}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section12.languages")}</span> {t("section12.languagesText")}
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section13.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("section13.content")}
              </p>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              {t("footerNote")}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
