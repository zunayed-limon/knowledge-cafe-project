import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";

const Item = (props) => {
  // console.log(props.item);
  const { author_name, author_image, blog_cover_images, blog_title , time} = props.item;
  const handleTime = props.handleTime;
  const bookmarksBtn = props.bookmarksBtn;
  // console.log(bookmarksBtn)
 
  





  return (
    <div className="mx-5 lg:mx-auto mb-14">

{/* left side */}
      <div  className="bg-base-100 mx-auto mt-10">
        <figure>
          <img
            draggable="false"
            style={{ width: "755px" }}
            className=" my-4 me-0 rounded-lg"
            src={blog_cover_images}
            alt="Shoes"
          />
        </figure>

        <div className="flex justify-between" style={{ alignItems: "center" }}>
          <div className="flex " style={{ alignItems: "center" }}>
            <img
              style={{ height: "50px", marginRight: "12px" }}
              src={author_image}
            />
            <div>
              <p style={{ fontSize: "17px" }} className="font-bold">
                {author_name}
              </p>
              <p style={{ fontSize: "4px !important" }}>
                March 14 (4 days ago)
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p className="me-2 text-xs">
              {time} min read 
            </p>

              
              <button className="hover:bg-zinc-400 hover:rounded p-0.5" onClick={()=>bookmarksBtn(props.item)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
              </button>
              <ToastContainer/>
            
          </div>
        </div>

        {/* Title Part */}
        <div className="">
          <h2
            style={{ userSelect: "none", fontSize: "20px" }}
            className="card-title mt-3"
          >
            {blog_title}
          </h2>
        </div>

        <div className="mt-1">
          <p>#programming #beginners</p>
          <button  onClick={()=>handleTime(props.item)} className="mt-1 underline text-blue-600  hover:bg-zinc-300 p-0.5 rounded" style={{backgroundColor: "slate"}}>Mark as read</button>
        </div>
        <hr className="mt-5 h-0.5"/>
      </div>



    </div>
  );
};

export default Item;


