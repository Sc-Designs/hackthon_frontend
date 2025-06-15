import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import MessageBubble from "./MessageBubble";

const ChatWindow = ({ patient, messages, onBack }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() && patient) {
      console.log(`Sending to ${patient.name}: ${newMessage}`);
      setNewMessage("");
    }
  };

  if (!patient) {
    return (
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
        <div className="text-center">
          <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">No chat selected</h3>
          <p className="mt-1 text-sm text-gray-500">Choose a patient from the list</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 bg-white">
      <div className="flex items-center p-4 border-b border-gray-200">
        <button
          className="md:hidden mr-2 p-1 rounded-full hover:bg-gray-100"
          onClick={onBack}
        >
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>
        <div>
          <h2 className="text-lg font-medium text-gray-900">{patient.name}</h2>
          <p className="text-xs text-gray-500">Last seen {patient.time}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
        {messages?.map((message, index) => (
          <MessageBubble
            key={index}
            text={message.text}
            time={message.time}
            isDoctor={message.from === "doctor"}
          />
        ))}
      </div>

      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            className="flex-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-300 px-4 py-2"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            className="ml-2 bg-green-500 hover:bg-green-600 text-white rounded-lg p-2"
            onClick={handleSend}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
