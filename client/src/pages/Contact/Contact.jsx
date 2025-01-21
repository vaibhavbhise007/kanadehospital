import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendContactFormData } from "../../stores/actions/contactAction";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.contact);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactFormData(formData));
  };

  return (
    <div className="bg-white pt-16">
      <div className="relative py-16 bg-[#e6dfdf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-black">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 font-serif">
              Get in touch with our medical team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <Card className="p-6">
              <form className="space-y-4 font-serif" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 123 456 7890"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    placeholder="How can we help you?"
                    className="h-32"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  className="w-full bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white hover:text-black"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
                {success && (
                  <p className="text-green-600 mt-2">
                    Message sent successfully!
                  </p>
                )}
                {error && <p className="text-red-600 mt-2">Error: {error}</p>}
              </form>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6 font-serif">
              <Card className="p-6 text-sm">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-[#C5A572] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      Nagar-Manmad Road, Rahata (Shirdi), Ahmednagar District.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 text-sm">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-[#C5A572] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9420636736 / 8208423324</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 text-sm">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-[#C5A572] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">
                      drkanadehospital76@gmail.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 text-sm">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-[#C5A572] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 11:00 AM - 3:00 PM
                    </p>
                    <p className="text-gray-600">Emergency: 24/7</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
