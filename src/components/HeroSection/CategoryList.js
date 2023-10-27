import React from "react";
import { CategoryListData } from "../../Data";

const CategoryList = () => {
  return (
    <div className="watch-list">
      {CategoryListData.map((category, index) => (
        <button type="button" className="watch-btn" key={index}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
