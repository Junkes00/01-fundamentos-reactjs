import { Header } from "./components/Header";

import styles from "./App.module.css";

import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Junkes00.png",
      name: "Nicolas Junkes",
      role: "Software Engineer @Havan Labs",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-02-25 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-02-23 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Nicolas Junkes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque architecto doloribus iste dolorum quaerat deleniti nihil quidem corporis, soluta placeat et consequuntur illo culpa ipsa repudiandae veritatis nisi dolore in!"
          />

          <Post author="Gabriel Buzzi" content="Um novo post muito legal!" />
        </main>
      </div>
    </>
  );
}
