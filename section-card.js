import Link from "next/link";
import Card from "./card";
import Link from "next/link";
import clsx from "classnames";
import styles from "./section-cards.module.css";

const SectionCards = (props) => {
  const { title, videos = [], size } = props;
  console.log({ videos });
  const { title, videos = [], size, shouldWrap = false, shouldScale } = props;
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
      <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
        {videos.map((video, idx) => {
          console.log({ video });
          return (
            <Link key={idx} href={`/video/${video.id}`}>
            <Link href={`/video/${video.id}`} key={video.id}>
              <a>
                <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />
                <Card
                  id={idx}
                  imgUrl={video.imgUrl}
                  size={size}
                  shouldScale={shouldScale}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default SectionCards;
