// import "./../App.css";

const Login = () => {
  const googleLogin = () => {
    // Replace with your Google OAuth 2.0 client ID and redirect URI
    const clientId =
      "678612018769-t6up75qeqummcqipijeni9spmakf11pd.apps.googleusercontent.com";
    const redirectUri = "http://localhost:3000/redirect";
    const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email%20profile`;

    window.location.href = authUrl;
  };

  return (
    <>
      <body suppressHydrationWarning={true} className="max-h-screen">
        <section className=" min-h-screen flex items-center justify-center">
          <div className="flex-col bg-blue-900 p-10 rounded-2xl md:shadow-lg w-full items-center md:w-1/5 flex-col flex-col md:flex-col 	">
            <h2 className=" text-3xl  md:text-2xl lg:text-3xl font-bold text-white font-inter mb-6 sm:mb-8 md:mb-10 lg:mb- xl:mb-20 text-center">
              <span>Sign In</span>
            </h2>

            <button
              onClick={googleLogin}
              className="bg-blue-300 hover:bg-blue-400 hover:border-[#ed6f07]
         py-3 w-full rounded-xl  flex justify-center
         items-center text-sm hover:scale-105 duration-300 hover:bg-blue-400 md:py-2 hover:border-4	 "
            >
              <span className="m-2 text-white font-bold ">
                Login with Google
              </span>
            </button>
          </div>
        </section>
      </body>
    </>
  );
};

export default Login;
