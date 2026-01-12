export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span className="text-2xl font-bold">FloodRescu Relief</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-blue-200 transition">Home</a>
              <a href="#emergency" className="hover:text-blue-200 transition">Emergency</a>
              <a href="#resources" className="hover:text-blue-200 transition">Resources</a>
              <a href="#about" className="hover:text-blue-200 transition">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Emergency Flood Assistance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Immediate help for flood-affected communities. We&apos;re here 24/7 to provide relief, resources, and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#emergency" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg">
                🚨 Request Emergency Help
              </a>
              <a href="#resources" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition shadow-lg">
                View Resources
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section id="emergency" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-red-800">Emergency Services</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">If you need immediate assistance, use these contacts</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-red-600">
              <div className="text-4xl mb-4">🚑</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Emergency Rescue</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">911</p>
              <p className="text-gray-600">For immediate life-threatening emergencies</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="text-4xl mb-4">🆘</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Flood Relief Hotline</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">1-800-FLOOD-HELP</p>
              <p className="text-gray-600">24/7 flood assistance and coordination</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Medical Support</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">1-800-MED-HELP</p>
              <p className="text-gray-600">Non-emergency medical assistance</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Request Assistance</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
                <input type="text" id="location" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Street address or nearest landmark" />
              </div>
              <div>
                <label htmlFor="emergency-type" className="block text-sm font-medium text-gray-700 mb-1">Type of Emergency</label>
                <select id="emergency-type" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Stranded - Need Rescue</option>
                  <option>Medical Emergency</option>
                  <option>Need Food/Water</option>
                  <option>Need Shelter</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea id="details" rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Please provide any additional information that can help us assist you"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Submit Emergency Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Flood Safety Tips</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Important information to keep you and your family safe</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Evacuate Early</h3>
              <p className="text-gray-600 text-sm">Don&apos;t wait for mandatory evacuation orders. Leave as soon as flooding is imminent.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Avoid Flooded Roads</h3>
              <p className="text-gray-600 text-sm">Never drive through flooded areas. Just 6 inches of water can cause you to lose control.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Stay Connected</h3>
              <p className="text-gray-600 text-sm">Keep your phone charged and stay tuned to weather alerts and emergency broadcasts.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-3">🎒</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">Emergency Kit</h3>
              <p className="text-gray-600 text-sm">Prepare a kit with water, food, first aid, medications, and important documents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Relief Resources</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Essential services and support available to flood victims</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Temporary Shelter</h3>
              <p className="text-gray-600 mb-4">Find emergency shelter locations, capacity information, and directions to safe havens in your area.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Find Shelters →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Food & Water</h3>
              <p className="text-gray-600 mb-4">Access distribution points for emergency food supplies, clean drinking water, and meal services.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">View Locations →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Financial Aid</h3>
              <p className="text-gray-600 mb-4">Learn about disaster relief funds, insurance claims assistance, and financial support programs.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Get Information →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Clothing & Supplies</h3>
              <p className="text-gray-600 mb-4">Find donation centers offering clothing, blankets, hygiene products, and essential supplies.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Browse Resources →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Medical Services</h3>
              <p className="text-gray-600 mb-4">Access free health clinics, medication replacement, and mental health support services.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Find Clinics →</a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Recovery Support</h3>
              <p className="text-gray-600 mb-4">Connect with volunteers and organizations offering cleanup, repairs, and rebuilding assistance.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Get Help →</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About FloodRescu Relief</h2>
            <p className="text-lg text-gray-600 mb-6">
              FloodRescu Relief is dedicated to providing immediate assistance and coordinated support to communities affected by flooding disasters. Our mission is to save lives, provide relief, and help communities rebuild stronger.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We work 24/7 with emergency services, volunteers, and relief organizations to ensure no one faces flood disasters alone. From emergency rescue to long-term recovery, we&apos;re here every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Volunteer With Us
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FloodRescu Relief</h3>
              <p className="text-gray-400">Providing emergency assistance and relief to flood-affected communities.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#emergency" className="hover:text-white transition">Emergency Services</a></li>
                <li><a href="#resources" className="hover:text-white transition">Resources</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Emergency Contact</h3>
              <p className="text-gray-400 mb-2">24/7 Hotline:</p>
              <p className="text-2xl font-bold text-blue-400">1-800-FLOOD-HELP</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 FloodRescu Relief. All rights reserved. Stay safe.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
