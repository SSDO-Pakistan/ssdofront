import React from "react";
import Head from "next/head";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import { useRouter } from "next/router";
const Layout = ({ children, title, description, keywords, image }) => {
  console.log(description);
  const router = useRouter();
  const { asPath, pathname } = useRouter();

  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={`https://ssdo.org.pk${asPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SSDO Pakistan" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
      </Head>
      <div class="sticky-container">
        <ul class="sticky">
          <li style={{ marginBottom: "8px" }}>
            <FacebookShareButton url={`https://ssdo.org.pk${asPath}`}>
              <FacebookIcon size={50} />
            </FacebookShareButton>
          </li>
          <li style={{ marginBottom: "8px" }}>
            <TwitterShareButton url={`https://ssdo.org.pk${asPath}`}>
              <TwitterIcon size={50} />
            </TwitterShareButton>
          </li>
          <li>
            <LinkedinShareButton url={`https://ssdo.org.pk${asPath}`}>
              <LinkedinIcon size={50} />
            </LinkedinShareButton>
          </li>
        </ul>
      </div>
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
