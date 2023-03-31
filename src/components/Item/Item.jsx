import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {
  // console.log(props.item);
  const { author_name, author_image, blog_cover_images, blog_title } = props.item;

  return (
    <div className="mx-5 lg:mx-auto">

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
              <p style={{ fontSize: "16px" }} className="font-bold">
                {author_name}
              </p>
              <p style={{ fontSize: "4px !important" }}>
                March 14 (4 days ago)
              </p>
            </div>
          </div>

          <div>
            <p>
              05 min read
              <FontAwesomeIcon className="ms-3" icon={faBookmark} />
            </p>
          </div>
        </div>

        {/* Title Part */}
        <div className="">
          <h2
            style={{ userSelect: "none", fontSize: "20px" }}
            className="card-title mt-4"
          >
            {blog_title}
          </h2>
        </div>

        <div className="mt-3">
          <p>#programming #beginners</p>
          <p className="mt-3 underline text-blue-600">Mark as read</p>
        </div>
      </div>



    </div>
  );
};

export default Item;


