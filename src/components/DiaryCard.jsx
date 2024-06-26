import { Link } from "react-router-dom";

export default function DiaryCard({ diary }) {
  return (
    <div className="flex flex-col bg-[#F6F5F5] drop-shadow-md" key="{diary.id}">
      <img src={diary.coverImage} alt="" className="w-full" />

      <div className="py-4 px-6 min-h-[152px]">
        <div className="flex justify-between mb-2 ">
          <span className="text-md font-bold text-[#40B2C9]">{diary.tag}</span>
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
            <span className="text-md text-[#273240]">{diary.date}</span>
          </div>
        </div>
        <p className="text-xl font-semibold mt-4 line-clamp-2">{diary.title}</p>
        <br />
      </div>
      <div className="flex justify-between">
        <p className="text-md pl-6 pb-6">0 Comments</p>
        <Link to={`/diary-detail/${diary.id}`}>
          <button className="bg-[#40B2C9] text-white font-bold px-4 py-2 rounded-tl-lg absolute bottom-0 right-0 hover:bg-cyan-700">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}

// onClick={() => navigate("diary-detail/" + diary.id)}
