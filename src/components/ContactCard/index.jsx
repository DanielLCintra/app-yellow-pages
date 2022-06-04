import "./styles.css";
import Images from "../../assets/images";

export const ContactCard = ({
  name,
  birthday,
  phone_number,
  address,
  picture,
}) => {
  const selectedPicture = !!picture ? picture.split(".")[0] : "";
  const Image = Images[selectedPicture] || Images.defaultImage;

  return (
    <div className="container">
      <img className="user-avatar" src={Image} />

      <div className="sub-container">
        <div className="label">{`${name}, ${birthday}, ${phone_number}`}</div>

        <p className="description">{address}</p>
      </div>
    </div>
  );
};
