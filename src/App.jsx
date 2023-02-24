import { Header } from "./components/Header";

import styles from "./App.module.css";

import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";

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
