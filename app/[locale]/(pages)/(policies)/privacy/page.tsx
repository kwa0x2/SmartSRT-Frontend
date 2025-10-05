"use client";

import Layout from "@/components/home/layout";
import Loader from "@/components/loader";
import { useCheckAuth } from "@/hooks/use-check-auth";
import { useTranslations } from "next-intl";

export default function Privacy() {
  const { isLoading, isAuthenticated } = useCheckAuth();
  const t = useTranslations("Privacy");

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
              <div className="space-y-2 text-gray-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">{t("section2.provider")}</span> {t("section2.providerName")}
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">{t("section2.contactEmail")}</span>{" "}
                  <a href="mailto:support@smartsrt.com" className="text-black/80 hover:text-black underline">
                    support@smartsrt.com
                  </a>
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">{t("section2.website")}</span>{" "}
                  <a href="https://smartsrt.com" className="text-black/80 hover:text-black underline">
                    https://smartsrt.com
                  </a>
                </p>
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
                        <span className="mr-2">•</span>
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
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section3.subsection3.title")}</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section3.subsection3.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("section3.subsection4.title")}</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section3.subsection4.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
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
              <ul className="space-y-2 text-gray-700 ml-6">
                {(t.raw("section4.items") as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section5.title")}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {t("section5.subsection1.title")} <span className="text-sm font-normal text-gray-600">{t("section5.subsection1.legalBasis")}</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section5.subsection1.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {t("section5.subsection2.title")} <span className="text-sm font-normal text-gray-600">{t("section5.subsection2.legalBasis")}</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section5.subsection2.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {t("section5.subsection3.title")} <span className="text-sm font-normal text-gray-600">{t("section5.subsection3.legalBasis")}</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section5.subsection3.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {t("section5.subsection4.title")} <span className="text-sm font-normal text-gray-600">{t("section5.subsection4.legalBasis")}</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    {(t.raw("section5.subsection4.items") as string[]).map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section6.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section6.intro")}
              </p>
              <div className="space-y-4">
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section6.aiProviders.title")}</h3>
                  <p className="text-gray-700 text-sm">
                    {t("section6.aiProviders.description")}
                  </p>
                </div>
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section6.paymentProcessor.title")}</h3>
                  <p className="text-gray-700 text-sm">
                    {t("section6.paymentProcessor.description")}
                  </p>
                </div>
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section6.authServices.title")}</h3>
                  <p className="text-gray-700 text-sm">
                    {t("section6.authServices.description")}
                  </p>
                </div>
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section6.legalRequirements.title")}</h3>
                  <p className="text-gray-700 text-sm">
                    {t("section6.legalRequirements.description")}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section7.title")}
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">{t("section7.accountInfo")}</span>
                  <span className="text-gray-600">{t("section7.accountInfoPeriod")}</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">{t("section7.videoContent")}</span>
                  <span className="text-gray-600">{t("section7.videoContentPeriod")}</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">{t("section7.paymentRecords")}</span>
                  <span className="text-gray-600">{t("section7.paymentRecordsPeriod")}</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">{t("section7.usageLogs")}</span>
                  <span className="text-gray-600">{t("section7.usageLogsPeriod")}</span>
                </div>
                <div className="flex justify-between items-start py-2">
                  <span className="font-medium text-gray-800">{t("section7.supportComms")}</span>
                  <span className="text-gray-600">{t("section7.supportCommsPeriod")}</span>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section8.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section8.intro")}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("section8.encryption.title")}</h3>
                    <p className="text-sm text-gray-600">{t("section8.encryption.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔑</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("section8.passwordProtection.title")}</h3>
                    <p className="text-sm text-gray-600">{t("section8.passwordProtection.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("section8.accessControl.title")}</h3>
                    <p className="text-sm text-gray-600">{t("section8.accessControl.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💾</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("section8.dataBackup.title")}</h3>
                    <p className="text-sm text-gray-600">{t("section8.dataBackup.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("section8.securityUpdates.title")}</h3>
                    <p className="text-sm text-gray-600">{t("section8.securityUpdates.description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">☁️</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">{t("section8.secureInfrastructure.title")}</h3>
                    <p className="text-sm text-gray-600">{t("section8.secureInfrastructure.description")}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section9.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section9.intro")}
              </p>
              <div className="space-y-3">
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">{t("section9.rightToAccess.title")}</h3>
                  <p className="text-sm text-gray-600">{t("section9.rightToAccess.description")}</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">{t("section9.rightToRectification.title")}</h3>
                  <p className="text-sm text-gray-600">{t("section9.rightToRectification.description")}</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">{t("section9.rightToErasure.title")}</h3>
                  <p className="text-sm text-gray-600">{t("section9.rightToErasure.description")}</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">{t("section9.rightToObject.title")}</h3>
                  <p className="text-sm text-gray-600">{t("section9.rightToObject.description")}</p>
                </div>
                <div className="border border-black/40  p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">{t("section9.rightToDataPortability.title")}</h3>
                  <p className="text-sm text-gray-600">{t("section9.rightToDataPortability.description")}</p>
                </div>
                <div className="border border-black/40  p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">{t("section9.rightToRestrictProcessing.title")}</h3>
                  <p className="text-sm text-gray-600">{t("section9.rightToRestrictProcessing.description")}</p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section10.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t("section10.intro")}
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section10.essentialCookies.title")}</h3>
                  <p className="text-sm text-gray-600 ml-4">{t("section10.essentialCookies.description")}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section10.functionalCookies.title")}</h3>
                  <p className="text-sm text-gray-600 ml-4">{t("section10.functionalCookies.description")}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">{t("section10.analyticsCookies.title")}</h3>
                  <p className="text-sm text-gray-600 ml-4">{t("section10.analyticsCookies.description")}</p>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section11.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
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
              <p className="text-gray-700 leading-relaxed mt-3">
                {t("section11.outro")}
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section12.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("section12.content")}
              </p>
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

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section14.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                {t("section14.intro")}
              </p>
              <div className="border border-black/40 p-6 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section14.email")}</span>{" "}
                  <a href="mailto:privacy@smartsrt.com" className="text-black/80 hover:text-black underline">
                    privacy@smartsrt.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section14.subjectLine")}</span> {t("section14.subjectLineText")}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">{t("section14.responseTime")}</span> {t("section14.responseTimeText")}
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section15.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("section15.content")}
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
