import React from "react";
import { FaTshirt } from "react-icons/fa";
import { GiTShirt } from "react-icons/gi";
import { createCategories } from "./logic/categoryLogic";
import { Link } from "react-router-dom";
function CategoriesDropdown(props) {
  const icon = props.gender === "men" ? <FaTshirt /> : <GiTShirt />;
  const categories = createCategories(props.categories, props.gender);

  return (
    <div>
      {categories.map(category => {
        return (
          <li className="dropdown-item my-3">
            <span className="p-2 rounded border border-dark">{icon}</span>
            <Link
              to={`/shop/${props.gender}/${category.category_id}`}
              className=" p-2 text-muted"
            >
              {category.category_name.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default CategoriesDropdown;
