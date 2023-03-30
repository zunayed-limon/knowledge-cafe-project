import React from "react";

const Item = (props) => {
  console.log(props.item);
  const { author_name, author_image, blog_cover_images, blog_title } =
    props.item;
  return (

    <div className="">


      <div className="bg-base-100 w-4/5 mt-10 lg:ms-40 mx-auto">
        <figure>
          <img
            draggable="false"
            className=" my-4 rounded-lg"
            src={blog_cover_images}
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="card-title">{blog_title}</h2>
        </div>
      </div>

      <div className="lg:me-40">       
        <div className="border border-neutral-500">limon </div>
        <div></div>
      </div>


    </div>
  );
};

export default Item;
