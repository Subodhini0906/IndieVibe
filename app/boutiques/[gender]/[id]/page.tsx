"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Combined data for all boutiques
const boutiquesData = {
  women: [
    {
      id: 1,
      name: "Elegance Atelier",
      description: "Premium custom tailoring for women with a focus on elegant evening wear and business attire.",
      fullDescription: "Elegance Atelier offers a luxurious tailoring experience for the discerning woman. Our master tailors bring decades of experience to create garments that perfectly complement your style and physique. We specialize in evening wear, business attire, and special occasion ensembles using only the finest imported fabrics.",
      image: "/women1.avif",
      gallery: ["/women12.jpg", "/women.jpg", "/women13.jpg"],
      specialty: "Evening Wear & Business Attire",
      location: "Downtown Fashion District",
      address: "123 Fashion Avenue, Downtown",
      phone: "(555) 123-4567",
      email: "appointments@eleganceatelier.com",
      hours: "Mon-Fri: 9am-6pm, Sat: 10am-4pm",
      services: ["Custom Tailoring", "Alterations", "Style Consultation", "Fabric Selection", "Wedding Attire"],
      rating: 4.8,
      reviews: [
        { author: "Emma S.", rating: 5, comment: "Absolutely stunning work on my evening gown. The attention to detail was impeccable." },
        { author: "Sophia L.", rating: 5, comment: "My business suits have never fit better. Worth every penny for the quality and service." },
        { author: "Olivia R.", rating: 4, comment: "Beautiful craftsmanship, though the turnaround time was a bit longer than expected." }
      ]
    },
    {
      id: 2,
      name: "Stitch & Style",
      description: "Contemporary designs with personalized fitting services for the modern woman.",
      fullDescription: "Stitch & Style brings modern sensibility to traditional tailoring techniques. We create contemporary designs that reflect your personal style while ensuring the perfect fit. Our boutique specializes in everyday wear that feels special, business casual attire, and statement pieces that stand out in any setting.",
      image: "/women11.jpg",
      gallery: ["/women.jpg", "/women1.avif", "/women.jpg"],
      specialty: "Contemporary Fashion",
      location: "Westside Shopping Center",
      address: "456 Westside Boulevard, Fashion District",
      phone: "(555) 234-5678",
      email: "hello@stitchandstyle.com",
      hours: "Mon-Sat: 10am-7pm, Sun: 12pm-5pm",
      services: ["Ready-to-Wear Alterations", "Custom Designs", "Wardrobe Styling", "Personal Shopping", "Seasonal Collections"],
      rating: 4.7,
      reviews: [
        { author: "Ava T.", rating: 5, comment: "Love my new custom blouses! Perfect fit and exactly the style I was looking for." },
        { author: "Isabella M.", rating: 4, comment: "Great service and beautiful work. Slightly pricey but worth it for special items." },
        { author: "Mia K.", rating: 5, comment: "The team at Stitch & Style truly understands how to enhance your personal style." }
      ]
    },
    {
      id: 3,
      name: "Coutour Collection",
      description: "Contemporary designs with personalized fitting services for the modern woman.",
      fullDescription: "Stitch & Style brings modern sensibility to traditional tailoring techniques. We create contemporary designs that reflect your personal style while ensuring the perfect fit. Our boutique specializes in everyday wear that feels special, business casual attire, and statement pieces that stand out in any setting.",
      image: "/women3.jpg",
      gallery: ["/women.jpg", "/women1.avif", "/women.jpg"],
      specialty: "Contemporary Fashion",
      location: "Westside Shopping Center",
      address: "456 Westside Boulevard, Fashion District",
      phone: "(555) 234-5678",
      email: "hello@stitchandstyle.com",
      hours: "Mon-Sat: 10am-7pm, Sun: 12pm-5pm",
      services: ["Ready-to-Wear Alterations", "Custom Designs", "Wardrobe Styling", "Personal Shopping", "Seasonal Collections"],
      rating: 4.9,
      reviews: [
        { author: "Ava T.", rating: 5, comment: "Love my new custom blouses! Perfect fit and exactly the style I was looking for." },
        { author: "Isabella M.", rating: 4, comment: "Great service and beautiful work. Slightly pricey but worth it for special items." },
        { author: "Mia K.", rating: 5, comment: "The team at Stitch & Style truly understands how to enhance your personal style." }
      ]
    },
    {
      id: 4,
      name: "Thread & Needle",
      description: "Contemporary designs with personalized fitting services for the modern woman.",
      fullDescription: "Stitch & Style brings modern sensibility to traditional tailoring techniques. We create contemporary designs that reflect your personal style while ensuring the perfect fit. Our boutique specializes in everyday wear that feels special, business casual attire, and statement pieces that stand out in any setting.",
      image: "/women4.webp",
      gallery: ["/women.jpg", "/women1.avif", "/women.jpg"],
      specialty: "Contemporary Fashion",
      location: "Westside Shopping Center",
      address: "456 Westside Boulevard, Fashion District",
      phone: "(555) 234-5678",
      email: "hello@stitchandstyle.com",
      hours: "Mon-Sat: 10am-7pm, Sun: 12pm-5pm",
      services: ["Ready-to-Wear Alterations", "Custom Designs", "Wardrobe Styling", "Personal Shopping", "Seasonal Collections"],
      rating: 4.5,
      reviews: [
        { author: "Ava T.", rating: 5, comment: "Love my new custom blouses! Perfect fit and exactly the style I was looking for." },
        { author: "Isabella M.", rating: 4, comment: "Great service and beautiful work. Slightly pricey but worth it for special items." },
        { author: "Mia K.", rating: 5, comment: "The team at Stitch & Style truly understands how to enhance your personal style." }
      ]
    },
    {
      id: 5,
      name: "Fashion Forward",
      description: "Contemporary designs with personalized fitting services for the modern woman.",
      fullDescription: "Stitch & Style brings modern sensibility to traditional tailoring techniques. We create contemporary designs that reflect your personal style while ensuring the perfect fit. Our boutique specializes in everyday wear that feels special, business casual attire, and statement pieces that stand out in any setting.",
      image: "/women5.jpg",
      gallery: ["/women.jpg", "/women1.avif", "/women.jpg"],
      specialty: "Contemporary Fashion",
      location: "Westside Shopping Center",
      address: "456 Westside Boulevard, Fashion District",
      phone: "(555) 234-5678",
      email: "hello@stitchandstyle.com",
      hours: "Mon-Sat: 10am-7pm, Sun: 12pm-5pm",
      services: ["Ready-to-Wear Alterations", "Custom Designs", "Wardrobe Styling", "Personal Shopping", "Seasonal Collections"],
      rating: 4.6,
      reviews: [
        { author: "Ava T.", rating: 5, comment: "Love my new custom blouses! Perfect fit and exactly the style I was looking for." },
        { author: "Isabella M.", rating: 4, comment: "Great service and beautiful work. Slightly pricey but worth it for special items." },
        { author: "Mia K.", rating: 5, comment: "The team at Stitch & Style truly understands how to enhance your personal style." }
      ]
    },
    {
      id: 6,
      name: "Heritage Tailor",
      description: "Contemporary designs with personalized fitting services for the modern woman.",
      fullDescription: "Stitch & Style brings modern sensibility to traditional tailoring techniques. We create contemporary designs that reflect your personal style while ensuring the perfect fit. Our boutique specializes in everyday wear that feels special, business casual attire, and statement pieces that stand out in any setting.",
      image: "/women5.jpg",
      gallery: ["/women.jpg", "/women1.avif", "/women.jpg"],
      specialty: "Contemporary Fashion",
      location: "Westside Shopping Center",
      address: "456 Westside Boulevard, Fashion District",
      phone: "(555) 234-5678",
      email: "hello@stitchandstyle.com",
      hours: "Mon-Sat: 10am-7pm, Sun: 12pm-5pm",
      services: ["Ready-to-Wear Alterations", "Custom Designs", "Wardrobe Styling", "Personal Shopping", "Seasonal Collections"],
      rating: 4.8,
      reviews: [
        { author: "Ava T.", rating: 5, comment: "Love my new custom blouses! Perfect fit and exactly the style I was looking for." },
        { author: "Isabella M.", rating: 4, comment: "Great service and beautiful work. Slightly pricey but worth it for special items." },
        { author: "Mia K.", rating: 5, comment: "The team at Stitch & Style truly understands how to enhance your personal style." }
      ]
    },
    // Additional women's boutiques would go here
  ],
  men: [
    {
      id: 1,
      name: "The Gentleman's Tailor",
      description: "Bespoke suits and formal wear crafted with precision and attention to detail.",
      fullDescription: "The Gentleman's Tailor is dedicated to the art of bespoke suit making. Our heritage techniques combined with modern precision ensure that each garment is a masterpiece of fit and style. We pride ourselves on creating timeless pieces that become the cornerstone of a distinguished wardrobe.",
      image: "/men.avif",
      gallery: ["/men.avif", "/men1.avif", "/men.avif"],
      specialty: "Bespoke Suits",
      location: "Financial District",
      address: "789 Executive Row, Financial District",
      phone: "(555) 345-6789",
      email: "appointments@gentlemanstailor.com",
      hours: "Mon-Fri: 8am-7pm, Sat: 9am-5pm",
      services: ["Bespoke Suit Creation", "Made-to-Measure", "Wedding Attire", "Formal Wear", "Business Suits", "Shirt Tailoring"],
      rating: 4.9,
      reviews: [
        { author: "James H.", rating: 5, comment: "My wedding suit exceeded all expectations. Impeccable craftsmanship and service." },
        { author: "William B.", rating: 5, comment: "The attention to detail is remarkable. Best suits I've ever owned." },
        { author: "Benjamin M.", rating: 4, comment: "Excellent quality and service. The process was educational and the results outstanding." }
      ]
    },
    {
      id: 2,
      name: "Modern Man",
      description: "Contemporary tailoring for the fashion-forward man with custom fits and modern styles.",
      fullDescription: "Modern Man brings fresh perspective to men's tailoring with contemporary designs that push boundaries while maintaining exceptional quality and fit. We specialize in helping men express their individuality through clothing that is as unique as they are, with a focus on versatile pieces that transition seamlessly from work to evening.",
      image: "/men1.avif",
      gallery: ["/men1.avif", "/men.avif", "/men1.avif"],
      specialty: "Contemporary Styling",
      location: "Arts District",
      address: "321 Creative Lane, Arts District",
      phone: "(555) 456-7890",
      email: "style@modernman.com",
      hours: "Tue-Sat: 11am-8pm, Sun: 12pm-5pm",
      services: ["Contemporary Tailoring", "Casual Wear", "Style Consultation", "Wardrobe Planning", "Limited Edition Pieces"],
      rating: 4.7,
      reviews: [
        { author: "Noah P.", rating: 5, comment: "Finally found tailoring that matches my style. Modern cuts with perfect fit." },
        { author: "Elijah S.", rating: 4, comment: "Great creative vision and excellent execution. Reasonable turnaround times too." },
        { author: "Lucas K.", rating: 5, comment: "The team at Modern Man transformed my wardrobe. Can't recommend enough." }
      ]
    },
    {
      id: 3,
      name: "Heritage & cloths",
      description: "Contemporary tailoring for the fashion-forward man with custom fits and modern styles.",
      fullDescription: "Modern Man brings fresh perspective to men's tailoring with contemporary designs that push boundaries while maintaining exceptional quality and fit. We specialize in helping men express their individuality through clothing that is as unique as they are, with a focus on versatile pieces that transition seamlessly from work to evening.",
      image: "/men8.webp",
      gallery: ["/men4.webp", "/men2.jpg", "/men21.webp"],
      specialty: "Contemporary Styling",
      location: "Arts District",
      address: "321 Creative Lane, Arts District",
      phone: "(555) 456-7890",
      email: "style@modernman.com",
      hours: "Tue-Sat: 11am-8pm, Sun: 12pm-5pm",
      services: ["Contemporary Tailoring", "Casual Wear", "Style Consultation", "Wardrobe Planning", "Limited Edition Pieces"],
      rating: 4.7,
      reviews: [
        { author: "Noah P.", rating: 5, comment: "Finally found tailoring that matches my style. Modern cuts with perfect fit." },
        { author: "Elijah S.", rating: 4, comment: "Great creative vision and excellent execution. Reasonable turnaround times too." },
        { author: "Lucas K.", rating: 5, comment: "The team at Modern Man transformed my wardrobe. Can't recommend enough." }
      ]
    },
    {
      id: 4,
      name: "Modern Man",
      description: "Contemporary tailoring for the fashion-forward man with custom fits and modern styles.",
      fullDescription: "Modern Man brings fresh perspective to men's tailoring with contemporary designs that push boundaries while maintaining exceptional quality and fit. We specialize in helping men express their individuality through clothing that is as unique as they are, with a focus on versatile pieces that transition seamlessly from work to evening.",
      image: "/men1.avif",
      gallery: ["/men1.avif", "/men.avif", "/men1.avif"],
      specialty: "Contemporary Styling",
      location: "Arts District",
      address: "321 Creative Lane, Arts District",
      phone: "(555) 456-7890",
      email: "style@modernman.com",
      hours: "Tue-Sat: 11am-8pm, Sun: 12pm-5pm",
      services: ["Contemporary Tailoring", "Casual Wear", "Style Consultation", "Wardrobe Planning", "Limited Edition Pieces"],
      rating: 4.7,
      reviews: [
        { author: "Noah P.", rating: 5, comment: "Finally found tailoring that matches my style. Modern cuts with perfect fit." },
        { author: "Elijah S.", rating: 4, comment: "Great creative vision and excellent execution. Reasonable turnaround times too." },
        { author: "Lucas K.", rating: 5, comment: "The team at Modern Man transformed my wardrobe. Can't recommend enough." }
      ]
    },
    // Additional men's boutiques would go here
  ]
};

