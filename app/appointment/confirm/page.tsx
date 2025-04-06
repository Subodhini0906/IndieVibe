// app/appointment/confirm/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ConfirmAppointment() {
  const searchParams = useSearchParams();
  
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const phone = searchParams.get('phone');
  const service = searchParams.get('service');
  const date = searchParams.get('date');
  const time = searchParams.get('time');
  
  // Format the date nicely if it exists
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h1 className="text-2xl font-bold text-green-800">Appointment Confirmed!</h1>
        </div>
        
        <p className="mb-6 text-gray-600">
          Thank you for booking with Elegance Atelier. We&apos;re looking forward to seeing you.
        </p>
        
        <div className="bg-white p-4 rounded-md border border-gray-200 mb-6">
          <h2 className="text-lg font-medium mb-3">Appointment Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{name}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{email}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{phone}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-medium">{service}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{formattedDate}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium">{time}</p>
            </div>
          </div>
        </div>
        
        <div className="text-gray-600 mb-6">
          <p>A confirmation email has been sent to {email}. If you need to reschedule or have any questions, please contact us at (555) 123-4567.</p>
        </div>
        
        <div className="flex justify-between">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Return to Homepage
          </Link>
          
          <button 
            onClick={() => window.print()} 
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print Details
          </button>
        </div>
      </div>
    </div>
  );
}