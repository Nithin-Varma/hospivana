'use client';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Social Media Management", href: "#services" },
        { name: "Website Development", href: "#services" },
        { name: "Google Ads", href: "#services" },
        { name: "Meta Ads", href: "#services" },
        { name: "YouTube Marketing", href: "#services" },
        { name: "Marketing Strategy", href: "#services" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Healthcare", href: "#industries" },
        { name: "Education", href: "#industries" },
        { name: "Restaurants", href: "#industries" },
        { name: "Hotels", href: "#industries" },
        { name: "Retail", href: "#industries" },
        { name: "Technology", href: "#industries" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Case Studies", href: "#case-studies" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "#" },
        { name: "Twitter", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "YouTube", href: "#" },
        { name: "Facebook", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-blue-950 text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">MarketingLead</h3>
            <p className="text-blue-200 mb-6">
              Your trusted partner for comprehensive digital marketing solutions that drive real business growth.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-xs">in</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-blue-200 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-blue-200">
          <p>&copy; {currentYear} MarketingLead. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;