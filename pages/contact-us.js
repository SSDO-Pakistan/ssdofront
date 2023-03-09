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
        <div class="col mb-4 mb-lg-0">
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
                  Islamabad: Suit # 14, 3rd Floor, Al-Baber Centre, F-8 Markaz
                  Islamabad
                </span>
              </div>

              <div class="d-grid mb-3">
                <a class="btn btn-white" href="mailto: info@ssdo.org.pk ">
                  <i class="bi-envelope-open me-2"></i> info@ssdo.org.pk
                </a>
              </div>

              <a class="btn btn-ghost-dark btn-sm" href="#">
                <i class="bi-telephone me-2"></i> +92-051-2287298
              </a>
            </div>
          </div>
        </div>

        <div class="col mb-4 mb-lg-0">
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
                Sukkur:  Gulshan-e-Iqal Colony, Near Bijrani Chowk, Golimar Road, Sukkur
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

       
      </div>
    </div>
    </Layout>
  );

};

export default ContactUs;
