import { Home, LineChart, Bot, Wallet } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", icon: <Home size={18} />, id: "Home" },
    { name: "Market", icon: <LineChart size={18} />, id: "Market" },
    { name: "Bot", icon: <Bot size={18} />, id: "Bot" },
    { name: "Account", icon: <Wallet size={18} />, id: "Account" }
  ];

  return (
    <div
      className="fixed z-100 bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-500/30
        bg-clip-padding
        backdrop-filter
        backdrop-blur-sm
        bg-opacity-10
        backdrop-saturate-100
        border border-white/50
        backdrop-contrast-125 text-white flex justify-between w-80 rounded-2xl py-3 px-4 shadow-lg"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`flex flex-col items-center text-sm gap-0.5 ${
            activeTab === item.id ? "text-yellow-400" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(item.id)}
        >
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Footer;