const BoutiqueDetailsPage = () => {
  const params = useParams();
  const gender = params.gender as string;
  const boutiqueId = parseInt(params.id as string);
  
  // Find the boutique data
  const boutique = boutiquesData[gender as keyof typeof boutiquesData]?.find(b => b.id === boutiqueId);

  if (!boutique) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Boutique Not Found</h1>
          <Link href={`/boutiques/${gender}`} className="text-blue-600 hover:text-blue-800">
            Back to {gender === 'women' ? "Women's" : "Men's"} Boutiques
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href={`/boutiques/${gender}`} className="text-gray-700 hover:text-blue-600 ml-1 md:ml-2">
                    {gender === 'women' ? "Women's" : "Men's"} Boutiques
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-gray-500 ml-1 md:ml-2">{boutique.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Boutique Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-96">
            <Image 
              src={boutique.image}
              alt={boutique.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{boutique.name}</h1>
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-400 text-yellow-900 text-sm font-semibold px-2.5 py-0.5 rounded flex items-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {boutique.rating}
                  </span>
                  <span className="text-white text-sm font-medium">{boutique.specialty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">About {boutique.name}</h2>
              <p className="text-gray-700 mb-6">{boutique.fullDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {boutique.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {boutique.gallery.map((image, index) => (
                  <div key={index} className="relative h-40 rounded-lg overflow-hidden">
                    <Image 
                      src={image}
                      alt={`${boutique.name} gallery image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {boutique.reviews.map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-center mb-2">
                      <div className="bg-blue-100 text-blue-800 p-2 rounded-full mr-3">
                        {review.author.split(' ')[0][0]}{review.author.split(' ')[1]?.[0]}
                      </div>
                      <div>
                        <h4 className="font-medium">{review.author}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact & Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 sticky top-8">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-700">{boutique.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-700">{boutique.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-700">{boutique.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-medium text-gray-900">Hours</h4>
                    <p className="text-gray-700">{boutique.hours}</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded transition-colors duration-300 mb-4">
                  Book an Appointment
                </button>
                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoutiqueDetailsPage;