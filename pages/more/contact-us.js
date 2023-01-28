import React from "react";

const ContactUs = () => {
  return (
    <div class="container content-space-t-1 p-4 mt-20">
      <div class="text-center mb-7 ">
        <h1 className="display-2 fw-bold ">Get in Touch</h1>
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
  );

  {
    /* <div class="overflow-hidden">
  <div class="container content-space-2">
    <div class="row">
      <div class="col-lg-6 mb-10 mb-lg-0">
        <div class="pe-lg-10">
          <div class="mb-5">
            <h3>Our office</h3>
          </div>

          <div class="mb-5">
            <img class="img-fluid" src="../assets/img/580x480/img3.jpg" alt="Image Description"/>
          </div>

          <address>
            <span class="d-block fs-3 fw-bold text-dark mb-2">UK:</span>
            300 Bath Street<br>
            Tay House<br>
            Glasgow G2 4JR<br>
            United Kingdom
          </address>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="position-relative">
          <div class="card card-lg">
            <div class="card-body">
              <h4 class="mb-4">Fill in the form</h4>

              <form>
                <div class="row">
                  <div class="col-sm-6 mb-4 mb-sm-0">
                    <div class="mb-4">
                      <label class="form-label" for="contactsFormFirstName">First name</label>
                      <input type="text" class="form-control" name="contactsFormNameFirstName" id="contactsFormFirstName" placeholder="Jacob" aria-label="Jacob"/>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-4">
                      <label class="form-label" for="contactsFormLasttName">Last name</label>
                      <input type="text" class="form-control" name="contactsFormNameLastName" id="contactsFormLasttName" placeholder="Williams" aria-label="Williams"/>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-sm-6 mb-4 mb-sm-0">
                    <div class="mb-4">
                      <label class="form-label" for="contactsFormCompany">Company</label>
                      <input type="text" class="form-control" name="contactsFormNameCompany" id="contactsFormCompany" placeholder="Htmlstream" aria-label="Htmlstream"/>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="mb-4">
                      <label class="form-label" for="contactsFormCompanyWebsite">Company website</label>
                      <input type="text" class="form-control" name="contactsFormNameCompanyWebsite" id="contactsFormCompanyWebsite" placeholder="htmlstream.com" aria-label="htmlstream.com"/>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <label class="form-label" for="contactsFormWorkEmail">Work email</label>
                  <input type="text" class="form-control" name="contactsFormNameWorkEmail" id="contactsFormWorkEmail" placeholder="email@site.com" aria-label="email@site.com"/>
                </div>

                <div class="mb-4">
                  <label class="form-label" for="contactsFormDetails">Details</label>
                  <textarea class="form-control" name="contactsFormNameDetails" id="contactsFormDetails" placeholder="Tell us about your payment sales" aria-label="Tell us about your payment sales" rows="4"></textarea>
                </div>

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg">Send inquiry</button>
                </div>
              </form>
            </div>
          </div>

          <figure class="position-absolute bottom-0 end-0 zi-n1 d-none d-md-block mb-n10" style="width: 15rem; margin-right: -8rem;"/>
            <img class="img-fluid" src="../assets/svg/illustrations/grid-grey.svg" alt="Image Description">
          </figure>

          <figure class="position-absolute bottom-0 end-0 d-none d-md-block me-n5 mb-n5" style="width: 10rem;"
          style={{wdith :"10rem"}}
          />
            <img class="img-fluid" src="../assets/svg/illustrations/plane.svg" alt="Image Description">
          </figure>
        </div>
      </div>
    </div>
  </div>
</div> */
  }
};

export default ContactUs;
