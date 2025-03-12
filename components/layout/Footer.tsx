'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Video Production", href: "#services" },
        { name: "Website Development", href: "#services" },
        { name: "Social Media", href: "#services" },
        { name: "Content Creation", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "YouTube", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-blue-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">HealthDigital</h3>
            <p className="text-blue-200">
              Transforming healthcare marketing in Nizamabad through innovative digital solutions.
            </p>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; {currentYear} HealthDigital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;