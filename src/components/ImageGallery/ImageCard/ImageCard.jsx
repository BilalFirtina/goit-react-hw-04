import style from "./ImageCard.module.css";
const ImageCard = ({ image, onClick }) => {
  return (
    <div className={style.imageDiv} onClick={() => onClick(image)}>
      <img
        className={style.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
