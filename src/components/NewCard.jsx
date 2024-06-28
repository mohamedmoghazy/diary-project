import Dropdown from "./Dropdown";
import tags from "../Data/tags";
import { useState } from "react";

function NewCard({ HideModal, onAddNewCard }) {
  let [title, setTile] = useState("");
  let [tag, setTag] = useState("");
  let [coverImage, setImage] = useState("");
  let [content, setContent] = useState("");

  return (
    <>
      <form className="grid w-full space-y-4 px-4 pt-4" onSubmit={SubmitForm}>
        <p>
          <input
            onChange={onTitleValueChanged}
            className="font-poppins block w-full h-10 bg-gray-200 p-[10px] rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold
                    placeholder-gray-400 placeholder:text-2xl placeholder:font-poppins"
            type="text"
            id="title"
            required
            placeholder="TITLE..."
          />
        </p>
        <div className="flex w-full space-x-4 h-12">
          {/* <Dropdown
            onChange={onTagValueChanged}
            className=""
            options={tags}
          ></Dropdown> */}
          <div className="flex w-1/2 items-center">
            <input
              onChange={onTagValueChanged}
              className="block w-full h-10 bg-gray-200 p-[10px] rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold
                    placeholder-gray-400 placeholder:text-md placeholder:font-poppins"
              type="text"
              id="tag"
              required
              placeholder="Enter tag"
            />
          </div>
          <div className="flex w-1/2 items-center pl-4">
            <input
              onChange={onImgValueChanged}
              className="block w-full h-10 bg-gray-200 p-[10px] rounded-md border-opacity-80 border-[1px]
                    border-gray-300 font-semibold
                    placeholder-gray-400 placeholder:text-md placeholder:font-poppins"
              type="text"
              id="coverImage"
              required
              placeholder="Enter your image url"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <small className="text-gray-400">
            <p>For example: https://picsum.photos/id/20/660/400</p>
          </small>
        </div>
        <textarea
          onChange={onContentValueChanged}
          id="body"
          className="w-full h-96 font-poppins block bg-gray-200 p-[12px] 
                    rounded-md border-opacity-80 border-[1px] border-gray-300
                    placeholder-gray-400 placeholder:text-sm placeholder:font-poppins"
          required
          rows={3}
          placeholder="Share your content..."
        ></textarea>

        <div className="flex space-x-4 pt-4 justify-end">
          <button
            type="button"
            onClick={HideModal}
            className="w-32 h-10 hover:scale-110 rounded-md font-semibold bg-gray-400 text-white font-poppins"
          >
            Cancel
          </button>
          <button className="w-32 hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white font-poppins">
            Publish
          </button>
        </div>
      </form>
    </>
  );

  function onTitleValueChanged(event) {
    title = event.target.value;
  }

  function onTagValueChanged(event) {
    tag = event.target.value;
  }

  function onImgValueChanged(event) {
    coverImage = event.target.value;
  }

  function onContentValueChanged(event) {
    content = event.target.value;
  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function SubmitForm(event) {
    event.preventDefault();

    const data = {
      id: 0,
      title: title,
      tag: tag,
      //   coverImage: "https://picsum.photos/660/400",
      coverImage: coverImage,
      date: formatDate(new Date()),
      content: content,
    };

    onAddNewCard(data);

    HideModal();
  }
}

export default NewCard;
