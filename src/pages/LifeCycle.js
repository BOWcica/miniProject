import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Lifecycle = () => {
  const [life, setLife] = useState('Bad life');
  const [mood, setMood] = useState('Feel good');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('my life');
    // console.log(params.id);
    return () => {
      console.log('It will gone');
    };
  }, []);

  return (
    <div>
      life: {life} =: {mood}
      <div>
        <button onClick={() => setMood('Feel Bad')} className="btn btn-primary">
          set mood
        </button>
        <button
          onClick={() => {
            setLife('Good life');
            navigate('/lifecycle/' + Date.now());
          }}
          className="btn btn-secondary"
        >
          set life
        </button>
      </div>
    </div>
  );
};

export default Lifecycle;
