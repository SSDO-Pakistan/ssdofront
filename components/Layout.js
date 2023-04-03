import React from "react";
import Head from "next/head";


const Layout = ({ children, title, description, keywords,SliderHighlights }) => {
 
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content="SSDO Pakistan" />
        <meta property="og:description" content="Sustainable Social Development Organization (SSDO) is a non-governmental organization founded in 2015 and registered under Societies Registration Act 1860."/>
        <meta property="og:image" content={ SliderHighlights && SliderHighlights.data[0].attributes.image.data[0].attributes.url}/>
        <meta property="og:url" content="https://ssdo.org.pk/"/>
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
