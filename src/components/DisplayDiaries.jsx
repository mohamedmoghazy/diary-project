import DiaryCard from "./DiaryCard";

export default function DisplayDiaries({ diaries }) {
  return (
    <div className="my-12 container m-auto">
      <h2 className="text-3xl text-[#40B2C9] font-bold text-center mb-12">
        Last diary entries
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {diaries.map((diary) => (
          <DiaryCard key={diary.id} diary={diary} />
        ))}
      </div>
    </div>
  );
}
