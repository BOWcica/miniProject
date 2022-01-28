import React from 'react';

const Card = ({ image }) => {
  return (
    <div className="mb-4 break-inside-avoid-column">
      <div className="card card-bordered">
        <div className="avatar flex align-center items-stretch mb-8">
          <div className="rounded-full w-24 h-24 self-center">
            <img
              src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
              className="my-auto"
            />
          </div>
          <p className="text-center self-center">lorem 45</p>
        </div>

        <figure>
          <img src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Top image
            <div className="badge mx-2 badge-secondary">NEW</div>
          </h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
