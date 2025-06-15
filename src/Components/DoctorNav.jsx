import { Menu, X } from 'lucide-react';

const DoctorNav = ({ isOpen, toggle }) => {
  return (
    <nav className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <button
        onClick={toggle}
        className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      <h1 className="text-lg font-medium text-gray-800">Doctor Portal</h1>
      <div className="w-10"></div> {/* Balance the flex layout */}
    </nav>
  );
};

export default DoctorNav;