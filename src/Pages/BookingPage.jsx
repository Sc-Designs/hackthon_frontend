import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state || {};
  
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});

  // Generate available times
  const generateAvailableTimes = () => {
    return ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'];
  };

  useEffect(() => {
    if (selectedDate) {
      const times = generateAvailableTimes();
      setAvailableTimes(times);
      setSelectedTime('');
    }
  }, [selectedDate]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(2);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!customerInfo.name.trim()) newErrors.name = 'Name is required';
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!customerInfo.phone.trim()) newErrors.phone = 'Phone is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const appointmentData = {
        doctor,
        date: selectedDate,
        time: selectedTime,
        customer: customerInfo,
        createdAt: new Date().toISOString()
      };
      navigate('/booking-confirmation', { state: { appointment: appointmentData } });
    }
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };

  // Calendar component
  const Calendar = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    
    const prevMonth = () => setCurrentMonth(prev => prev === 0 ? 11 : prev - 1);
    const nextMonth = () => setCurrentMonth(prev => prev === 11 ? 0 : prev + 1);
    
    const renderDays = () => {
      const days = [];
      const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
      
      // Empty days
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="h-10"></div>);
      }
      
      // Actual days
      for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const isToday = day === today.getDate() && currentMonth === today.getMonth();
        const isPast = new Date(currentYear, currentMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const isSelected = selectedDate === dateStr;
        
        days.push(
          <button
            key={`day-${day}`}
            disabled={isPast}
            className={`h-10 rounded-full flex items-center justify-center 
              ${isToday ? 'bg-emerald-100 font-semibold' : ''} 
              ${isSelected ? 'bg-emerald-500 text-white' : ''} 
              ${isPast ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-emerald-100'}`}
            onClick={() => !isPast && handleDateSelect(dateStr)}
          >
            {day}
          </button>
        );
      }
      
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <button onClick={prevMonth} className="p-2 rounded-full hover:bg-emerald-100 text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <h3 className="text-xl font-semibold text-gray-800">{monthName} {currentYear}</h3>
            <button onClick={nextMonth} className="p-2 rounded-full hover:bg-emerald-100 text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-7 gap-1 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-sm font-medium text-emerald-600 py-2">
                {day}
              </div>
            ))}
            {days}
          </div>
        </div>
      );
    };
    
    return renderDays();
  };

  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-500 px-6 py-8 text-center">
          <h1 className="text-3xl font-bold text-white">Book an Appointment</h1>
          {doctor && (
            <div className="mt-4 flex items-center justify-center space-x-4 bg-white/20 rounded-lg p-3 max-w-md mx-auto">
              {doctor.image && (
                <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full border-2 border-white" />
              )}
              <div className="text-left text-white">
                <h3 className="font-semibold">{doctor.name || 'Doctor'}</h3>
                <p className="text-sm">{doctor.specialty || 'Specialist'}</p>
              </div>
            </div>
          )}
          <div className="mt-6 flex justify-between items-center">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= stepNumber ? 'bg-white text-emerald-600' : 'bg-emerald-400 text-white'} font-semibold`}>
                  {stepNumber}
                </div>
                <span className={`mt-2 text-sm ${step >= stepNumber ? 'text-white font-medium' : 'text-emerald-100'}`}>
                  {stepNumber === 1 && 'Date'}
                  {stepNumber === 2 && 'Time'}
                  {stepNumber === 3 && 'Details'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Select a Date</h2>
              <Calendar />
              <div className="flex justify-between pt-4">
                <button 
                  onClick={goBack}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Select a Time</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {availableTimes.map(time => (
                  <button
                    key={time}
                    className={`py-3 rounded-lg border-2 transition-colors ${selectedTime === time ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-emerald-200 hover:border-emerald-300'}`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button 
                  onClick={goBack}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                {selectedTime && (
                  <button 
                    onClick={() => handleTimeSelect(selectedTime)}
                    className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Your Information</h2>
              
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Appointment Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <p><span className="font-medium text-emerald-600">Doctor:</span> {doctor?.name || 'Not specified'}</p>
                  <p><span className="font-medium text-emerald-600">Specialty:</span> {doctor?.specialty || 'Not specified'}</p>
                  <p><span className="font-medium text-emerald-600">Date:</span> {selectedDate}</p>
                  <p><span className="font-medium text-emerald-600">Time:</span> {selectedTime}</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-emerald-500 focus:border-emerald-500'}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={customerInfo.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Any symptoms or information the doctor should know?"
                    rows="3"
                  />
                </div>
                
                <div className="flex justify-between pt-4">
                  <button 
                    type="button"
                    onClick={goBack}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    Confirm Booking
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;