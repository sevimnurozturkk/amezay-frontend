import React, { useState } from "react";

const ChatPages: React.FC = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Merhaba! Size nasıl yardımcı olabilirim?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: "Bu kısım geliştirilecek." }]);
    }, 500);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      {/* Başlık */}
      <div className="bg-teal-500 dark:bg-teal-700 text-white py-4 px-6 text-xl font-bold shadow-md">
        Amezay AI Chat
      </div>

      {/* Mesajlar */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-md break-words p-4 rounded-2xl shadow-md ${
              msg.from === "bot"
                ? "bg-gray-200 dark:bg-gray-800 self-start text-gray-900 dark:text-white"
                : "bg-teal-500 text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Mesaj input */}
      <div className="p-4 bg-gray-200 dark:bg-gray-800 flex items-center space-x-3 border-t border-gray-300 dark:border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Mesajınızı yazın..."
          className="flex-1 p-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
        />
        <button
          onClick={sendMessage}
          className="px-6 py-3 bg-teal-500 dark:bg-teal-600 text-white rounded-full hover:bg-teal-600 dark:hover:bg-teal-700 font-semibold transition"
        >
          Gönder
        </button>
      </div>
    </div>
  );
};

export default ChatPages;


