import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../action";
import { useParams } from "react-router-dom";

const Profile = () => {
  const disPatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const params = useParams()
  
  useEffect(() => {
    disPatch(fetchUser(params.id));
    console.log("จุ๊กกรู้ว");
  },[]);
  const generateCard = () => {
    return photos.map((el) => (
      <Card
        profile={el.user}
        image={el.urls.small}
        views={el.views}
        exif={el.exif ?? ""}
        likes={el.likes}
      />
    ));
  };
  const generateProfile = () => {
    if(photos.length===0)return
    return (
      <div>
        <div
          className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
          style={{
            backgroundImage: 'url("https://picsum.photos/id/314/1000/300")',
          }}
        >
          <div className="card glass lg:card-side text-neutral-content">
            <figure className="p-6 ">
              <img
                src={photos[0].user.profile_image.large}
                className="rounded-full shadow-lg"
              />
            </figure>
            <div className="max-w-md card-body">
              <h2 className="card-title">{photos[0].user.name}</h2>
              <p>location</p>
              
              {/* <div className="card-actions">
                <button className="btn glass rounded-full">Get Started</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="gap-4 columns-4 mt-16">{generateCard()}</div>
      </div>
    );
  };

  return <div className="mt-16">{generateProfile()}</div>;
};

export default Profile;
