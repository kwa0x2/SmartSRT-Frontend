"use client";

import Layout from "@/components/home/layout";
import Loader from "@/components/loader";
import { useCheckAuth } from "@/hooks/use-check-auth";

export default function Terms() {
  const { isLoading, isAuthenticated } = useCheckAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout isAuthenticated={isAuthenticated}>
      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Terms of Service
            </h1>
            <p className="text-gray-600">Last updated: January 1, 2025</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                1. About Our Service
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SmartSRT is an AI-powered subtitle generation platform that
                automatically creates, translates, and synchronizes subtitles
                for your video content. We operate as a Software as a Service
                (SaaS) platform, providing cloud-based subtitle processing and
                management tools.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                2. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                By accessing or using SmartSRT, you acknowledge and agree to:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Be at least 18 years of age or have consent from a legal
                    guardian
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Provide accurate and up-to-date account information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Maintain the security and confidentiality of your account
                    credentials
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Use the service in compliance with all applicable laws and
                    regulations
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                3. Account Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You are solely responsible for maintaining the confidentiality
                of your account and password. Any activities conducted through
                your account are your responsibility. Please notify us
                immediately if you suspect unauthorized access to your account.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                4. Subscription & Payment
              </h2>
              <div className="space-y-3 text-gray-700">
                <p className="leading-relaxed">
                  SmartSRT offers a single subscription plan. All payments are
                  securely processed through our payment provider (Paddle). Fees
                  are billed in USD on a monthly basis.
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Subscriptions automatically renew unless canceled
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Service access continues until the end of your current
                      billing cycle after cancellation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>
                      Price changes will not affect active subscribers during
                      their current billing period
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                5. Cancellation & Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You may cancel your subscription at any time through your
                account settings. Upon cancellation, you will retain access to
                all features until the end of your current billing period.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                6. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The SmartSRT platform, including all software, designs, logos,
                and content, is protected by intellectual property rights.
                Content you create using SmartSRT (including generated
                subtitles) belongs to you. We process your content solely for
                the purpose of providing our services and do not claim ownership
                of your materials.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                7. Privacy & Data Processing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We collect and process your personal data exclusively to deliver
                our services. Your video content and audio data may be shared
                with AI service providers (such as OpenAI, Anthropic, or
                similar) for subtitle generation and translation purposes.
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Data is processed only for service delivery and is not
                    permanently stored by AI providers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    We do not sell your personal information to third parties
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    For comprehensive details, please review our Privacy Policy
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                8. Service Limitations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SmartSRT is provided on an "as is" basis. While we strive for
                accuracy, AI-generated subtitles may contain errors and should
                be reviewed before publication. We are not liable for damages
                resulting from service interruptions, data loss, inaccurate
                translations, or technical issues beyond our reasonable control.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                9. Prohibited Activities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Users may not:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>
                    Upload content that infringes on intellectual property
                    rights
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>
                    Attempt to bypass usage limits or access restrictions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>
                    Use the service to generate harmful, illegal, or offensive
                    content
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✕</span>
                  <span>
                    Share account credentials or access with unauthorized
                    parties
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                10. Service Modifications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SmartSRT reserves the right to modify service features, pricing
                structures, and terms of service at any time. Material changes
                will be communicated in advance via email or platform
                notification. Continued use of the service after changes take
                effect constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                11. Account Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate accounts that
                violate these terms without prior notice. Users may delete their
                accounts at any time through account settings or by submitting a
                data deletion request to our support team.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                12. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by and construed in accordance with
                applicable laws. Any disputes arising from these terms or use of
                the service shall be resolved through appropriate legal
                channels.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                13. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                For questions, concerns, or support regarding these terms,
                please contact us at:{" "}
                <a
                  href="mailto:support@smartsrt.com"
                  className="text-black/80 hover:text-black underline"
                >
                  support@smartsrt.com
                </a>
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                14. Effective Date
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms become effective upon your first use of SmartSRT and
                remain in effect until your account is deleted or terminated.
              </p>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By using SmartSRT, you acknowledge that you have read, understood,
              and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
