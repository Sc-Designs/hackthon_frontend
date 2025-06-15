import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointment } = location.state || {};

  if (!appointment) {
    return (
      <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 text-center">
          <div className="bg-amber-100 text-amber-700 p-4 rounded-lg mb-6">
            <h1 className="text-2xl font-bold mb-2">Booking Not Found</h1>
            <p>We couldn't find your booking details. Please try again.</p>
          </div>
          <button 
            onClick={() => navigate('/book')}
            className="px-6 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Book Again
          </button>
        </div>
      </div>
    );
  }

  const { doctor, date, time, customer } = appointment;

  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-500 px-6 py-8 text-center">
          <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Appointment Confirmed!</h1>
          <p className="mt-2 text-emerald-100">Thank you for your booking. A confirmation has been sent to your email.</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start mb-6">
            {doctor?.image && (
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-16 h-16 rounded-full border-2 border-emerald-400 mr-4"
              />
            )}
            <div>
              <h2 className="text-xl font-bold text-emerald-800">{doctor?.name || 'Doctor'}</h2>
              <p className="text-emerald-600">{doctor?.specialty || 'Specialist'}</p>
              <div className="flex items-center mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-sm text-gray-700">{doctor?.rating || 0}</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 mb-6">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">Appointment Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border border-emerald-200">
                <p className="text-sm font-medium text-emerald-600">Date</p>
                <p className="text-gray-800 font-medium">{date}</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-200">
                <p className="text-sm font-medium text-emerald-600">Time</p>
                <p className="text-gray-800 font-medium">{time}</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-200">
                <p className="text-sm font-medium text-emerald-600">Duration</p>
                <p className="text-gray-800 font-medium">30 minutes</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-emerald-200">
                <p className="text-sm font-medium text-emerald-600">Booking Reference</p>
                <p className="text-gray-800 font-medium">#{Math.random().toString(36).substr(2, 8).toUpperCase()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-600">Name</p>
                <p className="text-gray-800">{customer.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-600">Email</p>
                <p className="text-gray-800">{customer.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-600">Phone</p>
                <p className="text-gray-800">{customer.phone}</p>
              </div>
              {customer.notes && (
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-emerald-600">Notes</p>
                  <p className="text-gray-800">{customer.notes}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.print()}
              className="px-6 py-3 rounded-lg bg-white border border-emerald-500 text-emerald-500 hover:bg-emerald-50 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Confirmation
            </button>
            <button 
              onClick={() => navigate('/')}
              className="px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;