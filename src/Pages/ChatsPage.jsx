import { useState } from 'react';
import ChatList from '../Components/ChatList';
import ChatWindow from '../Components/ChatWindow';

const ChatsPage = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const patients = [
    { id: 1, name: "Aryan Singh", lastMessage: "Thank you, doctor.", time: "10:30 AM" },
    { id: 2, name: "Meera Sharma", lastMessage: "I uploaded my report.", time: "9:15 AM" },
    { id: 3, name: "Ravi Patel", lastMessage: "Can I get a prescription?", time: "Yesterday" }
  ];

  const messages = {
    1: [
      { from: "patient", text: "Hello Doctor.", time: "10:00 AM" },
      { from: "doctor", text: "Hi Aryan, how can I help you?", time: "10:01 AM" }
    ],
    2: [
      { from: "patient", text: "Hey Doctor", time: "9:00 AM" },
      { from: "doctor", text: "Hi Meera, I saw your report.", time: "9:05 AM" }
    ],
    3: [  // ✅ NEW CONVO FOR RAVI
    { from: "patient", text: "Can I get a prescription?", time: "Yesterday" },
    { from: "doctor", text: "Sure Ravi, I’ll send it shortly.", time: "Yesterday" }
  ]
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-1 h-screen min-h-0 overflow-hidden">
      <ChatList
        patients={filteredPatients}
        selectedPatient={selectedPatient}
        onSelectPatient={setSelectedPatient}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
      <ChatWindow
        patient={selectedPatient}
        messages={selectedPatient ? messages[selectedPatient.id] : []}
        onBack={() => setSelectedPatient(null)}
      />
    </div>
  );
};

export default ChatsPage;
