import React, { useState, useEffect } from "react";

const TagFilter = ({ tags, items, setFilteredItems }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  React.useEffect(() => {
    if (selectedTags.length > 0) {
      const filteredItems = items.filter((item) =>
        selectedTags.every((tag) => item.tags.includes(tag))
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(items);
    }
  }, [selectedTags, items, setFilteredItems]);

  return (
    <div>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`py-2 px-4 m-1 border ${
            selectedTags.includes(tag)
              ? "bg-darkkorchid text-white"
              : "bg-neutral-400"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
