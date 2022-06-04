export const filter = (data, filters) => {
  const fPredicateMap = {
    search2: (term) => (v) =>
      !term ||
      !!(
        (v?.name &&
          (v?.name.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
            getAgeByDateOfBirth(v?.birthday)
              .toString()
              .toLowerCase()
              .indexOf(term.toLowerCase()) !== -1)) ||
        v?.address.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
        v?.phone_number
          .replace("(", "")
          .replace(")", "")
          .replace(" ", "")
          .toLowerCase()
          .indexOf(term.toLowerCase()) !== -1
      ),
    search: (term) => (v) =>
      !term ||
      `${v?.name},${v?.address},${getAgeByDateOfBirth(
        v?.birthday
      ).toString()},${v?.phone_number}`
        .split(",")
        .map((item) => {
          return term.split(" ").map((term) => {
            return (
              item
                .replace("(", "")
                .replace(")", "")
                .replace(" ", "")
                .toLowerCase()
                .indexOf(
                  term
                    .replace("(", "")
                    .replace(")", "")
                    .replace(" ", "")
                    .toLowerCase()
                ) !== -1
            );
          });
        })
        .map((item) => item.map((j) => j).join(","))
        .join(",")
        .includes("true"),
  };

  const getFilterPredicate = (fInput, fPredicateMap) =>
    Object.entries(fInput)
      .map(([filter_key, term]) => fPredicateMap[filter_key](term))
      .reduce(
        (p, f) => (item) => p(item) && f(item),
        (_) => true
      );

  return data.filter(getFilterPredicate(filters, fPredicateMap));
};

export const getAgeByDateOfBirth = (dateOfBirth) => {
  let birth_year = new Date(dateOfBirth).getFullYear();
  let birth_month = new Date(dateOfBirth).getMonth();
  let birth_day = new Date(dateOfBirth).getDate();

  const d = new Date();
  const current_year = d.getFullYear();
  const current_month = d.getMonth() + 1;
  const current_day = d.getDate();

  birth_year = +birth_year;
  birth_month = +birth_month;
  birth_day = +birth_day;
  let age = current_year - birth_year;

  if (
    current_month < birth_month ||
    (current_month == birth_month && current_day < birth_day)
  ) {
    age--;
  }

  return age < 0 ? 0 : age;
};
