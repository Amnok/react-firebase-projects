import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/"> Logout </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lightrn-1">
          NN
        </NavLink>
      </li>
    </ul>
  );
}
