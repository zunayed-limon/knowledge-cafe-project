import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Content = () => {

const [data, setData] = useState([]);

// const [time, setTime] = useState([]);

useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setData(data))
}, []);

const handleTime = (item) =>{

  // const time = item.read_time;
  // const totalTime = time + newTime;
  // console.log(time);
 
  // setTime(totalTime);

};


    return (
        <div>

          <div className='lg:flex lg:mx-24 justify-between'>

            <div className='card-container'>
               {
            data.map(item => <Item
                key={item.id}
                item={item}
                handleTime={handleTime}
                
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
{/* question */}
          <div className='mt-24 lg:mx-24'>
<div className='text-center my-8 bg-slate-300 py-8 rounded mx-5'>
<p className='font-semibold text-2xl'>Question: What is the difference between props and state?</p>
<p className='mt-3 text-lg'>Answer: Props are passed from parent to child components and are read-only, while state is an internal data store of a component that can be changed.</p>
</div>

<div className='text-center my-8 bg-slate-300 py-8 rounded mx-5'>
<p className='font-semibold text-2xl'>Question: How does useState work?</p>
<p className='mt-3 text-lg'>Answer: The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.</p>
</div>

<div className='text-center my-8 bg-slate-300 py-8 rounded mx-5'>
<p className='font-semibold text-2xl'>Question: Purpose of useEffect other than fetching data!</p>
<p className='mt-3 text-lg'>Answer: The useEffect in react js allows to perform side effects of components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers.</p>
</div>

<div className='text-center my-8 bg-slate-300 py-8 rounded mx-5'>
<p className='font-semibold text-2xl'>Question: How Does React work?</p>
<p className='mt-3 text-lg'>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.</p>
</div>
          </div>
{/* footer  */}
          <p className='text-center my-10 text-xs'>© 2023 Knowledge Cafe | Made by <span className='text-blue-600'>Zunayed Limon</span> </p> 
        </div>
    );
};

export default Content;