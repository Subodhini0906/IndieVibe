'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BookAppointment() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Tailoring',
    date: '',
    time: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd send this data to your backend
    
    // Create a URLSearchParams object and add each form field
    const queryParams = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      queryParams.append(key, String(value));
    });
    
    // Navigate to the confirmation page with the query parameters
    router.push(`/appointment/confirm?${queryParams.toString()}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Book an Appointment</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block mb-2 font-medium">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          >
            <option value="Custom Tailoring">Custom Tailoring</option>
            <option value="Alterations">Alterations</option>
            <option value="Style Consultation">Style Consultation</option>
            <option value="Wedding Attire">Wedding Attire</option>
            <option value="Fabric Selection">Fabric Selection</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="date" className="block mb-2 font-medium">Preferred Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="time" className="block mb-2 font-medium">Preferred Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select a time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}