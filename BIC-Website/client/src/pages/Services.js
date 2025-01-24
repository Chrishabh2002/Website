import React, { useEffect, useState } from 'react';
import { motion, useTransform } from 'framer-motion';
import { 
  BuildingOfficeIcon,
  ChartBarIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
  DocumentChartBarIcon 
} from '@heroicons/react/24/outline';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stats, setStats] = useState({ clients: 0, funding: 0, retention: 0 });

  const servicesData = [
    {
      category: "Business Setup",
      icon: <BuildingOfficeIcon className="w-12 h-12" />,
      items: ["Company Registration", "GST Compliance", "MSME Certification", "Import-Export Code"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Business Growth",
      icon: <ChartBarIcon className="w-12 h-12" />,
      items: ["Funding Assistance", "Project Reports", "Financial Analysis", "Investor Pitches"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Business Expansion",
      icon: <ArrowsPointingOutIcon className="w-12 h-12" />,
      items: ["Digital Marketing", "SEO Strategy", "Web Development", "E-commerce Solutions"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      category: "Business Protection",
      icon: <ShieldCheckIcon className="w-12 h-12" />,
      items: ["Legal Compliance", "Trademark Registration", "IPR Protection", "Legal Audits"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      category: "Govt Schemes",
      icon: <DocumentChartBarIcon className="w-12 h-12" />,
      items: ["PMEGP Assistance", "Startup India", "CGTMSE Support", "Sector Schemes"],
      gradient: "from-yellow-500 to-amber-500"
    }
  ];

  useEffect(() => {
    // Animated stats counter
    const animateStats = () => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setStats({
          clients: Math.min(500, current * 25),
          funding: Math.min(250, current * 12),
          retention: Math.min(95, current * 4)
        });
        if(current >= 20) clearInterval(interval);
      }, 50);
    };
    animateStats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9Im5vbmUiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyMDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxyZWN0IHg9IjIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyMDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] animate-grid-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10"style={{ paddingTop: '4rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Next-Gen Business Solutions
          </h1>
          <p className="text-xl text-gray-300">
            Transformative Services for the Digital Enterprise Era
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative group bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border ${
                hoveredIndex === index 
                  ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                  : 'border-blue-400/20'
              } transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Animated icon */}
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <div className={`bg-gradient-to-br ${section.gradient} p-4 rounded-2xl inline-block`}>
                  {React.cloneElement(section.icon, {
                    className: `w-12 h-12 text-white`
                  })}
                </div>
              </motion.div>

              <h2 className="text-2xl font-bold text-gray-100 mb-6">
                {section.category}
              </h2>
              
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Hover particles */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{
                        x: Math.random() * 100 - 50 + '%',
                        y: Math.random() * 100 - 50 + '%',
                        scale: 0
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 1
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Animated stats */}
        <motion.div 
          className="mt-20 grid grid-cols-3 gap-8 text-center bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="p-4">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {stats.clients}+
            </div>
            <div className="text-gray-400 mt-2">Successful Launches</div>
          </div>
          <div className="p-4">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ₹{stats.funding}Cr+
            </div>
            <div className="text-gray-400 mt-2">Funds Secured</div>
          </div>
          <div className="p-4">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {stats.retention}%
            </div>
            <div className="text-gray-400 mt-2">Retention Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Global floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: 0
          }}
          animate={{
            y: ['0%', '100%', '0%'],
            x: [Math.random() * 20 - 10 + '%', Math.random() * 20 - 10 + '%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default Services;