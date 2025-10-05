"use client";

import Layout from "@/components/home/layout";
import Loader from "@/components/loader";
import { useCheckAuth } from "@/hooks/use-check-auth";
import { useTranslations } from "next-intl";

export default function Terms() {
  const { isLoading, isAuthenticated } = useCheckAuth();
  const t = useTranslations("Terms");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout isAuthenticated={isAuthenticated}>
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{t("title")}</h1>
            <p className="text-gray-600">{t("lastUpdated")}</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section1.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section1.content")}</p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section2.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">{t("section2.intro")}</p>
              <ul className="space-y-2 text-gray-700 ml-6">
                {(t.raw("section2.items") as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section3.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section3.content")}</p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section4.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">{t("section4.intro")}</p>
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
              <p className="text-gray-700 leading-relaxed">{t("section5.content")}</p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section6.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section6.content")}</p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section7.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">{t("section7.intro")}</p>
              <ul className="space-y-2 text-gray-700 ml-6">
                {(t.raw("section7.items") as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section8.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section8.content")}</p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section9.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">{t("section9.intro")}</p>
              <ul className="space-y-2 text-gray-700 ml-6">
                {(t.raw("section9.items") as string[]).map((item: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section10.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section10.content")}</p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section11.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section11.content")}</p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section12.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section12.content")}</p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section13.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t("section13.intro")} {" "}
                <a href="mailto:support@smartsrt.com" className="text-black/80 hover:text-black underline">
                  {t("section13.email")}
                </a>
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                {t("section14.title")}
              </h2>
              <p className="text-gray-700 leading-relaxed">{t("section14.content")}</p>
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
