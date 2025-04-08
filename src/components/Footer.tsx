import { PiCaretCircleDownThin } from "react-icons/pi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Need Travelsy Help? */}
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Need Travelsy Help?</h4>
            <div className="space-y-2 text-gray-600 text-sm">
              <p>Got Questions? Call us 24/7!</p>
              <p>Call Us: +254 716909 815</p>
              <p>
                Email Us:{" "}
                <a href="mailto:info@travelsy.com" className="text-blue-500">
                  info@travelsy.com
                </a>
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-gray-900 mb-2">Contact Info:</h4>
              <div className="space-y-1 text-gray-600 text-sm">
                <p>2nd Floor, Fedha Plaza,</p>
                <p>Westlands,</p>
                <p>Nairobi, Kenya.</p>
                <p>P.O Box 7231-00300</p>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex gap-4 text-gray-600 pt-2">
              <a
                href="#"
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-900"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-900"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="text-xs" />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-900"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedinIn className="text-xs" />
              </a>
              <a
                href="#"
                className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:text-gray-900"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube className="text-xs" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Give Us Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Other Services & Support */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">
              Other Services & Support
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Rewards Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Customer Service Help
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Camping Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Activities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Hire Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Mailing List */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Mailing List</h4>
            <p className="text-sm text-gray-600 mb-4">
              Sign Up for our mailing lists and get the latest offers and
              promotions straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none"
              />
              <button className="px-6 py-2 bg-orange-500 text-white text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row items-center justify-between border-y border-gray-200 py-6 gap-6">
            <h2 className="text-teal-600 font-medium">Travelsy</h2>

            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-auto">
              {/* Payment Methods */}
              <div className="flex flex-wrap justify-center gap-4 w-full md:w-auto">
                <img src="/mpesa.png" alt="M-Pesa" className="h-5" />
                <img src="/discover.png" alt="Discover" className="h-5" />
                <img src="/visa.png" alt="Visa" className="h-5" />
                <img src="/paypal.png" alt="PayPal" className="h-5" />
                <img src="/mastercard.png" alt="Mastercard" className="h-5" />
              </div>

              {/* Language and Currency */}
              <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 w-full sm:w-auto justify-center">
                  <img src="/us-flag.png" alt="US Flag" className="w-5 h-3" />
                  <span className="text-sm whitespace-nowrap">
                    English (United States)
                  </span>
                  <PiCaretCircleDownThin />
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 w-full sm:w-auto justify-center">
                  <span className="text-sm">KES</span>
                  <PiCaretCircleDownThin />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 text-sm text-gray-600">
            <p className="text-center md:text-left">
              Copyright © 2019 Travelsy Ltd. All rights reserved
            </p>
            <p>Made in Kenya by Ralak</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
