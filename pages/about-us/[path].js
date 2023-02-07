import React, { useState } from "react";
import { API_URL } from "@/config/index";
import TeamModel from "../../components/TeamModal";
import Image from 'next/image'
import {useRouter} from 'next/router';

const Profile = ({ data }) => {
  const router = useRouter()
 if (router.query.path == 'team')
 {
    var heading = 'Our Team'
 }
 else if(router.query.path=='directors'){
   var heading = 'Board of Directors'
 }
  const [showProfile, setshowProfile] = useState({});
  console.log(showProfile);
  const [modalShow, setmodalShow] = useState(false);

  return (
    <div
      className="container content-space-1 p-4 mt-20"
      style={{ overflowX: "hidden" }}
    >
       <div className="block-title-6 text-center ">
       <h4 className="h5 border-primary">
          <span className="bg-primary text-white fw-bolder ">{heading}</span>
        </h4>
        </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {data.Profiles.data.map((profile) => {
          return (
            <div
              className="col mb-10 mt-10"
              style={{ marginTop: "30px", cursor: "pointer" }}
              onClick={() => {
                setshowProfile(profile);
                setmodalShow(true);
              }}
             key ={profile.attributes.id}>
             <div className="card shadow-sm p-3 mb-5 bg-white rounded" style={{width:"16rem"}}>
                <Image     
                  width={225}
                  height={225}
                  src={   
                    profile.attributes.Profile[0].image.data[0].attributes.url
                  }
                  alt="Image Description"
                />
                 <div className="card-body">
                <h5 className="mb-1 text-center fw-bold">{profile.attributes.name}</h5>
                <span className="d-block text-center" style={{color:"grey"}}>
                  {profile.attributes.Profile[0].title}
                </span>
              </div>
              </div>
            </div>
          );
        })}
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
