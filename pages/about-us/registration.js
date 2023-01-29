import React from "react";
import { API_URL } from "@/config/index";
import Link from "next/link";

const Registration = ({ data }) => {
  return (
    <div class="container content-space-1 vh-100 p-4 mt-20">
      <div className="block-title-6">
        <h4 className="h5 border-primary">
          <span className="bg-primary text-white">Registration Details</span>
        </h4>
      </div>

      {/* <div class=" d-flex flex-col gap-4 w-100% flex-wrap justify-space-between"> */}
      <div className="d-flex flex-col justify-content-around flex-wrap text-white">
        {data.Reg.data.map((reg) => {
          console.log("reg", reg);
          return (
            <div
              class="card card-lg text-center mb-2  "
              style={{
                width: "395px",
                height: "265px",
                background: "rgb(15 80 138)",
                color: "white",
              }}
             key={reg.id}>
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi-person-circle fs-1 text-dark"></i>
                </div>

                <div class="mb-5 text-white">
                  <h4 className="text-white">Registration Document</h4>
                </div>

                <div class="mb-5">
                  <span class="d-block">{reg.attributes.title}</span>
                </div>

                <div class="d-grid mb-3 text-white">
                  <Link
                    class="btn btn-white text-white"
                    // href="mailto:support@site.com"
                    href={API_URL + reg.attributes.file?.data[0].attributes.url}
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    target="_blank"
                  >
                    <i class="bi-envelope-open me-2"></i>View Document
                  </Link>
                </div>

                {/* <a class="btn btn-ghost-dark btn-sm" href="#">
                    <i class="bi-telephone me-2"></i> (062) 8324923
                  </a> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  //fetching registraion-details
  const regres = await fetch(`${API_URL}/api/registrations?populate=*`);
  const Reg = await regres.json();
  //fetching Publications
  console.log("Reg", Reg);
  return {
    props: {
      data: {
        Reg,
      },
    },
  };
}
export default Registration;
