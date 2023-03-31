import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Content = () => {

const [data, setData] = useState([]);

useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setData(data))
}, []);



    return (
        <div>

          <div className='lg:flex lg:mx-24 justify-between'>

            <div className='card-container'>
               {
            data.map(item => <Item
                key={item.id}
                item={item}
            ></Item>
                )
              }
            </div>

            <div className="mt-14 lg:mt-10 mb-10" >

          <div className='border border-blue-600 rounded mx-auto w-72 h-11 flex justify-center items-center'>
            <p className='text-blue-600 font-semibold text-lg mx-auto'>Spent time on read: {} </p>
          </div>

          <div  className='border rounded  border-slate-300 mt-4 mx-auto w-72 h-full flex justify-center items-start'>
            <p className="mt-3 font-bold text-lg mb-3">Bookmarked Blogs: {} </p>
          </div>

            </div>

          </div>

          <p className='text-center my-10 text-xs'>© 2023 Knowledge Cafe | Made by <span className='text-blue-600'>Zunayed Limon</span> </p> 
        </div>
    );
};

export default Content;