import React from 'react';

const Header = () => {
    return (
        <div className="mx-10 mt-3">
            <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <a className="normal-case text-2xl lg:text-3xl  font-semibold">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/src/images/pj-go-arPZr6tqsoA-unsplash.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;