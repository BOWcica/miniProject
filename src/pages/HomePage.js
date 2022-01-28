import React, { useEffect } from 'react';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPhoto } from '../action';

const Homepage = () => {
  const disPatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  useEffect(() => {
    disPatch(fetchRandomPhoto());
  }, []);

  const generateCard = () => {
    return photos.map((el) => <Card image={ el.urls.small} />);
    // return [...new Array(12)].map((el) => (
    //   <Card
    //     image={
    //       'https://images.unsplash.com/photo-1642880384673-e19470d28e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    //     }
    //   />
    // ));
  };

  return (
   
      <div className="gap-4 columns-4 mt-16">{generateCard()}</div>
  
  );
};

export default Homepage;
