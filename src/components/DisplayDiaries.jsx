import DiaryCard from "./DiaryCard";
import LastDiary from "./LastDiary";

export default function DisplayDiaries({ diaries }) {
  return (
    <>
      <LastDiary diaries={diaries[0]} />
      <div className="my-12 container m-auto px-8 lg:px-0" key="{diaries.id}">
        <h2 className="text-3xl text-[#40B2C9] font-bold text-center mb-12">
          Last diary entries
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {diaries
            .map((diary) => <DiaryCard key={diary.id} diary={diary} />)
            .slice(1)}
        </div>
      </div>
    </>
  );
}
