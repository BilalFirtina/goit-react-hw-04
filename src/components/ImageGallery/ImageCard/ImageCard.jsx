import style from "./ImageCard.module.css";
const ImageCard = ({ image }) => {
  return (
    <div className={style.imageDiv}>
      <img
        className={style.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
