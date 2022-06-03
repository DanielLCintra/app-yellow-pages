import images from "../../assets/images";
import "./styles.css";

export const NoItems = () => {
  return (
    <div className="noresults-container">
      <img src={images.noresults} />
    </div>
  );
};
