import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getContacts } from "../../redux/middleware";
import { setFilteredListOfContacts } from "../../redux/slices/contacts.slice";

import { filter } from "../../utils/functions";

import { ContactCard } from "../../components/ContactCard";
import { NoItems } from "../../components/NoItems";
import { SearchBar } from "../../components/SearchBar";
import { Count } from "../../components/Count";
import { Loading } from "../../components/Loading";

import "./styles.css";
import Images from "../../assets/images/index";
import { Logo } from "../../components/Logo";

export const YellowPages = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    search: "",
  });
  const { loading } = useSelector((state) => state.genericReducer);
  const { listContacts, filteredListOfContacts } = useSelector(
    (state) => state.contactReducer
  );

  const handleFilter = () => {
    if (!!filters.search) {
      dispatch(
        setFilteredListOfContacts({ filteredListOfContacts: listContacts })
      );
    }
    const result = filter(listContacts, filters);

    dispatch(setFilteredListOfContacts({ filteredListOfContacts: result }));
  };

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
        <Logo />

        <SearchBar
          filters={filters}
          handleFilter={handleFilter}
          setFilters={setFilters}
        />
      </div>

      <div className="yellow-pages-body">
        {!!filteredListOfContacts && filteredListOfContacts.length > 0 ? (
          <>
            <Count
              count={filteredListOfContacts.length}
              total={listContacts.length}
            />
            {filteredListOfContacts.map((contact) => (
              <ContactCard {...contact} key={contact._id} />
            ))}
          </>
        ) : !!loading ? (
          <Loading />
        ) : (
          <NoItems />
        )}
      </div>

      <div className="yellow-pages-footer">Made by: Daniel Cintra</div>
    </div>
  );
};
