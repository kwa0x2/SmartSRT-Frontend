"use client";

import Layout from "@/components/home/layout";
import Loader from "@/components/loader";
import { useCheckAuth } from "@/hooks/use-check-auth";

export default function Refund() {
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
              Refund Policy
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
                1. Our Commitment to Satisfaction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At SmartSRT, we strive to deliver exceptional subtitle generation services. This Refund Policy
                outlines the circumstances under which refunds are available and explains the process for
                requesting them. We aim to be fair, transparent, and responsive to our users' concerns.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                2. Subscription Cancellation & Refunds
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Subscription Cancellation</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You may cancel your subscription at any time through account settings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Cancellation is effective immediately, but access continues until the end of your current billing period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Auto-renewal is automatically disabled upon cancellation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>No refunds are provided for unused time within the current billing period</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Subscription Refund Eligibility</h3>
                  <p className="text-gray-700 mb-3">Subscription refunds may be granted in the following cases:</p>

                  <div className="space-y-3">
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">14-Day Money-Back Guarantee</h4>
                      <p className="text-sm text-gray-600">
                        Full refund available within 14 days of initial subscription purchase (new subscribers only)
                      </p>
                    </div>
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Platform Technical Issues</h4>
                      <p className="text-sm text-gray-600">
                        Serious technical problems preventing normal service usage that cannot be resolved by our support team
                      </p>
                    </div>
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Extended Service Outage</h4>
                      <p className="text-sm text-gray-600">
                        When cumulative service downtime exceeds 20% of your billing period
                      </p>
                    </div>
                    <div className="border border-black/40 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-1">Unauthorized Payment</h4>
                      <p className="text-sm text-gray-600">
                        Charges made without your authorization or duplicate billing errors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                3. Credit Purchase Refunds
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Eligible for Refund</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Request submitted within 14 days of credit purchase</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>More than 50% of purchased credits remain unused</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Technical errors preventing credit usage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Double charges or payment processing errors</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Not Eligible for Refund</h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>More than 50% of credits have been consumed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Request made after the 14-day window</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>User error or dissatisfaction with subtitle quality (quality issues should be reported for improvement)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✕</span>
                      <span>Promotional or bonus credits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                4. How to Request a Refund
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1 Submitting Your Request</h3>
                  <p className="text-gray-700 mb-3">To request a refund, contact us with the following information:</p>

                  <div className="border border-black/40 p-6 rounded-lg space-y-3">
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span>{" "}
                      <a href="mailto:refunds@smartsrt.com" className="text-black/80 hover:text-black underline">
                        refunds@smartsrt.com
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Subject Line:</span> "Refund Request - [Your Username]"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-700 mb-2">Required Information:</p>
                      <ul className="space-y-1 text-sm text-gray-600 ml-6">
                        <li>• Account email address</li>
                        <li>• Detailed reason for refund request</li>
                        <li>• Payment reference number (from Paddle)</li>
                        <li>• Transaction date and amount</li>
                        <li>• Any supporting documentation (for technical issues)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2 Refund Review Timeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">Initial Response</span>
                      <span className="text-gray-600">24-48 hours</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">Review & Decision</span>
                      <span className="text-gray-600">3-5 business days</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-800">Refund Processing (if approved)</span>
                      <span className="text-gray-600">5-10 business days</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="font-medium text-gray-800">Email Updates</span>
                      <span className="text-gray-600">At every stage</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                5. Refund Processing Methods
              </h2>
              <p className="text-gray-700 mb-4">Approved refunds are processed through the following methods:</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Credit/Debit Card</h3>
                  <p className="text-sm text-gray-600 mb-1">Refund to original payment card</p>
                  <p className="text-xs text-gray-500">Processing time: 5-10 business days</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">PayPal</h3>
                  <p className="text-sm text-gray-600 mb-1">Direct refund to PayPal account</p>
                  <p className="text-xs text-gray-500">Processing time: 3-5 business days</p>
                </div>
                <div className="border border-black/40 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Bank Transfer</h3>
                  <p className="text-sm text-gray-600 mb-1">Direct bank transfer (special cases)</p>
                  <p className="text-xs text-gray-500">Processing time: 7-14 business days</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                6. Special Circumstances
              </h2>

              <div className="space-y-4">
                <div className="border-l-4 border-black pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">6.1 Technical Service Issues</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    When platform-related technical problems prevent you from using our service:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• Full refund for persistent, unresolvable issues</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">6.2 Subtitle Quality Concerns</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    If you experience consistent subtitle quality issues:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• Feedback and support for first 3 subtitle generations</li>
                    <li>• Credit refund for recurring AI accuracy problems</li>
                    <li>• Free regeneration after system improvements</li>
                  </ul>
                </div>

                <div className="border-l-4 border-black pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 mb-2">6.3 Security Breaches</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    In the event of account security compromise:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-600 ml-4">
                    <li>• Full refund for unauthorized charges</li>
                    <li>• Enhanced account security measures</li>
                    <li>• Investigation and preventive action</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                7. Non-Refundable Situations
              </h2>
              <p className="text-gray-700 mb-4">Refunds are not available in the following cases:</p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    <span>Violations of our Terms of Service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    <span>Providing false or misleading information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    <span>Abuse or misuse of the service</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    <span>Requests outside the applicable refund timeframe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    <span>User error or lack of technical knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 font-bold">✕</span>
                    <span>Third-party factors or market conditions beyond our control</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                8. Partial Refunds
              </h2>
              <p className="text-gray-700 mb-4">
                In certain situations, partial refunds may be offered at our discretion:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>When a portion of the service has been successfully utilized</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>For technical issues affecting specific timeframes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>In cases of partial service dissatisfaction</span>
                </li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                9. Appeals Process
              </h2>
              <p className="text-gray-700 mb-4">
                If your refund request is denied, you have the right to appeal:
              </p>
              <div className=" p-6 rounded-lg space-y-3">
                <div className="flex items-start">
                  <span className="font-bold mr-3">1.</span>
                  <div>
                    <p className="font-semibold text-gray-800">Submit an Appeal</p>
                    <p className="text-sm text-gray-600">Within 14 days of the initial decision</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3">2.</span>
                  <div>
                    <p className="font-semibold text-gray-800">Provide Additional Evidence</p>
                    <p className="text-sm text-gray-600">Include any new documentation or clarifications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3">3.</span>
                  <div>
                    <p className="font-semibold text-gray-800">Escalation</p>
                    <p className="text-sm text-gray-600">Request review by senior management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3">4.</span>
                  <div>
                    <p className="font-semibold text-gray-800">Consumer Protection</p>
                    <p className="text-sm text-gray-600">Contact consumer arbitration services if unresolved</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                10. Pro-Rata Refund Calculation
              </h2>
              <p className="text-gray-700 mb-4">
                For subscription refunds, we calculate pro-rata refunds as follows:
              </p>
              <div className="border border-black/40 rounded-lg p-6">
                <p className="font-mono text-sm text-gray-800 mb-3">
                  Refund Amount = (Remaining Days ÷ Billing Period Days) × Subscription Fee
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>• Minimum 1-day fee will be deducted</p>
                  <p>• Payment processing fees are non-refundable</p>
                  <p>• Calculations are based on calendar days</p>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                11. Payment Processor Policies
              </h2>
              <p className="text-gray-700 mb-3">
                Since payments are processed through Paddle:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Refunds are also subject to Paddle's policies and terms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Transaction fees are determined by Paddle and may not be refundable</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>International payment refunds may require additional processing time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Currency exchange rate fluctuations may affect refund amounts</span>
                </li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                12. Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                For refund inquiries and cancellation support:
              </p>
              <div className="border border-black/40 p-6 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:refunds@smartsrt.com" className="text-black/80 hover:text-black underline">
                    refunds@smartsrt.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Support Email:</span>{" "}
                  <a href="mailto:support@smartsrt.com" className="text-black/80 hover:text-black underline">
                    support@smartsrt.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Response Time:</span> 24-48 hours
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Business Hours:</span> Monday-Friday, 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Languages:</span> English support available
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-black">
                13. Effective Date
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Refund Policy becomes effective upon your purchase of SmartSRT services. We may update
                this policy periodically, and material changes will be communicated via email or platform
                notification in advance.
              </p>
            </section>
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By purchasing SmartSRT services, you acknowledge that you have read and agree to this Refund Policy.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
