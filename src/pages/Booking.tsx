import React, { useState } from 'react';
import BookingForm, { BookingFormData } from '../components/ui/BookingForm';

const Booking: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState<BookingFormData | null>(null);

  const handleSubmit = (formData: BookingFormData) => {
    // In a real application, this would send the data to a server
    console.log('Booking submitted:', formData);
    setBookingData(formData);
    setIsSubmitted(true);
    
    // Scroll to the confirmation
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 bg-[#14213D]">
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Book an Appointment</h1>
            <p className="text-xl text-gray-300">
              Schedule your appointment with our expert stylists and beauticians.
            </p>
          </div>
        </div>
      </div>
      
      {/* Booking Content */}
      <div className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          {isSubmitted ? (
            <div className="max-w-3xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
                  Booking Confirmed!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for booking an appointment with Style N Beauty Studio. 
                  We have received your request and will confirm your appointment shortly.
                </p>
                
                {bookingData && (
                  <div className="bg-white rounded-lg p-6 shadow-sm mb-6 text-left">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Your Booking Details:
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium text-gray-800">{bookingData.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Service</p>
                        <p className="font-medium text-gray-800">{bookingData.service}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date & Time</p>
                        <p className="font-medium text-gray-800">
                          {bookingData.date} at {bookingData.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Stylist</p>
                        <p className="font-medium text-gray-800">
                          {bookingData.stylist || 'Any Available Stylist'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <p className="text-gray-600 mb-6">
                  A confirmation email has been sent to {bookingData?.email}. 
                  If you need to make any changes to your appointment, please contact us at +91 96729 53316.
                </p>
                
                <button
                  className="px-6 py-2 bg-[#14213D] text-white rounded-full font-medium transition-colors hover:bg-opacity-90"
                  onClick={() => setIsSubmitted(false)}
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-semibold text-[#14213D] mb-4">
                  Schedule Your Visit
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below to book your appointment. Our team will confirm your booking
                  as soon as possible.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <BookingForm onSubmit={handleSubmit} />
              </div>
              
              <div className="mt-12 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-serif font-semibold text-[#14213D] mb-4">
                  Booking Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span className="text-gray-600">
                      Appointments must be booked at least 24 hours in advance.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span className="text-gray-600">
                      A 50% deposit may be required for services over ₹3,000.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span className="text-gray-600">
                      Please arrive 10 minutes before your scheduled appointment time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">•</span>
                    <span className="text-gray-600">
                      Cancellations must be made at least 24 hours prior to your appointment to avoid a cancellation fee.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;