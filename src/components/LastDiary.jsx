import { Link } from "react-router-dom";
export default function LastDiary({ diaries }) {
  // console.log(diaries);
  return (
    <div className="my-12 container m-auto px-8 lg:px-0">
      <div className=" md:flex bg-[#F6F5F5] drop-shadow-md" key="{diaries.id}">
        <div className="flex-none w-full md:w-1/3 lg:w-1/2">
          <img
            src={diaries.coverImage}
            alt=""
            className="inset-0 w-full object-cover h-[300px]"
          />
        </div>
        <div className="flex-col p-12">
          <p className="font-semibold bg-darkkorchid text-white text-xl px-8 py-2 rounded-bl-lg absolute top-0 right-0">
            Last diary
          </p>

          <h2 className="font-medium text-2xl lg:text-3xl md:mt-4 lg:mt-8">
            {diaries.title}
          </h2>

          <div className="flex justify-between my-6 ">
            <span className="text-md font-bold text-[#40B2C9]">
              {diaries.tag}
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
              <span className="text-md text-[#273240]">{diaries.date}</span>
            </div>
          </div>

          <p className="text-md">0 Comments</p>
          <Link to={`/diary-detail/0`}>
            <button className="bg-[#40B2C9] text-white font-bold px-8 py-2 rounded-tl-lg absolute bottom-0 right-0 hover:bg-cyan-700">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
