import React, { useState } from 'react';
import { CalendarDays, Clock, ArrowRight, AlertCircle, CheckCircle, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Medical_Organization = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about'); // 'about' or 'complaint'
  const [complaint, setComplaint] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Hospital information data
  const hospitalInfo = {
    name: "City General Hospital",
    description: "A leading healthcare provider with state-of-the-art facilities and compassionate care since 1985.",
    services: [
      "24/7 Emergency Care",
      "Cardiology Department",
      "Pediatric Specialists",
      "Maternity Ward",
      "Oncology Center",
      "Neurology Unit"
    ],
    stats: [
      { value: "200+", label: "Medical Staff" },
      { value: "500+", label: "Beds" },
      { value: "50+", label: "Specialties" },
      { value: "10,000+", label: "Patients Yearly" }
    ],
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D"
  };

  const handleComplaintChange = (e) => {
    const { name, value } = e.target;
    setComplaint(prev => ({ ...prev, [name]: value }));
  };

  const validateComplaint = () => {
    const newErrors = {};
    if (!complaint.name.trim()) newErrors.name = 'Name is required';
    if (!complaint.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(complaint.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!complaint.subject.trim()) newErrors.subject = 'Subject is required';
    if (!complaint.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleComplaintSubmit = (e) => {
    e.preventDefault();
    if (validateComplaint()) {
      // Simulate API call
      setTimeout(() => {
        setSubmissionStatus('success');
        setComplaint({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmissionStatus(null), 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hospital Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={hospitalInfo.image} 
                alt={hospitalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h1 className="text-3xl font-bold text-emerald-800 mb-4">{hospitalInfo.name}</h1>
              <p className="text-gray-600 mb-6">{hospitalInfo.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {hospitalInfo.stats.map((stat, index) => (
                  <div key={index} className="bg-emerald-50 p-4 rounded-lg text-center">
                    <p className="text-2xl font-bold text-emerald-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setActiveTab('complaint')}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium flex items-center"
              >
                <ShieldAlert className="w-5 h-5 mr-2" />
                File a Complaint
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 font-medium ${activeTab === 'about' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-gray-500 hover:text-emerald-500'}`}
          >
            About Our Hospital
          </button>
          <button
            onClick={() => setActiveTab('complaint')}
            className={`px-6 py-3 font-medium ${activeTab === 'complaint' ? 'text-red-600 border-b-2 border-red-600' : 'text-gray-500 hover:text-red-500'}`}
          >
            File a Complaint
          </button>
        </div>

        {/* Content Area */}
        {activeTab === 'about' ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Services Section */}
            <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hospitalInfo.services.map((service, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mr-4">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-gray-700">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-emerald-800 mb-6">Quick Links</h2>
              <div className="space-y-4">
                <button 
                  onClick={() => navigate('/book')}
                  className="w-full px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium text-left flex items-center justify-between"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={() => setActiveTab('complaint')}
                  className="w-full px-4 py-3 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium text-left flex items-center justify-between"
                >
                  File a Complaint
                  <AlertCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Complaint Form Section */
          <div className="bg-white rounded-xl shadow-lg p-8 border border-red-100">
            <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2" />
              File a Complaint
            </h2>
            
            {submissionStatus === 'success' ? (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Thank you for your feedback. We've received your complaint and will address it shortly.
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  We value your feedback. Please fill out this form to submit a complaint about your experience at our hospital.
                </p>

                <form onSubmit={handleComplaintSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={complaint.name}
                        onChange={handleComplaintChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={complaint.email}
                        onChange={handleComplaintChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={complaint.phone}
                        onChange={handleComplaintChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={complaint.subject}
                        onChange={handleComplaintChange}
                        className={`w-full px-4 py-2 rounded-lg border ${errors.subject ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                      />
                      {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Complaint Details*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={complaint.message}
                      onChange={handleComplaintChange}
                      rows="6"
                      className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                      placeholder="Please describe your complaint in detail..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">* Required fields</p>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors duration-200"
                    >
                      Submit Complaint
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Medical_Organization;