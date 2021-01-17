import React from 'react';

export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project-title {id}</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            itaque amet illo eaque, harum laudantium earum. Aut iste nesciunt
            deserunt maiores provident ab mollitia a. Quibusdam, magnam amet.
            Accusantium, illo?
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by ANkit</div>
          <div>2nd Sep</div>
        </div>
      </div>
    </div>
  );
}
