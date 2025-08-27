import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import banquetImg from "@/assets/banquet-hall.jpg";
import resortImg from "@/assets/resort-venue.jpg";
import lawnImg from "@/assets/lawn-venue.jpg";
import palaceImg from "@/assets/palace-venue.jpg";

const Venues = () => {
  const [selectedVenue, setSelectedVenue] = useState<any>(null);

  const venues = [
    {
      name: "Grand Banquet Hall",
      location: "Ahmedabad, Gujarat",
      description: "Elegant indoor venue with crystal chandeliers and luxury amenities",
      image: banquetImg,
      capacity: "200-500 guests",
      features: ["Air Conditioning", "Stage Setup", "Catering Kitchen", "Parking"],
      price: "₹1,50,000 - ₹3,00,000",
    },
    {
      name: "Heritage Resort",
      location: "Udaipur, Rajasthan",
      description: "Luxurious resort with panoramic views and world-class facilities",
      image: resortImg,
      capacity: "100-300 guests",
      features: ["Pool Side", "Garden Area", "Multiple Halls", "Accommodation"],
      price: "₹2,00,000 - ₹5,00,000",
    },
    {
      name: "Garden Lawn Venue",
      location: "Jaipur, Rajasthan",
      description: "Beautiful outdoor venue surrounded by lush gardens and natural beauty",
      image: lawnImg,
      capacity: "150-400 guests",
      features: ["Open Air", "Garden Setup", "Tent Arrangements", "Natural Backdrop"],
      price: "₹80,000 - ₹2,00,000",
    },
    {
      name: "Royal Palace",
      location: "Jodhpur, Rajasthan",
      description: "Majestic palace venue with royal architecture and regal ambiance",
      image: palaceImg,
      capacity: "300-800 guests",
      features: ["Heritage Architecture", "Multiple Courtyards", "Royal Suites", "Cultural Programs"],
      price: "₹5,00,000 - ₹10,00,000",
    },
    {
      name: "Lakeside Resort",
      location: "Mount Abu, Rajasthan",
      description: "Serene lakeside venue with breathtaking views and peaceful ambiance",
      image: resortImg,
      capacity: "100-250 guests",
      features: ["Lake View", "Boat Rides", "Mountain Views", "Cozy Accommodation"],
      price: "₹1,80,000 - ₹3,50,000",
    },
    {
      name: "City Convention Hall",
      location: "Surat, Gujarat",
      description: "Modern convention center with state-of-the-art facilities and urban elegance",
      image: banquetImg,
      capacity: "500-1000 guests",
      features: ["Modern Facilities", "Audio Visual", "Large Capacity", "City Center Location"],
      price: "₹2,50,000 - ₹6,00,000",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Wedding Venues
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the perfect venue for your dream wedding celebration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {venues.map((venue, index) => (
            <motion.div
              key={venue.name}
              className="card-elegant group overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedVenue(venue)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {venue.name}
              </h3>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{venue.location}</span>
              </div>
              <p className="text-muted-foreground mb-4">
                {venue.description}
              </p>
              <div className="flex items-center text-sm text-primary">
                <Users className="h-4 w-4 mr-1" />
                {venue.capacity}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Details Modal */}
        <Dialog open={!!selectedVenue} onOpenChange={() => setSelectedVenue(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedVenue?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedVenue && (
              <div className="space-y-4">
                <img
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{selectedVenue.location}</span>
                </div>
                <p className="text-foreground">{selectedVenue.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Capacity</h4>
                    <p className="text-muted-foreground">{selectedVenue.capacity}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Price Range</h4>
                    <p className="text-primary font-semibold">{selectedVenue.price}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedVenue.features.map((feature: string) => (
                      <span
                        key={feature}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="btn-romantic w-full">
                  Enquire About This Venue
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Venues;