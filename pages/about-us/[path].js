import React, { useState } from "react";
import { API_URL } from "@/config/index";
import TeamModel from "../../components/TeamModal";
import Image from 'next/image'
const Profile = ({ data }) => {
  const [showProfile, setshowProfile] = useState({});
  console.log(showProfile);
  const [modalShow, setmodalShow] = useState(false);

  return (
    <div
      class="container content-space-1 p-4 mt-20"
      style={{ overflowX: "hidden" }}
    >
      <div class="w-lg-100 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
        <h2>Our leadership</h2>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {data.Profiles.data.map((profile) => {
          return (
            <div
              class="col mb-10 mt-10"
              style={{ marginTop: "30px", cursor: "pointer" }}
              onClick={() => {
                setshowProfile(profile);
                setmodalShow(true);
              }}
             key ={profile.attributes.id}>
             <div class="card" style={{width: "20rem;"}}>
                <Image
                  class="card-img-top"
                  width={286}
                  height={180}
                  src={
                  
                    profile.attributes.Profile[0].image.data[0].attributes.url
                  }
                  alt="Image Description"
                />
                 <div class="card-body">
                <h5 class="mb-1">{profile.attributes.name}</h5>
                <span class="d-block">
                  {profile.attributes.Profile[0].title}
                </span>
              </div>
              </div>
            </div>
          );
        })}

        {/* <div class="col mb-10">
          <div class="w-sm-65 text-center mx-auto">
            <img
              class="img-fluid rounded-3 mb-4"
              src="../assets/img/350x350/img5.jpg"
              alt="Image Description"
            />
            <h5 class="mb-1">Amil Evara</h5>
            <span class="d-block">UI/UX Designer</span>
          </div>
        </div> */}
        {/* 
    <div class="col mb-10">
      <div class="w-sm-65 text-center mx-auto">
        <img class="img-fluid rounded-3 mb-4" src="../assets/img/350x350/img9.jpg" alt="Image Description">
        <h5 class="mb-1">Ebele Egbuna</h5>
        <span class="d-block">Support Consultant</span>
      </div>
    </div>

    <div class="col mb-10">
      <div class="w-sm-65 text-center mx-auto">
        <img class="img-fluid rounded-3 mb-4" src="../assets/img/350x350/img7.jpg" alt="Image Description">
        <h5 class="mb-1">Maria Powers</h5>
        <span class="d-block">Director of sales</span>
      </div>
    </div>

    <div class="col mb-10">
      <div class="w-sm-65 text-center mx-auto">
        <img class="img-fluid rounded-3 mb-4" src="../assets/img/350x350/img8.jpg" alt="Image Description">
        <h5 class="mb-1">Delia Pawelke</h5>
        <span class="d-block">Front-end Developer</span>
      </div>
    </div>

    <div class="col mb-10">
      <div class="w-sm-65 text-center mx-auto">
        <img class="img-fluid rounded-3 mb-4" src="../assets/img/350x350/img6.jpg" alt="Image Description">
        <h5 class="mb-1">Tom Lowry</h5>
        <span class="d-block">UI/UX Designer</span>
      </div>
    </div>

    <div class="col mb-10">
      <div class="w-sm-65 text-center mx-auto">
        <img class="img-fluid rounded-3 mb-4" src="../assets/img/350x350/img1.jpg" alt="Image Description">
        <h5 class="mb-1">Louise Donadieu</h5>
        <span class="d-block">Support Consultant</span>
      </div>
    </div>

    <div class="col mb-10">
      <div class="w-sm-65 text-center mx-auto">
        <img class="img-fluid rounded-3 mb-4" src="../assets/img/350x350/img2.jpg" alt="Image Description">
        <h5 class="mb-1">Jeff Fisher</h5>
        <span class="d-block">Project Manager</span>
      </div>
    </div>

    <div class="col mb-10">
      <div class="w-sm-65 text-center mx-auto">
        <img class="img-fluid rounded-3 mb-4" src="../assets/img/350x350/img3.jpg" alt="Image Description">
        <h5 class="mb-1">Sophia Harrington</h5>
        <span class="d-block">Project Manager</span>
      </div>
    </div> */}
      </div>
      <TeamModel
        show={modalShow}
        onHide={() => setmodalShow(false)}
        data={showProfile}
      />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { path } = params;

  //fetching profiles
  const profileres = await fetch(
    `${API_URL}/api/profiles?filters[navType][$eq]=${path}&populate[Profile][populate]=image&sort=createdAt:asc`
  );
  const Profiles = await profileres.json();
  //fetching Publications
  console.log("Profiles", Profiles);
  return {
    props: {
      data: {
        Profiles,
      },
    },
  };
}
export default Profile;
