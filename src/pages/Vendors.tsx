import { motion } from "framer-motion";
import { Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import catererImg from "@/assets/caterer.jpg";
import photographyImg from "@/assets/photography.jpg";
import designerImg from "@/assets/designer.jpg";
import beautyImg from "@/assets/beauty-makeup.jpg";
import jewelerImg from "@/assets/jeweler.jpg";
import bandImg from "@/assets/band.jpg";

const Vendors = () => {
  const vendors = [
    {
      name: "Royal Caterers",
      category: "Catering Services",
      description: "Exquisite culinary experiences with traditional and modern cuisine options",
      image: catererImg,
      rating: 4.8,
      contact: "+91 9876543210",
      email: "info@royalcaterers.com",
    },
    {
      name: "Capture Moments Studio",
      category: "Photography",
      description: "Professional wedding photographers specializing in candid and traditional photography",
      image: photographyImg,
      rating: 4.9,
      contact: "+91 9876543211",
      email: "booking@capturemoments.com",
    },
    {
      name: "Elegant Designs",
      category: "Fashion Designer",
      description: "Custom bridal wear and designer outfits for your special day",
      image: designerImg,
      rating: 4.7,
      contact: "+91 9876543212",
      email: "design@elegantdesigns.com",
    },
    {
      name: "Glamour Beauty Studio",
      category: "Makeup Artist",
      description: "Professional bridal makeup and beauty services for the perfect wedding look",
      image: beautyImg,
      rating: 4.8,
      contact: "+91 9876543213",
      email: "beauty@glamourstudio.com",
    },
    {
      name: "Heritage Jewelers",
      category: "Jewelry",
      description: "Traditional and contemporary wedding jewelry for brides and grooms",
      image: jewelerImg,
      rating: 4.6,
      contact: "+91 9876543214",
      email: "sales@heritagejewelers.com",
    },
    {
      name: "Melody Music Band",
      category: "Entertainment",
      description: "Live music bands and entertainment for weddings and celebrations",
      image: bandImg,
      rating: 4.7,
      contact: "+91 9876543215",
      email: "music@melodyband.com",
    },
  ];

  const handleContactVendor = (vendor: any) => {
    // In a real app, this would open a contact form or messaging system
    alert(`Contacting ${vendor.name}...\nPhone: ${vendor.contact}\nEmail: ${vendor.email}`);
  };

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
            Wedding Vendors
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our trusted network of professional wedding vendors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              className="card-elegant group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {vendor.name}
                  </h3>
                  <p className="text-primary text-sm font-medium">{vendor.category}</p>
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(vendor.rating)
                          ? "text-accent fill-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {vendor.rating}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  {vendor.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {vendor.contact}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    {vendor.email}
                  </div>
                </div>
                
                <Button
                  className="btn-romantic w-full"
                  onClick={() => handleContactVendor(vendor)}
                >
                  Contact Vendor
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;