import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Junkes00.png"
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

        <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="http:#">{line.content}</a>
            </p>
            );
          }
        })}
      </div>

            <p>
              <a href="#">#novoprojeto #nlw #rocketseat</a>
            </p>
          </p>
        </div>
      </header>
    </article>
  );
}
