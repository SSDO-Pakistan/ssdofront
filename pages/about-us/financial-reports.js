import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { API_URL } from "@/config/index";
const FinancialReports = ({ data }) => {
  return (
    <main className="d-flex flex-row mt-3 p-3  mb-3">
      <div className="col-md-12 h-auto ">
        <div className="block-title-6 text-center">
          <h4 className="h5 border-primary">
            <span className="bg-primary text-white ">Financial Reports</span>
          </h4>
        </div>
        <div className="d-flex justify-space-between flex-row flex-wrap gap-3 h-auto mt-5 mb-3">
          {data &&
            data.Publications?.data.map((publication) => {
              return (
                <Link
                  href={`${publication.attributes.File?.data?.attributes.url
                    } `}
                  target="_blank"
                  key={publication.attributes.id} >
                  <div className="card">
                    <div className="card-body">
                      <Image
                        width={300}
                        height={350}
                        src={

                          publication.attributes.cover.data.attributes.url
                        }
                        alt="Report"
                      />
                    </div>
                    <div>
                      <h4 class="card-title text-center ">
                        {publication.attributes.title}
                      </h4>
                      <p class="card-text">
                        {publication.attributes.description}
                      </p>
                 
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  //fetching Financial Reports
  const publicationsres = await fetch(
    `${API_URL}/api/publications?filters[type][$eq]=Financial Reports&populate=*&sort=createdAt:desc`
  );
  const Publications = await publicationsres.json();
  console.log(Publications);
  return {
    props: {
      data: {
        Publications,
      },
      revalidate: 10, // In seconds
    },
  };
}
export default FinancialReports;
