import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import DisplayDiaries from "./components/DisplayDiaries";

function App() {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth() + 1,
    date.getDate(),
    date.getFullYear(),
  ];
  console.log(month, day, year);

  const diaries = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      tag: "My day",
      coverImage: "https://picsum.photos/id/20/360/220",
      date: "June 24",
      content:
        "Augue ut lectus arcu bibendum at varius vel pharetra. Dis parturient montes nascetur ridiculus mus mauris. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Donec enim diam vulputate ut pharetra sit amet aliquam. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Placerat duis ultricies lacus sed turpis tincidunt id. Id cursus metus aliquam eleifend mi in nulla posuere. Purus sit amet luctus venenatis lectus magna fringilla urna. Suscipit tellus mauris a diam maecenas. Scelerisque viverra mauris in aliquam sem. Sed enim ut sem viverra aliquet. Maecenas sed enim ut sem viverra aliquet. Sapien eget mi proin sed. Ac auctor augue mauris augue neque gravida in fermentum.",
    },
    {
      id: 2,
      title: "Sem et tortor consequat id porta nibh",
      tag: "My day",
      coverImage: "https://picsum.photos/id/63/360/220",
      date: "June 15",
      content:
        "Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Arcu non sodales neque sodales ut etiam. Felis donec et odio pellentesque. Mauris cursus mattis molestie a iaculis at erat. Tellus elementum sagittis vitae et leo. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Purus semper eget duis at tellus. Condimentum mattis pellentesque id nibh. Quam adipiscing vitae proin sagittis nisl. A erat nam at lectus urna duis. Accumsan in nisl nisi scelerisque eu. Bibendum est ultricies integer quis. Mattis aliquam faucibus purus in massa tempor nec feugiat. Nisi quis eleifend quam adipiscing vitae. Scelerisque in dictum non consectetur.",
    },
    {
      id: 3,
      title: "Dignissim suspendisse in est ante",
      tag: "Feelings",
      coverImage: "https://picsum.photos/id/65/360/220",
      date: "May 27",
      content:
        "Augue ut lectus arcu bibendum at varius vel pharetra. Dis parturient montes nascetur ridiculus mus mauris. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Donec enim diam vulputate ut pharetra sit amet aliquam. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Placerat duis ultricies lacus sed turpis tincidunt id. Id cursus metus aliquam eleifend mi in nulla posuere. Purus sit amet luctus venenatis lectus magna fringilla urna. Suscipit tellus mauris a diam maecenas. Scelerisque viverra mauris in aliquam sem. Sed enim ut sem viverra aliquet. Maecenas sed enim ut sem viverra aliquet. Sapien eget mi proin sed. Ac auctor augue mauris augue neque gravida in fermentum.",
    },
    {
      id: 4,
      title: "Augue ut lectus arcu bibendum at varius vel pharetra",
      tag: "Travel",
      coverImage: "https://picsum.photos/id/49/360/220",
      date: "May 16",
      content:
        "Vitae justo eget magna fermentum. Sed enim ut sem viverra aliquet eget sit amet tellus. Velit aliquet sagittis id consectetur purus ut faucibus. Enim ut sem viverra aliquet eget sit. Ut diam quam nulla porttitor. Duis at tellus at urna. Cras sed felis eget velit. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Ultrices in iaculis nunc sed augue lacus viverra vitae.",
    },
    {
      id: 5,
      title: "Porta nibh venenatis cras sed felis eget",
      tag: "My day",
      coverImage: "https://picsum.photos/id/30/360/220",
      date: "April 30",
      content:
        "Lectus arcu bibendum at varius vel pharetra. Suspendisse in est ante in nibh mauris cursus mattis molestie. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Praesent elementum facilisis leo vel fringilla est. Enim ut sem viverra aliquet eget sit amet tellus cras. Sit amet venenatis urna cursus eget. Nunc consequat interdum varius sit. Id porta nibh venenatis cras sed felis eget velit aliquet. Platea dictumst quisque sagittis purus. Sem nulla pharetra diam sit amet nisl. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.",
    },
    {
      id: 6,
      title: "Leo a diam sollicitudin tempor id eu nisl nunc",
      tag: "Cooking",
      coverImage: "https://picsum.photos/id/25/360/220",
      date: "April 29",
      content:
        "Augue mauris augue neque gravida in fermentum et. Auctor augue mauris augue neque gravida in. Eu mi bibendum neque egestas congue quisque egestas. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Semper viverra nam libero justo. Pellentesque dignissim enim sit amet venenatis urna cursus. Ipsum a arcu cursus vitae congue mauris rhoncus. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Nunc sed velit dignissim sodales.",
    },
  ];
  console.log(diaries);

  return (
    <>
      <div>
        <Navbar />
        <Search />
        <DisplayDiaries diaries={diaries} />
      </div>
    </>
  );
}

export default App;
