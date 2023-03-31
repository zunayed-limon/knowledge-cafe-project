import React from 'react';

const Header = () => {
    return (
        <div className="lg:mx-24 justify-between mt-5 mx-5">
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="normal-case text-2xl lg:text-4xl font-semibold">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
   
    <div className="dropdown dropdown-end">
     
        <div className="rounded-full">
          <img className='h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWNTiq9IDokwKAKD68rWcfvb_790X2MOxIA&usqp=CAU" />
        </div>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;