import { NavLink } from 'react-router-dom';
import { MessageSquare, FileText, Settings, X } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const navItems = [
    { path: "chats", icon: MessageSquare, label: "Chats" },
    { path: "reports", icon: FileText, label: "Reports" },
    { path: "settings", icon: Settings, label: "Settings" }
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" 
          onClick={onClose}
        ></div>
        <div className="fixed inset-y-0 left-0 flex max-w-xs w-full bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-5 flex-1 px-2 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={`/doctor-portal/${item.path}`}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-3 rounded-md text-base font-medium ${
                      isActive ? 'bg-green-100 text-green-600' : 'text-gray-600 hover:bg-gray-100'
                    }`
                  }
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-20 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col items-center py-4 space-y-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={`/doctor-portal/${item.path}`}
                className={({ isActive }) =>
                  `p-3 rounded-lg ${
                    isActive ? 'bg-green-100 text-green-600' : 'text-gray-500 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;