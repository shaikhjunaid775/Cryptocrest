import user from "../assets/images/user.png";
// import logowhite from "../assets/images/logowhite.png";
import logodark from "../assets/images/logowhite.png";
import Blob from "./Blob";

function Header() {
  return (
    <>
        <Blob />
      <div className="grid grid-cols-3 items-center justify-between py-1 relative px-4">
        <div className="flex gap-2 items-center ">
          <div className="py-1.5 d-flex justify-content-center align-items-center">
            <div className="">
              <img alt="img" className="w-9 rounded-full  " src={user} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        {/* <img className="w-8 h-8 block dark:hidden" src={logowhite} /> */}
        <img className="w-8 h-8 hidden dark:block" src={logodark} />
        </div>
        <div className="relative flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white size-7"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.585 15.5H5.415A1.65 1.65 0 0 1 4 13a10.5 10.5 0 0 0 1.5-5.415V6.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.085c0 1.907.518 3.78 1.5 5.415a1.65 1.65 0 0 1-1.415 2.5m1.915-11q-.4-1.4-1-2c-.6-.6-1.066-.733-2-1m-10.912 3q.313-1.4.912-2c.599-.6 1.096-.733 2.088-1M13 17q-1 1.5-2.5 1.5C9 18.5 8.667 18 8 17"
              strokeWidth={1}
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Header;
