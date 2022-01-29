import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { likePhoto } from "../action"
import { useDispatch } from "react-redux";

const Card = ({ imageId, image, views, profile, exif, likes }) => {
  const disPatch = useDispatch();
  
 
  return (
    <div className="mb-4 break-inside-avoid-column card-post">
      <div className="card card-bordered">
        <Link to={`/album/${profile.username}`}>
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
          <p className="text-slate-600">{likes?"Likes :" + likes:"Likes : 0" }</p>

          <p className="text-slate-600">{views?"Views :" + views:"Views : 0"}</p>

          <p className="text-slate-600">{exif.name?"Camera :"+ exif.name:""}</p>
        </div>
        {/* <div  className="m-3 btn" onClick={()=>{
          disPatch(likePhoto(imageId));
          console.log(`Like : ${imageId}`);
        }}>Like</div> */}
      </div>
    </div>
  );
};

export default Card;
