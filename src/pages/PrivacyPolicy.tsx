import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={20} />
            Back
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-deep-brown mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Your Privacy is Our Priority
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-6">
            At Royal Kuboos, your privacy is our top priority. We are committed to safeguarding the personal information you share with us and ensuring it is handled responsibly, securely, and in compliance with the Indian IT Act and internationally recognized data protection standards (such as GDPR).
          </p>
          <p className="mb-8">
            This Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights as our valued customer.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you shop with us, place wholesale/bulk orders, or contact us for inquiries, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Full Name / Business Name</li>
              <li>Email Address & Phone Number</li>
              <li>Shipping & Billing Address</li>
              <li>Order & Transaction Details</li>
              <li>Payment Information (via secure third-party gateways)</li>
              <li>Business Information (for wholesale/B2B clients)</li>
              <li>Device & Browser Information (for website visitors)</li>
              <li>Cookies & Analytics Data (to improve site performance and user experience)</li>
            </ul>
            <p>
              We only collect information that is necessary to provide a smooth customer experience and fulfill your orders.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Why We Collect Your Information</h2>
            <p className="mb-4">
              Your information is collected and used for legitimate purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processing and fulfilling orders</li>
              <li>Coordinating delivery and logistics</li>
              <li>Providing customer and wholesale support</li>
              <li>Sending order confirmations and updates</li>
              <li>Offering promotional content (only if you opt in)</li>
              <li>Analyzing website usage to improve our products and services</li>
              <li>Meeting regulatory and tax requirements</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">How We Protect Your Information</h2>
            <p className="mb-4">
              We implement strong safeguards to ensure your data remains safe:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>SSL Encryption:</strong> All online communication and transactions are encrypted.</li>
              <li><strong>Secure Payments:</strong> Transactions are processed via PCI-compliant gateways; we do not store payment details.</li>
              <li><strong>Server Security:</strong> Firewalls and monitoring protect our systems.</li>
              <li><strong>Limited Access:</strong> Only authorized staff have access to sensitive information.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Your Rights & Choices</h2>
            <p className="mb-4">
              You are in full control of your data. You may:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Request access to the personal information we hold about you</li>
              <li>Ask for updates or corrections to your data</li>
              <li>Request deletion of your personal information (subject to legal obligations)</li>
              <li>Opt out of promotional communications at any time</li>
              <li>Raise concerns about data misuse or privacy practices</li>
            </ul>
            <p>
              We respond to all valid requests within 30 business days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Third-Party Sharing</h2>
            <p className="mb-4">
              We never sell your personal information. Data is shared only with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Logistics providers (to deliver your orders)</li>
              <li>Payment processors (to handle secure transactions)</li>
              <li>Regulatory/government authorities (when legally required)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or privacy-related requests, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold">Royal Kuboos</p>
              <p className="flex items-start gap-2 mt-2">
                <span>📍</span>
                <span>No.19, MGR Street, Periyar Nagar, Madampakkam, Chennai – 600126</span>
              </p>
              <p className="flex items-center gap-2 mt-2">
                <span>📧</span>
                <span>Email: <a href="mailto:contact@royalkuboos.shop" className="text-blue-600 hover:underline">contact@royalkuboos.shop</a> | <a href="mailto:pramamoorthy82@gmail.com" className="text-blue-600 hover:underline">pramamoorthy82@gmail.com</a></span>
              </p>
              <p className="flex items-center gap-2 mt-2">
                <span>📞</span>
                <span>Phone: <a href="tel:+919884806610" className="text-blue-600 hover:underline">+91 98848 06610</a></span>
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated version will always be available on this page with the "Last Updated" date.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-6 mt-12">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> August 2025
            </p>
            <p className="text-sm text-gray-500 mt-2">
              © 2025 Royal Kuboos. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
