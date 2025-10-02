"use client";

import Layout from "@/components/home/layout";
import Loader from "@/components/loader";
import { useCheckAuth } from "@/hooks/use-check-auth";

export default function Privacy() {
  const { isLoading, isAuthenticated } = useCheckAuth();

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
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: January 1, 2025
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At SmartSRT, your privacy is our top priority. This Privacy Policy outlines how we collect,
                use, process, and protect your personal information when you use our AI-powered subtitle
                generation platform. We are committed to transparency and ensuring your data rights are respected.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                2. Data Controller Information
              </h2>
              <div className="space-y-2 text-gray-700">
                <p className="leading-relaxed">
                  <span className="font-semibold">Service Provider:</span> SmartSRT
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">Contact Email:</span>{" "}
                  <a href="mailto:support@smartsrt.com" className="text-black/80 hover:text-black underline">
                    support@smartsrt.com
                  </a>
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">Website:</span>{" "}
                  <a href="https://smartsrt.com" className="text-black/80 hover:text-black underline">
                    https://smartsrt.com
                  </a>
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                3. Personal Data We Collect
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Account Information</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Full name and email address</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Encrypted password</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Profile picture (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Third-party authentication data (Google, if applicable)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Content and Media Files</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Uploaded video files and audio content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Generated subtitles and transcriptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>File metadata (size, format, upload date)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Translation settings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3.3 Subscription and Payment Data</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Subscription plan and status</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Usage history</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Payment processor customer ID (Paddle)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Billing dates and transaction history</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3.4 Usage and Technical Data</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Platform interaction logs and feature usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Login timestamps and session information</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Device information and browser type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>IP address and approximate location</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                4. How We Collect Data
              </h2>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Information you provide directly during registration and platform use</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automated collection during video uploads and subtitle processing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Third-party authentication providers (Google OAuth, with your consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Payment processor integration (Paddle)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cookies and similar tracking technologies</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                5. Purpose and Legal Basis for Processing
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    5.1 Service Delivery <span className="text-sm font-normal text-gray-600">(Contractual Obligation)</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Account creation and authentication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>AI-powered subtitle generation and translation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Video processing and transcription services</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    5.2 Billing and Payments <span className="text-sm font-normal text-gray-600">(Contractual Obligation)</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Processing subscription fees and credit purchases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Invoice generation and payment verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Managing refunds and cancellations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    5.3 Customer Support <span className="text-sm font-normal text-gray-600">(Legitimate Interest)</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Responding to support inquiries and technical issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Improving platform features and user experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Troubleshooting and resolving service problems</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    5.4 Legal Compliance <span className="text-sm font-normal text-gray-600">(Legal Obligation)</span>
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Maintaining tax and accounting records</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Responding to legal requests and court orders</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Fraud prevention and security monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                6. Data Sharing and Third Parties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal data to third parties. We only share data in the following circumstances:
              </p>
              <div className="space-y-4">
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">AI Service Providers</h3>
                  <p className="text-gray-700 text-sm">
                    Video content and audio is processed by AI providers (OpenAI, Anthropic, or similar) for subtitle
                    generation. This data is used only for processing and is not stored permanently by these providers.
                  </p>
                </div>
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Payment Processor</h3>
                  <p className="text-gray-700 text-sm">
                    Billing information is processed through Paddle for subscription management and payment processing.
                  </p>
                </div>
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Authentication Services</h3>
                  <p className="text-gray-700 text-sm">
                    If you use Google sign-in, authentication data is shared with Google (with your explicit consent).
                  </p>
                </div>
                <div className="border-black p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Legal Requirements</h3>
                  <p className="text-gray-700 text-sm">
                    We may disclose data when required by law, court order, or to protect our legal rights.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                7. Data Retention Periods
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Account Information</span>
                  <span className="text-gray-600">Until account deletion</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Video and Subtitle Content</span>
                  <span className="text-gray-600">Until deleted by user</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Payment Records</span>
                  <span className="text-gray-600">10 years (legal requirement)</span>
                </div>
                <div className="flex justify-between items-start py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-800">Usage Logs</span>
                  <span className="text-gray-600">2 years</span>
                </div>
                <div className="flex justify-between items-start py-2">
                  <span className="font-medium text-gray-800">Support Communications</span>
                  <span className="text-gray-600">3 years</span>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                8. Data Security Measures
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal data:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Encryption</h3>
                    <p className="text-sm text-gray-600">SSL/TLS encryption for all data transmission</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔑</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Password Protection</h3>
                    <p className="text-sm text-gray-600">Hashed and salted password storage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Access Control</h3>
                    <p className="text-sm text-gray-600">Strict authorization and authentication protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💾</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Data Backup</h3>
                    <p className="text-sm text-gray-600">Regular backups and disaster recovery systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Security Updates</h3>
                    <p className="text-sm text-gray-600">Continuous monitoring and patching</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">☁️</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Secure Infrastructure</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade cloud hosting</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                9. Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under applicable data protection laws (including GDPR), you have the following rights:
              </p>
              <div className="space-y-3">
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">Right to Access</h3>
                  <p className="text-sm text-gray-600">Request a copy of all personal data we hold about you</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">Right to Rectification</h3>
                  <p className="text-sm text-gray-600">Request correction of inaccurate or incomplete data</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">Right to Erasure</h3>
                  <p className="text-sm text-gray-600">Request deletion of your personal data (right to be forgotten)</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">Right to Object</h3>
                  <p className="text-sm text-gray-600">Object to processing of your data for specific purposes</p>
                </div>
                <div className="border border-black/40  p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">Right to Data Portability</h3>
                  <p className="text-sm text-gray-600">Receive your data in a structured, machine-readable format</p>
                </div>
                <div className="border border-black/40  p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-1">Right to Restrict Processing</h3>
                  <p className="text-sm text-gray-600">Request limitation of how we process your data</p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                10. Cookies and Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to improve your experience:
              </p>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Essential Cookies</h3>
                  <p className="text-sm text-gray-600 ml-4">Required for core functionality like authentication and security</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Functional Cookies</h3>
                  <p className="text-sm text-gray-600 ml-4">Remember your preferences such as language and theme settings</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Analytics Cookies</h3>
                  <p className="text-sm text-gray-600 ml-4">Help us understand usage patterns to improve our service (anonymized)</p>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                11. International Data Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Your data may be transferred and processed outside your country of residence for the following purposes:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Payment processing through Paddle (EU-compliant)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI processing services (with appropriate safeguards)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Cloud infrastructure services (GDPR-compliant providers)</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">
                All international transfers are conducted in accordance with applicable data protection laws.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                12. Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                SmartSRT is not intended for users under 18 years of age. We do not knowingly collect personal
                information from children. If we discover that we have inadvertently collected data from a minor,
                we will promptly delete it from our systems.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                13. Data Breach Notification
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In the event of a data security breach that may affect your rights, we will notify relevant
                supervisory authorities and affected users within the legally required timeframe (typically 72 hours).
                You will receive clear information about the nature of the breach and recommended protective measures.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                14. Contact and Data Requests
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                To exercise your privacy rights or submit data-related inquiries:
              </p>
              <div className="border border-black/40 p-6 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:privacy@smartsrt.com" className="text-black/80 hover:text-black underline">
                    privacy@smartsrt.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Subject Line:</span> "Privacy Request - [Your Request Type]"
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Response Time:</span> Within 30 days of receipt
                </p>
              </div>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                15. Policy Updates
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.
                Material changes will be communicated via email or prominent platform notification. The "Last updated"
                date at the top of this policy indicates when changes were last made. Continued use of SmartSRT after
                updates constitutes acceptance of the revised policy.
              </p>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By using SmartSRT, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
