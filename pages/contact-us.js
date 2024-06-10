import React from "react";
import Layout from "@/components/Layout";
const ContactUs = () => {
  return (
    <Layout title="Contact Us">
      <div class="container content-space-t-1 p-4 mt-20 ">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary mb-5">
            <span className="bg-primary text-white">Get in Touch</span>
          </h4>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex justify-content-center">
          <div class="col-4 mb-4 mb-lg-0">
            <div class="card card-lg text-center h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi-person-circle fs-1 text-dark"></i>
                </div>

                <div class="mb-5">
                  <h4 className="fw-bold">Head Office</h4>
                </div>

                <div class="mb-5">
                  <span class="d-block">
                  901, Green Trust Tower, Jinnah Avenue, Islamabad
                  </span>
                </div>

                <div class="d-grid mb-3">
                  <a class="btn btn-white" href="mailto: info@ssdo.org.pk ">
                    <i class="bi-envelope-open me-2"></i> info@ssdo.org.pk
                  </a>
                </div>

                <a class="btn btn-ghost-dark btn-sm" href="#">
                  <i class="bi-telephone me-2"></i> +92-051-8433431
                </a>
              </div>
            </div>
          </div>

          <div class="col-4 mb-4 mb-lg-0">
            <div class="card card-lg text-center h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi-wallet2 fs-1 text-dark"></i>
                </div>

                <div class="mb-5">
                  <h4 className="fw-bold">Sub Offices</h4>
                </div>

                <div class="mb-5">
                  <span class="d-block">
                    Lahore: Office # 504, 5th Floor, Land Mark Plaza, Jail Road,
                    Lahore
                  </span>
                </div>

                <div class="mb-5">
                  <span class="d-block">
                    Multan: House #1065/g, Street # 1, Qadeer Abad, Multan
                  </span>
                </div>

                <div class="mb-5">
                  <span class="d-block">
                    Sukkur: Gulshan-e-Iqal Colony, Near Bijrani Chowk, Golimar
                    Road, Sukkur
                  </span>
                </div>
                {/* <div class="d-grid mb-3">
                <a class="btn btn-white" href="mailto:billing@site.com">
                  <i class="bi-envelope-open me-2"></i> billing@site.com
                </a>
              </div> */}

                <a class="btn btn-ghost-dark btn-sm" href="#">
                  <i class="bi-telephone me-2"></i> (062) 1099222
                </a>
              </div>
            </div>
          </div>
          <div class="col-4 mb-4 mb-lg-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.4661391729564!2d73.07779765276199!3d33.72288263809345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8308ecc255%3A0x7060e58f1e852b66!2sGreen%20Trust%20Tower!5e0!3m2!1sen!2s!4v1718029562610!5m2!1sen!2s"
           width="450"
          height="450" 
           style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
