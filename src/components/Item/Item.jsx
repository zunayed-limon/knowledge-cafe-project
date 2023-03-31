import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
  console.log(props.item);
  const { author_name, author_image, blog_cover_images, blog_title } =
    props.item;
  return (

    <div className="flex">


      <div className="bg-base-100 w-4/5 mt-10 lg:ms-40 mx-auto">
        <figure>
          <img
            draggable="false"
            className=" my-4 rounded-lg"
            src={blog_cover_images}
            alt="Shoes"
          />
        </figure>

    <div className="flex justify-between">
        <div className="flex mb-4" style={{alignItems: "center"}}>
          <img style={{height: "50px", marginRight: "12px"}} src={author_image} alt="" srcset="" />
          <div>
            <p style={{fontSize: "16px"}} className="font-bold">{author_name}</p>
            <p style={{fontSize: "4px !important"}}>March 14 (4 days ago)</p>
          </div>
        </div>

        <div>
          <p>05 min read 
          <FontAwesomeIcon icon={faBookmark}/>
          </p>
        </div>
    </div>


        <div className="">
          <h2 style={{userSelect:"none", fontSize:"20px"}} className="card-title">{blog_title}</h2>
        </div>
      </div>




      <div className="lg:me-40 border border-neutral-400">       
        <div className="">Limon is a good boy.</div>
        <div></div>
      </div>


    </div>
  );
};

export default Item;
