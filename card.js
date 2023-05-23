import Image from "next/image";
import styles from "./card.module.css";

const Card = (props) => {
  const { imgUrl, size } = props;
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };
  return (
    <div>
    <div className={styles.container}>
      Card
      <Image src={imgUrl} alt="image" width="300px" height="300px" />
      <div className={classMap[size]}>
        <Image
          src={imgUrl}
          alt="image"
          layout="fill"
          className={styles.cardImg}
        />
      </div>
    </div>
  );
};
export default Card;