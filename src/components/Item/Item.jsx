import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
  // console.log(props.item);
  const { author_name, author_image, blog_cover_images, blog_title , read_time} = props.item;

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
              alt=""
              srcset=""
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

          <div className="flex">
            <p className="me-3">
              {read_time} min read 
            </p>

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            
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
          <p className="mt-1 underline text-blue-600">Mark as read</p>
        </div>
      </div>



    </div>
  );
};

export default Item;


