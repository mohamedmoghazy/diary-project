import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function DiaryDetail({ diaries }) {
  const { id } = useParams();
  const [diaryDetail, setDiaryDetail] = useState(0);

  useEffect(() => {
    setDiaryDetail(diaries[id]);
  }, []);

  return (
    <div className="my-14 container lg:px-[300px] m-auto px-8">
      <h2 className="text-3xl text-[#40B2C9] font-bold text-center mb-12">
        {diaryDetail.title}
      </h2>
      <img
        src={diaryDetail.coverImage}
        alt=""
        className="w-full object-cover h-[300px]"
      />
      <div className="flex justify-between my-6 ">
        <span className="text-xl font-bold text-[#40B2C9]">
          {diaryDetail.tag}
        </span>
        <div className="flex">
          <span className="pr-4 pt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar4-event"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
              <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
          </span>
          <span className="text-xl text-[#273240]">{diaryDetail.date}</span>
        </div>
      </div>

      <p className="my-10 text-justify">{diaryDetail.content}</p>
      <div className="flex justify-center">
        <Link to={`/`}>
          <button
            type="button"
            className="hover:scale-110 rounded-md font-semibold bg-darkkorchid text-white w-36 h-10 font-poppins"
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
