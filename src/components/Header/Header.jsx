import React from 'react';

const Header = () => {
    return (
        <div className=" lg:mx-40 mt-3 mx-10">
            <div className="navbar bg-base-100">
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
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;