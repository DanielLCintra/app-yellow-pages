import images from "../../assets/images";
import "./styles.css";

export const NoItems = () => {
  return (
    <div className="noResults-container">
      <img src={images.noResults} />
    </div>
  );
};
