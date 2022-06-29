import React from "react";
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Browser
const signIn = ({ providers }) => {
  return (
    <>
      <div className="relative flex mt-10 justify-center">
        <img
          className="items-center"
          src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
          alt=""
        />
        <img
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
          alt=""
          className="h-[33.8rem] absolute top-[1.7rem] right-[38.5rem]"
        />
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => SignIntoProvider(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
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
