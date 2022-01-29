import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchUser } from "../action";
import { useParams } from "react-router-dom";

const Profile = () => {
  const disPatch = useDispatch();
  const  user  = useSelector((state) => state.users);
  const params = useParams();

  useEffect(() => {
    disPatch(fetchUser(params.username));
    console.log(`ข้อมูลในState : ${user}`)
    
  }, []);

  const generateProfile = () => {
    if (user.length === 0) return;
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
                src={user.profile_image.medium}
                className="rounded-full shadow-lg"
              />
            </figure>
             <div className="max-w-md card-body">
              <h2 className="card-title">{user.username}</h2>
              <p>
                {user.twitter_username
                  ? "twitter : " + user.twitter_username
                  : ""}
              </p>
              <p>
                {user.instagram_username
                  ? "instagram : " + user.instagram_username
                  : ""}
              </p>
              <p>
                {user.total_photos
                  ? "total photo : " + user.total_photos
                  : ""}
              </p>
              <p>
                {user.total_likes
                  ? "total likes : " + user.total_likes
                  : ""}
              </p>
              <p>
                {user.location
                  ? "location : " + user.location
                  : ""}
              </p>
              <p>
                {user.portfolio_url
                  ? "portfolio : " + user.portfolio_url
                  : ""}
              </p>
              <p>
                {user.bio ? "description : " + user.bio : ""}
              </p>
              <div>
                <hr />
                {/* <div className="grid grid-rows-1 grid-flow-col gap-2">
                  <img
                    className="w-20 m-1 rounded-3xl"
                    src={user.photos[0]. ? user[0].urls.small : ""}
                  />
                  
                </div> */}
              </div>
            </div> 
          </div>
        </div>
      </div>
    );
  };

  return <div className="mt-16">{generateProfile()}</div>;
  
};

export default Profile;
