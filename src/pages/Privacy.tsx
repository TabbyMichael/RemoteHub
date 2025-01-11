import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-cyan-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            We take your privacy seriously. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Create an account</li>
              <li>Apply for jobs</li>
              <li>Post job listings</li>
              <li>Contact our support team</li>
              <li>Subscribe to our newsletter</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process job applications</li>
              <li>Send you updates about relevant opportunities</li>
              <li>Improve our platform</li>
              <li>Respond to your requests and questions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@remotehub.com" className="text-cyan-600 hover:text-cyan-700">
                privacy@remotehub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}