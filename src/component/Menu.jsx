import {
  CreditCard,
  Wallet,
  Star,
  Cog,
  Users,
  Zap,
  Share2,
  Gamepad
} from "lucide-react";

function Menu() {
  const buttons = [
    { icon: CreditCard, label: "Deposit" },
    { icon: Wallet, label: "Withdrawal" },
    { icon: Star, label: "Top 10" },
    { icon: Cog, label: "AI Prediction" },
    { icon: Users, label: "My Team" },
    { icon: Zap, label: "Boost" },
    { icon: Share2, label: "Share Link" },
    { icon: Gamepad, label: "Play Games" }
  ];
  return (
    <>
      <div className="flex flex-col  justify-center py-5">
      <span className="text-lg font-bold text-white px-3 pb-3">Select</span>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-y-3 gap-2 max-w-4xl">
          {buttons.map((button, index) => {
            const Icon = button.icon;
            return (
              <div key={index}>
                <div className="flex flex-col items-center text-center gap-2">
                  <button className="flex flex-col items-center w-fit justify-center gap-2 bg-gradient-to-r from-white/30  p-2 rounded-2xl   backdrop-blur-sm border border-white/10 transition-all duration-300 group rotate-45 ">
                    <div className="p-2 rounded-full -rotate-45">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                  </button>
                  <span className="text-sm text-white/90 font-normal">
                    {button.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
       
      </div>
    </>
  );
}

export default Menu;
