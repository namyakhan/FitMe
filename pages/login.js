import React from "react";

const login = () => {
  return (
    <section className="bg-beige font-sora">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-beige rounded-lg shadow box2 md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-purple">
              Sign in to your account
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-charcoal"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-grayish text-grayish sm:text-sm rounded-lg  block w-full p-2.5 "
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  text-charcoal"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-grayish text-grayish sm:text-sm rounded-lg block w-full p-2.5  "
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-grayish rounded bg-gray-50  "
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-charcoal ">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-charcoal hover:underline "
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="btn w-full bg-purple  rounded-lg text-sm py-2.5 "
              >
                Sign in
              </button>
              <p className="text-sm font-gray">
                Don’t have an account yet?
                <a
                  href="#"
                  className="font-medium text-purple hover:underline ml-2"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
