import React from "react";

const Item = (props) => {
  console.log(props.item);
  const { author_name, author_image, blog_cover_images, blog_title } =
    props.item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={blog_cover_images} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog_title}</h2>
        </div>
      </div>

      <div>
        
      </div>
    </div>
    
  );
};

export default Item;
