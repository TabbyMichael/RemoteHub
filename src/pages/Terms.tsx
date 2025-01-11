import React from 'react';
import { FileText, Shield, AlertCircle, HelpCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-cyan-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using our platform.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using RemoteHub, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, 
              you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">2. Use License</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Permission is granted to temporarily download one copy of the materials on RemoteHub 
                for personal, non-commercial transitory viewing only.
              </p>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by RemoteHub at any time.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">3. User Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Not misuse or abuse the platform</li>
              <li>Respect other users' rights and privacy</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">4. Job Listings and Applications</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                RemoteHub does not guarantee the accuracy of job listings or the legitimacy of 
                employers. Users are responsible for verifying information and conducting due diligence.
              </p>
              <p>
                We reserve the right to remove any job listings that violate our policies or 
                terms of service.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">5. Limitation of Liability</h2>
            <p className="text-gray-600">
              RemoteHub shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use or inability to use the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">6. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes via email or through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">7. Contact Information</h2>
            <p className="text-gray-600">
              Questions about the Terms of Service should be sent to us at:
              <br />
              <a href="mailto:legal@remotehub.com" className="text-cyan-600 hover:text-cyan-700">
                legal@remotehub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}