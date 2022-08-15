import React from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  metaData?: {
    title?: string;
    description?: string;
  };
  heightFit?: boolean;
}

const Layout: React.FC<Props> = ({ children, metaData, heightFit }) => {
  return (
    <>
      <Head>
        <title>{metaData?.title ?? "Gangnam Coding Club"}</title>
        <meta
          name="description"
          content={
            metaData?.description ??
            "Gangnam Coding Club, the best coding club in the world!"
          }
        />
      </Head>
      <div
        className={`mx-4 mt-4 ${heightFit ?? "h-screen max-h-screen"}
      lg:w-[1024px] lg:m-auto lg:mt-8
      `}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
