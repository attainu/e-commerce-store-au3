import React from "react";
import { FaTshirt } from "react-icons/fa";
import { GiTShirt } from "react-icons/gi";
import { createCategories } from "../logic/categoryLogic";
import { Link } from "react-router-dom";
function CategoriesDropdown(props) {
  const icon = props.gender === "men" ? <FaTshirt /> : <GiTShirt />;
  const categories = createCategories(props.categories, props.gender);

  return (
    <>
      {categories.map(category => {
        return (
          <div
            key={category.category_id + 22343}
            className="alert alert-dark rounded-0 border-0 dropdown-item m-0"
          >
            <span className="px-2">{icon}</span>
            <Link
              to={`/shop/${props.gender}/${category.category_id}`}
              className="text-muted m-0 p-0"
            >
              {category.category_name.toUpperCase()}
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default CategoriesDropdown;
