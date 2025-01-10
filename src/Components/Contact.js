import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div id='contact' className="bg-gray-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
         {/* Know Me More Section */}
         <div className="relative flex justify-center">
          <h2 className="text-gray-500 text-[150px] font-bold absolute -top-20 opacity-20">
            SUMMARY
          </h2>
            <h3 className="text-3xl font-bold mb-12 pt-8">
              Resume
              <div className="w-12 h-0.5 bg-red-500 mt-2"></div>
            </h3>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ADDRESS</h3>
            <p className="text-gray-400 mb-4">
              4th Floor, Plot No.22,
              <br />
              145 Murphy Canyon Rd.
              <br />
              San Diego CA 2028
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Phone:</strong> (060) 444 434 444
            </p>
            <p className="text-gray-400 mb-4">
              <strong>Fax:</strong> (060) 555 545 555
            </p>
            <p className="text-gray-400">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:chat@simone.com"
                className="text-red-500 hover:underline"
              >
                chat@simone.com
              </a>
            </p>
            <h3 className="text-xl font-semibold mt-8 mb-4">FOLLOW ME</h3>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-red-500 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-4">SEND US A NOTE</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-800 text-gray-400 p-3 rounded-lg mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 text-gray-400 p-3 rounded-lg mb-4"
                />
              </div>
              <textarea
                placeholder="Tell us more about your needs..."
                className="bg-gray-800 text-gray-400 p-3 rounded-lg w-full mb-4 h-32"
              ></textarea>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

