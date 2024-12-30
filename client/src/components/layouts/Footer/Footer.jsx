import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[rgb(107,71,55)] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#C5A572] font-semibold text-lg mb-4">Dr. Kanade Hospital</h3>
            <p className="text-sm">Advanced laser treatment center specializing in painless piles treatment.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#C5A572] text-sm">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-[#C5A572] text-sm">Treatments</Link></li>
              <li><Link to="/blog" className="hover:text-[#C5A572] text-sm">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-[#C5A572] text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                +91 9420636736 / 8208423324
              </li>
              <li className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" />
                drkanadehospital76@gmail.com
              </li>
              <li className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Nagar-Manmad Road, Rahata (Shirdi), Ahmednagar District.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday - Saturday</li>
              <li>11:00 AM - 3:00 PM</li>
              <li>Emergency: 24/7</li>
            </ul>
          </div>
        </div>

       
      </div>
      <div className="border-t bg-white border-gray-800 mt-8 pt-4 h-16 text-sm text-center text-black">
          <p>&copy; {new Date().getFullYear()} Dr. Kanade Hospital. All rights reserved.</p>
        </div>
    </footer>
  );
}