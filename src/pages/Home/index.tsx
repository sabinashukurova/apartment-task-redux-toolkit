import styles from "./Home.module.scss";
import { useCallback, useState } from "react";
import SelectFilters from "./SelectFilters";
import { HomePageFilters } from "./models";
import Search from "../../components/Search";
import Advertisement from "../../components/Advertisement";
import { Skeleton } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {
  setFilters,
  setItems,
  setLoading,
  setSearchValue,
  setPage,
  setSortBy,
  setType,
} from '../../store/AdvertisementSlice'
import AdvertisementStore, { DropDownSelect, IAdvertisementItemsStore, IFilters } from "../../store/AdvertisementSlice/types";

const HomePage = (() => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useDispatch();

  const {filters, items, isLoading} = useSelector<any, IAdvertisementItemsStore>(state => state.advertisementStore)

  const onFiltersChange = useCallback(
    (value: string | number, field: string) => {
      if (field !== HomePageFilters.PAGE) {
        dispatch(setFilters({
          ...filters,
          // page: defaultFilters.page,
          [field]: value,
        }));
        return;
      }
      dispatch(setPage(Number(value)));
    },
    [dispatch, filters]
  );

  const onSearchButtonClick = useCallback(() => {
    dispatch(setSearchValue(search));
    onFiltersChange(search, HomePageFilters.SEARCH);
  }, [dispatch, search, onFiltersChange]);

  const onSortByChange = useCallback(
    (value: DropDownSelect) => {
      dispatch(setSortBy(value?.value));
      console.log(value)
      onFiltersChange(value?.value, HomePageFilters.SORT_BY);
    },
    [dispatch, onFiltersChange]
  );

  const onTypeChange = useCallback(
    (value: DropDownSelect) => {
      dispatch(setType(value?.value));
      onFiltersChange(value?.value, HomePageFilters.TYPE);
    },
    [dispatch, onFiltersChange]
  );

  return (
    <div className={styles.width}>
      <div className={styles.container}>
        <div className={styles.filter}>
          <div className={styles.filterPanelInner}>
            <SelectFilters
              onSortByChange={onSortByChange}
              onTypeChange={onTypeChange}
              onReset={function (): void {
                throw new Error("Function not implemented.");
              } } 
            />
          </div>
        </div>
        <div className={styles.contentPanel}>
          <Search
            hideButton={false}
            value={search}
            onEnter={onSearchButtonClick}
            isLoading={isLoading}
            onClick={onSearchButtonClick}
            onChange={(val) => setSearch(val)} disabled={false} />
          <div className={styles.advertisement}>
            {!isLoading &&
              items?.map((value:any) => (
                <div className={styles.advertisementContainer} key={value.id}>
                  {isLoading ? (
                    <Skeleton avatar={{shape: "square"}} active paragraph={{ rows: 3 }} />
                  ) : (
                    <Advertisement item={value} />
                  )
                  }
                  {/* <Skeleton avatar={{shape: "square"}} active paragraph={{ rows: 3 }} /> */}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default HomePage;

