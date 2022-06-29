import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Browser
const signIn = ({ providers }) => {
  return (
    <>
      <div className="relative flex mt-10 justify-center flex-col items-center md:flex-row">
        <img
          className="items-center hidden lg:block"
          src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
          alt=""
        />
        <img
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
          alt=""
          className="h-[33.8rem] absolute top-[1.7rem] right-[47.6rem] hidden lg:block"
        />

        {/* Instagram Logo */}

        <div className="flex items-center justify-center min-h-screen py-2 lg:-mt-56 md:px-14 text-center">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <img
                src="https://links.papareact.com/ocw"
                layout="fill"
                className="w-80 items-center"
              />

              <p className="w-80 p-1">
                This is not a Real App, It is created as a showcase project for
                my portfolio.
              </p>
              <button
                className="bg-blue-500 rounded-lg text-white p-3 mt-40 "
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Server
export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
