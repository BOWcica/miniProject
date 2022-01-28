import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomPhoto } from "../action";


const Homepage = () => {
  const photos = useSelector((state) => state.photos);
  const disPatch = useDispatch();
  
  useEffect(() => {
    disPatch(fetchRandomPhoto());
  }, []);
  
  const generateCard = () => {
    return photos.map((el) => (
      <Card
        imageId={el.id}
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
    </div>
  );
};

export default Homepage;
