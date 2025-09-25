import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CancellationRefundPolicy = () => {
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
            Cancellation & Refund Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Fair, Clear & Customer-Friendly
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p>
            At Royal Kuboos, we take pride in delivering fresh, high-quality kuboos to our customers. Because kuboos are perishable food products, cancellations, returns, and refunds are subject to specific conditions designed to ensure both quality and fairness.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Order Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cancellation Window:</strong> Orders can be cancelled within 1 hour of placement, provided they have not been processed, packed, or dispatched.</li>
              <li>Once preparation or dispatch begins, cancellations are not possible due to the perishable nature of kuboos.</li>
              <li>For bulk/wholesale orders, cancellation terms will be outlined in the sales agreement or quotation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Returns & Replacements</h2>
            <p className="mb-2">
              We accept returns or replacements only in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Wrong product delivered</li>
              <li>Damaged or tampered packaging at the time of delivery</li>
              <li>Quality concerns reported immediately upon delivery</li>
            </ul>
            <h3 className="font-semibold text-lg text-deep-brown mt-4 mb-2">Conditions:</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Complaints must be raised within 12 hours of delivery, with photos/videos as proof.</li>
              <li>Products must remain in their original sealed packaging.</li>
              <li>Partially consumed or improperly stored items are not eligible for return.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Non-Returnable Items</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fresh kuboos once accepted and opened by the customer</li>
              <li>Products stored improperly after delivery</li>
              <li>Delays caused by logistics providers or external factors beyond our control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Approved refunds will be initiated within 3–5 business days of confirmation.</li>
              <li>Refunds are processed through the original payment method (UPI, card, net banking, etc.).</li>
              <li>Depending on the bank/payment provider, refunds may take 5–10 business days to reflect.</li>
              <li>Customers may also choose a replacement batch or store credit instead of a refund.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-deep-brown mb-4">Need Help?</h2>
            <p className="mb-4">
              For support with cancellations or refunds, please contact:
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

export default CancellationRefundPolicy;
