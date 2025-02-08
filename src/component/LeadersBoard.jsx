import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import logo from "../assets/images/logodark.png";

const names = [
  "Aarav Patel",
  "Aditi Sharma",
  "Akash Gupta",
  "Ananya Singh",
  "Arjun Mehta",
  "Avni Desai",
  "Dev Patel",
  "Diya Joshi",
  "Ishan Shah",
  "Jaya Mishra",
  "Kavya Reddy",
  "Krish Sharma",
  "Maya Kapoor",
  "Milan Singhania",
  "Naina Shah",
  "Nikhil Khanna",
  "Nisha Rao",
  "Pranav Kumar",
  "Priya Das",
  "Raj Chopra",
  "John Smith",
  "Maria Lopez",
  "Ahmed Hassan",
  "Mei Chen",
  "Jean Dupont",
  "Ivan Petrov",
  "Chiara Rossi",
  "Lars Andersen",
  "Ravi Gupta",
  "Kim Lee",
  "Li Wei",
  "Ingrid Olsen",
  "Elena Ivanova",
  "José Silva",
  "Emiko Tanaka",
  "Dimitri Kovalenko",
  "Sofia Fernandez",
  "Selma Abadi",
  "Pedro Costa",
  "Priya Patel"
];

const getRandomAmount = () => {
  return `₹${(
    Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000
  ).toLocaleString("en-IN")}.00`;
};

function LeadersBoard() {
  return (
    <>
      <div className="px-3">
        <div className="p-4 px-2.5 text-white  rounded-xl border border-yellow-500 shadow-lg  ">
          <h3 className="font-bold text-lg mb-2">Leaderboard</h3>
          <div className="relative flex items-center">
            <div className="w-full">
              <Swiper
                direction="vertical"
                slidesPerView={2}
                loop={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="h-28"
              >
                {names.map((name, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex items-center justify-between bg-gradient-to-r from-white/40 rounded-full p-2 my-1 shadow-lg">
                      <img
                        src={logo}
                        alt="Avatar"
                        className="w-6 h-6 rounded-full"
                      />
                      <p className="text-xs font-medium">{name}</p>
                      <span className="bg-gradient-to-r from-[var(--btn-gradent-yellow)] to-[var(--btn-gradent-orange)] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {getRandomAmount()}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <img
              src="https://cryptocrest.expresslink1.online/assets/assets/images/trophy.png"
              alt="Trophy"
              className="w-24 h-24 ml-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeadersBoard;
