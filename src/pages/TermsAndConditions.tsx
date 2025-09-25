import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
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
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-deep-brown mb-2">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">
            Last Updated: August 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p>
            Welcome to Royal Kuboos. By purchasing our products, using our website, or placing wholesale inquiries, you agree to comply with the following Terms & Conditions. These terms govern all orders, deliveries, and business transactions with us.
            If you do not agree with these terms, please discontinue using our services.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">1. General Use of the Website & Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You confirm that you are at least 18 years old or accessing the site under parental/guardian supervision.</li>
              <li>You agree to use our website and services only for lawful purposes, and in a manner that does not disrupt or infringe on the rights of others.</li>
              <li>We reserve the right to restrict or refuse service if fraudulent, unlawful, or abusive activity is detected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">2. Products & Quality</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Royal Kuboos specializes in the manufacture and supply of freshly baked kuboos.</li>
              <li>Product descriptions and images are for representation only; slight variations in size, texture, or color may occur as part of the natural baking process.</li>
              <li>All products are subject to availability and may be modified, discontinued, or substituted at our discretion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">3. Pricing & Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prices are displayed in Indian Rupees (INR ₹) unless otherwise specified.</li>
              <li>Prices may change due to raw material costs, market fluctuations, or company policies.</li>
              <li>Payments must be made in full at the time of purchase, unless alternate arrangements (for wholesale orders) are agreed upon.</li>
              <li>We accept UPI, credit/debit cards, net banking, and other secure third-party payment methods.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">4. Shipping & Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery timelines depend on location, order size, and logistics availability.</li>
              <li>Customers must provide accurate delivery details; we are not liable for delays caused by incorrect addresses or recipient unavailability.</li>
              <li>For wholesale orders, shipping timelines and conditions will be confirmed directly with the buyer.</li>
              <li>Please refer to our Shipping & Delivery Policy for detailed terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">5. Returns & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Due to the perishable nature of kuboos, returns are not accepted once products are delivered.</li>
              <li>Refunds or replacements are available only for:
                <ul className="list-[circle] pl-6 mt-2 space-y-1">
                  <li>Wrong products delivered</li>
                  <li>Verified quality issues</li>
                  <li>Transit damage reported immediately upon delivery</li>
                </ul>
              </li>
              <li>Please see our Cancellation & Refund Policy for more details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">6. Wholesale & B2B Orders</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wholesale/B2B clients must meet minimum order requirements.</li>
              <li>Custom packaging, branding, or export orders may be subject to separate agreements.</li>
              <li>Cancellation and refund terms may vary depending on the sales contract.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All logos, branding, product packaging, designs, and website content belong to Royal Kuboos.</li>
              <li>Reproduction, reuse, or distribution without prior written consent is prohibited.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">8. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are not responsible for product spoilage caused by improper storage after delivery.</li>
              <li>We are not liable for indirect, incidental, or consequential damages arising from use of our products.</li>
              <li>Our liability, if any, is limited to the invoice value of the product supplied.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">9. Governing Law & Jurisdiction</h2>
            <p>
              These Terms & Conditions are governed by the laws of India, and any disputes shall fall under the jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">10. Contact Us</h2>
            <p className="mb-4">
              For any questions regarding these Terms & Conditions, please contact:
            </p>
            <div className="space-y-2">
              <p className="font-semibold">Royal Kuboos</p>
              <p className="flex items-start gap-2">
                <span>📍</span>
                <span>No.19, MGR Street, Periyar Nagar, Madampakkam, Chennai – 600126</span>
              </p>
              <p className="flex items-center gap-2">
                <span>📧</span>
                <span>Email: <a href="mailto:contact@royalkuboos.shop" className="text-blue-600 hover:underline">contact@royalkuboos.shop</a> | <a href="mailto:pramamoorthy82@gmail.com" className="text-blue-600 hover:underline">pramamoorthy82@gmail.com</a></span>
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                <span>Phone: <a href="tel:+919884806610" className="text-blue-600 hover:underline">+91 98848 06610</a></span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
