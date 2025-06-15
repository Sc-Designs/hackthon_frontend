import { Search } from "lucide-react";

const ChatList = ({
  patients,
  selectedPatient,
  onSelectPatient,
  searchQuery,
  onSearch,
}) => {
  return (
    <div
      className={`${selectedPatient ? "hidden md:flex" : "flex"} flex-col w-full md:w-80 border-r border-gray-200 bg-white min-h-0`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-300"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`flex flex-col p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
              selectedPatient?.id === patient.id ? "bg-green-50" : ""
            }`}
            onClick={() => onSelectPatient(patient)}
          >
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-gray-900">
                {patient.name}
              </p>
              <p className="text-xs text-gray-400">{patient.time}</p>
            </div>
            <p className="text-sm text-gray-500 mt-1 truncate">
              {patient.lastMessage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
