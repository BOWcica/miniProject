import React from "react";
import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai";

// { image,views,profile,exif,like }
const Card = ({ image, views, profile, exif, likes }) => {
  return (
    <div className="mb-4 break-inside-avoid-column card-post">
      <div className="card card-bordered">
        <Link to={`/profile/${profile.username}`}>
          <div className="avatar flex align-center items-stretch mb-3">
            <div className="rounded-full w-10 h-10 self-center ml-5 mt-3">
              <img src={profile.profile_image.small} />
            </div>
            <p className="text-center self-center font-bold text-lg ml-6">
              {profile.username}
            </p>
          </div>
        </Link>

        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">
            Top image
            <div className="badge mx-2 badge-secondary">NEW</div>
          </h2> */}
          <p className="text-slate-600">Likes : {likes}</p>
          <p className="text-slate-600">Views : {views}</p>
          <p className="text-slate-600">Camera : {exif.name || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
