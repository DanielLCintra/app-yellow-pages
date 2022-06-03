import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactCard } from "../../components/ContactCard";
import { getContacts } from "../../redux/middleware";
import "./styles.css";
import Images from "../../assets/images/index";
import { filter } from "../../utils/functions";
import { NoItems } from "../../components/NoItems";
import { setFilteredListOfContacts } from "../../redux/slices/contacts.slice";

export const YellowPages = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    name: "",
  });

  const { loading } = useSelector((state) => state.genericReducer);

  const { listContacts, filteredListOfContacts } = useSelector(
    (state) => state.contactReducer
  );

  async function handleFilter() {
    if (!!filters.name) {
      dispatch(
        setFilteredListOfContacts({ filteredListOfContacts: listContacts })
      );
    }
    const result = filter(listContacts, filters);
    dispatch(setFilteredListOfContacts({ filteredListOfContacts: result }));
  }

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      setFilteredListOfContacts({ filteredListOfContacts: listContacts })
    );
  }, [listContacts]);

  return (
    <div className="yellow-pages-container">
      <div className="yellow-pages-header">
        <div className="logo">
          <img src={Images.logo} />
        </div>

        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Type something to search..."
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleFilter();
              }
            }}
          />
          <button className="search-button" onClick={() => handleFilter()}>
            Search
          </button>
        </div>
      </div>
      <div className="yellow-pages-body">
        {!!filteredListOfContacts && filteredListOfContacts.length > 0 ? (
          filteredListOfContacts.map((contact) => (
            <ContactCard {...contact} key={contact._id} />
          ))
        ) : !!loading ? (
          <div>Loading...</div>
        ) : (
          <NoItems />
        )}
      </div>
      <div className="yellow-pages-footer">Made by: Daniel Cintra</div>
    </div>
  );
};
