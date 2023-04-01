import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Content = () => {

const [data, setData] = useState([]);
const [time, setTime] = useState(0);


useEffect(()=>{
    fetch('fakedata.json')
    .then(res => res.json())
    .then(data => setData(data))
}, []);

const handleTime = (item) =>{
  const newTime = item.time;
  const totalTime= time + newTime;
  setTime(totalTime);
  // console.log(time, newTime, totalTime);
};

const [blog, setBlog] = useState([]);

const bookmarksBtn = (item) =>{
  const newBlog = item.blog_title;
  // const totalBlog = blog + newBlog;

  if (blog.includes(newBlog)){
    toast.error('Already bookmarked!', {
      position: toast.POSITION.TOP_RIGHT, autoClose: 2000});
    }
  else{
    const updatedBlog = [...blog, newBlog];
    setBlog(updatedBlog);
  }
  }

 return (
        <div>

          <div className='lg:flex lg:mx-24 justify-between'>

            <div className='card-container '>
               {
            data.map(item => <Item
                key={item.id}
                item={item}
                handleTime={handleTime}
                bookmarksBtn = {bookmarksBtn}
                ></Item>
                )
              }
            </div>
            <div className="mt-14 lg:mt-10 mb-10" >
                
          <div className='border border-blue-600 rounded mx-auto w-72 h-11 flex justify-center items-center'>
            <p className='text-blue-600 font-semibold text-lg mx-auto'>Spent time on read: {time} min</p>
          </div>

          <div className='border rounded border-slate-300 mt-4 mx-auto w-72 h-full'>
            <p className="mt-3 font-bold text-lg mb-1 flex justify-center items-start">Bookmarked Blogs: {blog.length}</p><br/>
            <div className='flex flex-wrap px-2 justify-center items-start'>
               {blog.map((blog, index) => (
            <p key={index} className=' mb-4'>{index+1}. {blog}</p>
            ))}
            </div>
          </div>

            </div>




          </div>

          <div className='mt-24 lg:mx-24'>
<div className='text-center my-8 bg-zinc-200  shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3'>
<p className='font-semibold text-2xl'>Question: What is the difference between props and state?</p>
<p className='mt-3 text-lg'>Answer: Props are passed from parent to child components and are read-only, while state is an internal data store of a component that can be changed.</p>
</div>

<div className='text-center my-8 bg-zinc-200  shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3'>
<p className='font-semibold text-2xl'>Question: How does useState work?</p>
<p className='mt-3 text-lg'>Answer: The React useState Hook allows us to track state in a function component.State generally refers to data or properties that need to be tracking in an application.</p>
</div>

<div className='text-center my-8 bg-zinc-200 shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3'>
<p className='font-semibold text-2xl'>Question: Purpose of useEffect other than fetching data!</p>
<p className='mt-3 text-lg'>Answer: The useEffect in react js allows to perform side effects of components. The react useEffect examples of side effects include retrieving data, direct DOM updates, and timers.</p>
</div>

<div className='text-center my-8 bg-zinc-200 shadow-lg shadow-zinc-500/50 py-8 rounded mx-5 px-3'>
<p className='font-semibold text-2xl'>Question: How Does React work?</p>
<p className='mt-3 text-lg'>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.</p>
</div>
          </div>

          <p className='text-center my-10 text-xs'>© 2023 Knowledge Cafe | Made by <span className='text-blue-600'>Zunayed Limon</span> </p> 
        </div>
    );
};

export default Content;