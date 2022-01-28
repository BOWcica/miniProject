import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchUser } from "../action";
import { useParams } from "react-router-dom";

const Profile = () => {
  const disPatch = useDispatch();
  const user = useSelector((state) => state.users);
  const params = useParams();

  useEffect(() => {
    disPatch(fetchUser(params.username));
    console.log(params.username);
  }, []);

  const generateProfile = () => {
    if (user.length === 0) return;
    return (
      <div>
        <div
          className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
          style={{
            backgroundImage: 'url("https://picsum.user/id/314/1000/300")',
            // backgroundImage: 'url({user[0].urls.full})',
          }}
        >
          <div className="card glass lg:card-side text-neutral-content">
            <figure className="p-6 ">
              <img
                src={user[0].user.profile_image.large}
                className="rounded-full shadow-lg"
              />
            </figure>
            <div className="max-w-md card-body">
              <h2 className="card-title">{user[0].user.name}</h2>
              <p>
                {user[0].user.twitter_username
                  ? "twitter : " + user[0].user.twitter_username
                  : ""}
              </p>
              <p>
                {user[0].user.instagram_username
                  ? "instagram : " + user[0].user.instagram_username
                  : ""}
              </p>
              <p>
                {user[0].user.total_user
                  ? "user : " + user[0].user.total_user
                  : ""}
              </p>
              <p>
                {user[0].user.total_likes
                  ? "total likes : " + user[0].user.total_likes
                  : ""}
              </p>
              <p>
                {user[0].user.location
                  ? "location : " + user[0].user.location
                  : ""}
              </p>
              <p>
                {user[0].user.portfolio_url
                  ? "portfolio : " + user[0].user.portfolio_url
                  : ""}
              </p>
              <p>
                {user[0].user.bio ? "description : " + user[0].user.bio : ""}
              </p>
              <div>
                <hr />
                <div className="grid grid-rows-1 grid-flow-col gap-2">
                  <img
                    className="w-20 m-1 rounded-3xl"
                    src={user[0].urls.small ? user[0].urls.small : ""}
                  />
                  <img
                    className="w-20 m-1 rounded-3xl"
                    src={user[1].urls.small ? user[1].urls.small : ""}
                  />
                  <img
                    className="w-20 m-1 rounded-3xl"
                    src={user[2].urls.small ? user[2].urls.small : ""}
                  />
                  <img
                    className="w-20 m-1 rounded-3xl"
                    src={user[3].urls.small ? user[3].urls.small : ""}
                  />
                </div>
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
