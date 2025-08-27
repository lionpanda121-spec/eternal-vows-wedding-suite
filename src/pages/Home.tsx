import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const Home = () => {
  const highlights = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Services",
      description: "Complete wedding planning services from invitations to entertainment",
      link: "/services",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Venues",
      description: "Beautiful venues for your perfect wedding celebration",
      link: "/venues",
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Vendors",
      description: "Professional vendors for all your wedding needs",
      link: "/vendors",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Celebrate Love with <span className="font-script text-primary-glow">Eternal Vows</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your Complete Wedding Planner
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/services">
              <Button className="btn-romantic text-lg px-12 py-4">
                Start Planning Your Dream Wedding
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Wedding Journey Starts Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From dreaming to planning to celebrating, we're with you every step of the way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link to={item.link}>
                  <div className="card-elegant text-center group cursor-pointer">
                    <div className="text-primary mb-4 flex justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;