import React from "react";

const Emergency = () => {
  return (
    <div className="min-h-screen bg-red-50 px-4 py-8 mt-[80px]">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-red-700 text-center mb-6">
        🚨 Emergency Help
      </h1>

      {/* Call Ambulance Button */}
      <div className="flex justify-center mb-4">
        <a
          href="tel:102"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-colors"
        >
          Call Ambulance (102)
        </a>
      </div>

      {/* Google Maps Link */}
      <div className="text-center mb-10">
        <a
          href="https://www.google.com/maps/search/hospitals+near+me"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800 font-medium"
        >
          🏥 Find Nearest Hospitals on Google Maps
        </a>
      </div>

      {/* Emergency Steps */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">📝 What to Do in an Emergency</h2>

        <div>
          <h3 className="text-lg font-bold text-gray-700">Step 1: Check for Responsiveness</h3>
          <p className="text-gray-600">Tap the person and shout. If no response, call for help immediately.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">Step 2: Check Breathing</h3>
          <p className="text-gray-600">If the person is not breathing or only gasping, begin CPR.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">Step 3: Perform CPR</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Place hands in the center of the chest.</li>
            <li>Push hard and fast (about 100-120 compressions per minute).</li>
            <li>Continue until emergency services arrive.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">Step 4: Use an AED if Available</h3>
          <p className="text-gray-600">Follow the automated voice prompts to administer a shock if needed.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700">Step 5: Stay Calm & Reassure</h3>
          <p className="text-gray-600">Keep the patient warm and talk to them gently if they regain consciousness.</p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
