import { motion } from "framer-motion";
import invitationsImg from "@/assets/wedding-invitations.jpg";
import photographyImg from "@/assets/photography.jpg";
import beautyImg from "@/assets/beauty-makeup.jpg";
import flowersImg from "@/assets/wedding-flowers.jpg";
import cakeImg from "@/assets/wedding-cake.jpg";
import musicImg from "@/assets/music-entertainment.jpg";

const Services = () => {
  const services = [
    {
      title: "Wedding Invitations",
      description: "Elegant and personalized wedding invitations that set the tone for your special day",
      image: invitationsImg,
    },
    {
      title: "Photography & Videography",
      description: "Professional photographers and videographers to capture every precious moment",
      image: photographyImg,
    },
    {
      title: "Beauty & Makeup",
      description: "Expert bridal makeup artists and beauticians for your perfect wedding look",
      image: beautyImg,
    },
    {
      title: "Wedding Flowers",
      description: "Beautiful floral arrangements and bouquets to enhance your wedding decor",
      image: flowersImg,
    },
    {
      title: "Wedding Cake",
      description: "Custom wedding cakes designed to be as unique and sweet as your love story",
      image: cakeImg,
    },
    {
      title: "Music & Entertainment",
      description: "Live bands, DJs, and entertainment to keep your celebration memorable",
      image: musicImg,
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
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete wedding planning services to make your dream wedding come true
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card-elegant group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;