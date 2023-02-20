import React from "react";

const SocialNetworksSidebar = () => {
  return (
    <aside className="col-md-4 end-sidebar-lg">
      <div className="sticky">
        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Social network</span>
            </h4>
          </div>
          <ul className="list-unstyled social-two">
            <li className="facebook">
              <a
                className="bg-facebook text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
              >
                Facebook
              </a>
            </li>
            <li className="twitter">
              <a
                className="bg-twitter text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                Twitter
              </a>
            </li>
            <li className="instagram">
              <a
                className="bg-instagram text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                Instagram
              </a>
            </li>
            <li className="youtube">
              <a
                className="bg-youtube text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="youtube"
              >
                Youtube
              </a>
            </li>
            <li className="linkedin">
              <a
                className="bg-linkedin text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                Linkedin
              </a>
            </li>
            <li className="vimeo">
              <a
                className="bg-vimeo text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vimeo"
              >
                Vimeo
              </a>
            </li>
            <li className="pinterest">
              <a
                className="bg-pinterest text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
            </li>
            <li className="telegram">
              <a
                className="bg-telegram text-white"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                Telegram
              </a>
            </li>
          </ul>
          <div className="gap-15"></div>
        </aside>

        <aside className="widget">
          <div className="block-title-4">
            <h4 className="h5 title-arrow">
              <span>Media</span>
            </h4>
          </div>

          {/* <iframe
            width="355"
            height="200"
            src="https://www.youtube.com/embed/yT9dUBVkHeQ"
          ></iframe>
          <br />
          <iframe
            width="355"
            height="200"
            src="https://www.youtube.com/embed/GCuU6kadgaU"
          ></iframe>
          <br />
          <iframe
            width="355"
            height="200"
            src="https://www.youtube.com/embed/8zLeIltoVaA"
          ></iframe> */}
          {/* <div className="gap-0"></div> */}
        </aside>

        {/* timeline */}
        <aside
          id="bootnews_custompost-10"
          className="widget widget_categories widget_categories_custom"
        >
        <a class="twitter-timeline" data-width="400" data-height="800" href="https://twitter.com/SSDOPakistan?ref_src=twsrc%5Etfw">Tweets by SSDOPakistan</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </aside>
        {/* <aside className="widget">
          <div className="hover-a text-center">
            <div className="py-2">
              <span className="text-mute small">- Advertisement -</span>
            </div>

            <a href="#">
              <img
                className="img-fluid bg-light"
                src="../../assets/img/ads/300-demo.png"
                alt="ads space"
              />
            </a>
          </div>
          <div className="gap-15"></div>
        </aside> */}
      </div>
    </aside>
  );
};

export default SocialNetworksSidebar;
