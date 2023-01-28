import React from "react";
import Link from "next/link";

const Footern = () => {
  return (
  
    <>
      <div
        class="row p-5 text-dark text-left border"
        style={{ background: "#F0F2F5" }}
      >
        <div class="col-sm-3 mb-4 mb-md-0 text-dark">
          <h5 class=" text-dark">Contact</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <address>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                  className="bi bi-geo-alt-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                Suit # 14, 3rd Floor, Al-Baber Centre
                <br />
                Islamabad, Islamabad Capital Territory 44000
              </address>
            </li>
            <li>
              <div className="footer-info">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  fill="currentColor"
                  className="bi bi-telephone-fill me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                (051) 2287298
              </div>
            </li>
          
          </ul>
        </div>

        <div class="col-sm-3 mb-4 mb-md-0">
          <h5 class="  text-dark mb-2">About Us</h5>

          <ul class="list-unstyled d-flex justify-content-around flex-column">
            <li>
              <Link href="/more/contact-us" class="text-dark ">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about-us" class="text-dark">
                Who we are
              </Link>
            </li>
            <li>
              <Link href="/" class="text-dark">
                What we Do
              </Link>
            </li>
          </ul>
        </div>

        <div class="col-sm-3 mb-4 mb-md-0 sm:mt-4">
          <h5 class=" text-dark mb-2">Resources</h5>
          <ul class="list-unstyled d-flex justify-content-around flex-column">
            <li>
              <Link href="/publications/research-reports" class="text-dark">
                Research Reports
              </Link>
            </li>
            <li>
              <Link href="/about-us/financial-reports" class="text-dark">
                Financial Reports
              </Link>
            </li>
            <li>
              <Link href="/publications/progress-reports" class="text-dark">
                Progress Reports
              </Link>
            </li>
          
          </ul>
        </div>

        <div class="col-sm-3  mb-4 mb-md-0">
          <h5 class=" mb-2 text-dark ">Get Involved</h5>

          <ul class="list-unstyled d-flex justify-content-around flex-column">
            <li>
              <Link href="/join-us/jobs" class="text-dark">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/more/blogs" class="text-dark">
                Blog
              </Link>
            </li>{" "}
            <li>
              <Link href="/" class="text-dark">
                Events
              </Link>
            </li>
          
          </ul>
        </div>
      </div>
      {/* // </div> */}

      <div
        class="text-center p-3 row"
        style={{ background: "#222222" }}
        // style="background-color: rgba(0, 0, 0, 0.2);"
      >
        <p className="text-white small">
          ©2023 Sustainable Social Development Organization  
        </p>
      </div>
    </>
    // </div>
  );
};

export default Footern;
