import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomPhoto } from "../action";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const cardsContainer = document.querySelector(".card-post");
  const disPatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const navigate = useNavigate();
  useEffect(() => {
    disPatch(fetchRandomPhoto());
  }, []);
  
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

  return (
    <div className="gap-4 sm:columns-1 md:columns-2 xl:columns-4 mt-16">
      {generateCard()}
      {/* <button><Link to="/profile">Profile</Link></button> */}
    </div>
  );
};

export default Homepage;
