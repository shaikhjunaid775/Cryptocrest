import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { ArrowLeft } from "lucide-react";

function ForgotPassword() {
  return (
    <>
      <div className="bg-black text-white flex min-h-screen flex-col items-center pt-10 sm:justify-center sm:pt-0">
        <a href="#">
          <div className="text-foreground text-white font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div>
              <img src={logo} className="w-32" />
            </div>
          </div>
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        </a>
        <div className="relative mt-12 w-full maxWLg sm:mt-10">
          <div className="mx-5 border   sm:border-tWhite/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 roundedLg   border-white/20 sm:shadow-sm rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                Forgot Password
              </h3>
              <p className="mt-1.5 text-sm font-medium text-white/50">
                No worries, it happens, Please enter the username associated
                with your account.
              </p>
            </div>
            <div className="p-6 pt-0">
              <form>
                <div>
                  <div>
                    <div className="flex justify-between">
                      <label className="text-sm font-medium text-muted-foreground  text-gray-400 pb-1">
                        Username
                      </label>
                    </div>
                    <div className=" relative rounded-lg border  duration-200">
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        autoComplete="off"
                        className="block w-full p-3 py-2.5 rounded-xl border-0 bg-transparent  text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0  text-foreground"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end gap-x-2">
                  <Link
                    to="/home"
                    className="w-full text-center items-center bg-gradient-to-r from-[var(--btn-gradent-yellow)] to-[var(--btn-gradent-orange)] justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent  h-10 px-4 py-2 duration-200 border border-[var(--btn-gradent-yellow)]"
                  >
                    Submit
                  </Link>
                </div>
                <div className="text-center text-sm mt-3 flex justify-center items-center gap-2">
                  <ArrowLeft size={16} />
                  <Link to="/login" className="underline">
                    <span> Back to login</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
