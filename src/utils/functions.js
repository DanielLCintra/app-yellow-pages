export const filter = (data, filters) => {
  const fPredicateMap = {
    name: (term) => (v) =>
      !term ||
      !!(v?.name && v?.name.toLowerCase().indexOf(term.toLowerCase()) !== -1),
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
