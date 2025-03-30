import Link from 'next/link';
import Image from 'next/image';

export default function MensBoutiques() {
  // Sample data for men's boutiques
  const boutiques = [
    {
      id: 1,
      name: "Modern Gentleman",
      description: "Contemporary men's fashion with classic roots",
      image: "/images/mens-boutique-1.jpg",
      location: "Business District",
      specialty: "Tailored suits"
    },
    {
      id: 2,
      name: "Urban Edge",
      description: "Streetwear and casual fashion for modern men",
      image: "/images/mens-boutique-2.jpg",
      location: "Arts District",
      specialty: "Limited edition collaborations"
    },
    {
      id: 3,
      name: "Heritage Crafts",
      description: "Traditional craftsmanship meets contemporary style",
      image: "/images/mens-boutique-3.jpg",
      location: "Old Town",
      specialty: "Handcrafted leather goods"
    },
    {
      id: 4,
      name: "The Bespoke Studio",
      description: "Custom tailoring for the distinguished gentleman",
      image: "/images/mens-boutique-4.jpg",
      location: "Fashion Avenue",
      specialty: "Made-to-measure clothing"
    }
  ];

  return (
    <div className="container mx-auto px-8 max-w-6xl">
      <Link href="/" className="inline-block mb-8 text-gray-800 no-underline font-medium hover:underline">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8 text-center">Men&apos;s Boutiques</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {boutiques.map((boutique) => (
          <div key={boutique.id} className="rounded-lg overflow-hidden shadow-md bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="relative w-full h-[300px]">
              <Image 
                src={boutique.image} 
                alt={boutique.name} 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mt-0 mb-2">{boutique.name}</h2>
              <p className="text-gray-600 mb-4">{boutique.description}</p>
              <div className="mb-6">
                <p className="my-2"><strong>Location:</strong> {boutique.location}</p>
                <p className="my-2"><strong>Specialty:</strong> {boutique.specialty}</p>
              </div>
              <button className="bg-gray-800 text-white border-none py-3 px-6 rounded hover:bg-gray-700 transition-colors duration-300 font-medium">
                Visit Boutique
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}