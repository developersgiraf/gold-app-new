"use client";

export default function Login({show}) {

    return (
        <>
       
      {show && (
          <div className="absolute top-48 w-full px-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-white text-center mb-8">
                Welcome Back
              </p>

              <div className="space-y-4">
                <label htmlFor="email" className="text-white text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-sm
                   bg-white/10 text-white
                    placeholder-white/60 border
                     border-white/20 focus:outline-none
                      focus:border-white/40"
                />
                <label htmlFor="password" className="text-white text-sm">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 rounded-sm
                   bg-white/10 text-white
                    placeholder-white/60 border
                     border-white/20 focus:outline-none
                      focus:border-white/40"
                />
                <button className="w-full py-3 rounded-sm bg-white text-[#275152] font-semibold hover:bg-white/90 transition-colors text-sm">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
         </>
    );
}