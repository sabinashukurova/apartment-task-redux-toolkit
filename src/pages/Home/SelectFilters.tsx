import { useDispatch, useSelector } from "react-redux";
import Select from "../../components/Select";
import { loadItems } from "../../store/AdvertisementSlice";
import { ADVERTISEMENT_TYPE_FILTER_VALUES, SORT_BY_FILTER_VALUES } from "../../store/AdvertisementSlice/constants";
import { ISelectFiltersProps } from "./models"
import { useEffect } from "react";
import { IAdvertisementItemsStore, IFilters } from "../../store/AdvertisementSlice/types";

function SelectFilters({
  onSortByChange,
  onTypeChange,
 }: ISelectFiltersProps) {

  const dispatch = useDispatch();
  const filters = useSelector<any, IFilters>(state => state.advertisementStore.filters)

  useEffect(() => {
    console.log(filters)
    dispatch(loadItems());
  }, [filters]);

  return (
    <>
      <Select
        onChange={onSortByChange}
        value={filters.sort_by}
        style={{ width: "auto" }}
        label={"Sort by"}
        options={SORT_BY_FILTER_VALUES}
      />
      <Select
        onChange={onTypeChange}
        value={filters.type}
        style={{ marginTop: "15px", width: "auto" }}
        label={"Type"}
        options={ADVERTISEMENT_TYPE_FILTER_VALUES}
      />
    </>
  );
}

export default SelectFilters;