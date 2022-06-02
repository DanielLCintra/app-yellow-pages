import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactCard } from "../../components/ContactCard";
import { getContacts } from "../../redux/middleware";

export const YellowPages = () => {
  const dispatch = useDispatch();

  const listContacts = useSelector(
    (state) => state.contactReducer.listContacts
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      {listContacts.map((contact) => (
        <ContactCard {...contact} key={contact._id} />
      ))}
    </div>
  );
};
