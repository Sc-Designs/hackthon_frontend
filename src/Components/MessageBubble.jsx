const MessageBubble = ({ text, time, isDoctor }) => {
  return (
    <div className={`flex ${isDoctor ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
          isDoctor
            ? "bg-green-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        <p className="text-sm">{text}</p>
        <p
          className={`text-xs mt-1 text-right ${
            isDoctor ? "text-green-100" : "text-gray-500"
          }`}
        >
          {time}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
