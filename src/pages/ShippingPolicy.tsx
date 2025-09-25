import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShippingPolicy = () => {
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
            Shipping & Delivery Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Freshly Baked. Safely Delivered.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p>
            At Royal Kuboos, we take great care to ensure that every order of kuboos reaches our customers fresh, safe, and on time. This Shipping & Delivery Policy explains how we handle order processing, delivery timelines, and packaging for both retail and wholesale orders.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Order Processing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are processed once payment confirmation is received or as per agreed wholesale arrangements.</li>
              <li>Retail orders are typically processed within 1–2 business days.</li>
              <li>Bulk/wholesale orders may require additional lead time for production and packaging; timelines will be communicated directly to the buyer.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Delivery Coverage</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Local Deliveries (Chennai & nearby areas):</strong> Same-day or next-day delivery options may be available depending on order size and timing.
              </li>
              <li>
                <strong>Pan-India Shipping:</strong> Available for bulk or wholesale orders via refrigerated transport/logistics partners.
              </li>
              <li>
                <strong>Export Orders:</strong> Can be arranged for verified wholesale clients with advance coordination for cold-chain logistics and documentation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Estimated Delivery Timelines</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Local (Chennai):</strong> Same-day or next-day delivery after dispatch</li>
              <li><strong>Tamil Nadu (outside Chennai):</strong> 2–3 business days after dispatch</li>
              <li><strong>Rest of India (bulk orders only):</strong> 3–7 business days after dispatch</li>
            </ul>
            <p className="mt-4 italic text-gray-600">
              Note: Timelines may vary due to transport availability, road conditions, weather, or external delays.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Shipping Charges</h2>
            <p className="mb-2">
              Charges depend on:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Location of delivery</li>
              <li>Order size and packaging requirements</li>
              <li>Type of shipment (standard/local delivery vs. refrigerated transport for bulk)</li>
            </ul>
            <p>
              Any applicable shipping charges will be displayed at checkout or mentioned in the wholesale invoice.<br />
              Free/Discounted Delivery offers may be announced during promotions for retail customers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Packaging & Handling</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kuboos are packed in food-grade, tamper-proof, and hygienic packaging to maintain freshness.</li>
              <li>For wholesale/export orders, products are sealed and packed in bulk cartons or cold-chain containers.</li>
              <li>Extra care is taken during transit to avoid contamination, spillage, or spoilage.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Tracking & Notifications</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Once dispatched, customers receive a delivery confirmation SMS/email.</li>
              <li>For wholesale shipments, logistics/tracking details will be shared directly with the buyer.</li>
              <li>Customers are encouraged to check their orders upon delivery and report issues immediately.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Delays & Exceptions</h2>
            <p className="mb-2">
              Deliveries may be delayed due to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Road closures, weather conditions, or transport strikes</li>
              <li>Courier/logistics backlogs during festive or peak seasons</li>
              <li>Incorrect/incomplete delivery addresses provided by the customer</li>
            </ul>
            <p className="mt-4">
              We will notify customers of delays and provide revised delivery schedules where possible.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Need Help With Your Delivery?</h2>
            <p className="mb-4">
              For support related to delivery or logistics, contact us:
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

export default ShippingPolicy;
