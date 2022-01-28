import reduxType from '../config/reduxType';
import api from '../api';

export const fetchRandomPhoto = () => async (dispatch) => {
  
  let photo = localStorage.getItem("photos")
  
  if(!photo){
    const res = await api.get('/photos/random', {
      params: {
        count: 12,
        orientation: 'portrait',
      },
    });
    localStorage.setItem("photos", JSON.stringify(res.data))
    photo = localStorage.getItem("photos")
  }
  dispatch({ type: reduxType.FETCH_RANDOM_PHOTO, payload: JSON.parse(photo) });
};
