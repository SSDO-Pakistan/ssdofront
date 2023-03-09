import React from "react";
import Head from "next/head";


const Layout = ({ children, title, description, keywords }) => {
 
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      
      </Head>
    

      {children}
     
    </div>
  );
};
Layout.defaultProps = {
  title: "SSDO",
  description:
    "Sustainable Social Development Organization (SSDO) is a non-governmental organization founded in 2015 and registered under Societies Registration Act 1860.",
  keywords: "management,services,careers,democray,RTI",
};
export default Layout;
