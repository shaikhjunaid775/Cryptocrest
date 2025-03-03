import Blob from "../component/Blob";
import logo from "../assets/images/logowhite.png";
import wallet from "../assets/images/wallet.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

function OnBoard() {
  const navigate = useNavigate();

  const x = useMotionValue(0);
  const width = useTransform(x, [0, 300 - 60], [300, 60]);
  const opacity = useTransform(x, [0, 300 - 60], [1, 0]);
  const rotate = useTransform(x, [0, 300 - 60], [-90, 0]);
  const dashOffset = useTransform(x, [0, 300 - 60], [192, 202]);
  const offsetX = useTransform(x, [0, 300 - 60], [0, -3]);
  const offsetY = useTransform(x, [0, 300 - 60], [0, 3]);

   // Handle drag end and redirect to login page
   const handleDragEnd = (event, info) => {
    const finalX = info.offset.x;  // Get the final drag position from `info.offset.x`

    console.log('Final X:', finalX); // Debug log to check the final position

    // Check if the drag reached the rightmost position
    if (finalX >= 300 - 60) {
      navigate('/login');  // Redirect to the login page when reached the end
    }
  };

  return (
    <>
      <style>{`
        .blob-c {
          height: 100vh !important;
        }
      `}</style>
      <Blob />
      <div className=" text-white flex min-h-screen flex-col items-center py-10 justify-between ">
        <div className="text-foreground text-white font-semibold text-2xl tracking-tighter mx-auto flex flex-col items-center ">
          <div>
            <img src={logo} className="w-32" />
          </div>
          <div className="relative -mb-px h-px w-48 bg-gradient-to-r from-transparent via-[var(--btn-gradent-yellow)] to-transparent"></div>
        </div>

        <img src={wallet} className="w-64" />
        <div className="w-[85%]">
          <h2 className="text-4xl font-semibold">
            Buy, sell &amp; trade more efficient
          </h2>
          <p className="text-white/30 text-xs text-normal">
            Instantly invest in cryptocurrencies, exchange it and pay online
            with us
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <div className="swipercontainer">
            <motion.div
              className="thumb"
              drag="x"
              dragConstraints={{ left: 0, right: 300 - 60 }}
              dragSnapToOrigin
              dragElastic={0.01}
              style={{ x }}
              onDragEnd={handleDragEnd} // Attach the drag end handler
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                style={{
                  rotate,
                  position: "relative",
                  top: offsetY,
                  left: offsetX
                }}
              >
                <motion.path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  strokeDasharray={100}
                  strokeDashoffset={dashOffset}
                  d="M23 4L17.5 9.5L12 15L7 10"
                />
              </motion.svg>
            </motion.div>

            <motion.div className="slider" style={{ width }}>
              <motion.div className="slider-text" style={{ opacity }}>
                Lets Start
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnBoard;
