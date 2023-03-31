import React from 'react';

const Header = () => {
    return (
        <div className="lg:mx-40 mt-5 mx-5">
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="normal-case text-2xl lg:text-3xl font-semibold">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
     
        <div className="rounded-full">
          <img className='h-12' src="/src/images/pj-go-arPZr6tqsoA-unsplash-modified.png" />
        </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;