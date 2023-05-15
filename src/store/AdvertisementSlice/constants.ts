export interface DropDownSelect {
    label: string;
    value: string;
    param: string;
}

export const ADVERTISEMENT_TYPE_VILA_TYPE: DropDownSelect = {
    label: "Villa",
    value: "Villa",
    param: 'type'
}

export const ADVERTISEMENT_TYPE_TOWNHOUSE_TYPE: DropDownSelect = {
    label: "Townhouse",
    value: "Townhouse",
    param: 'type'
}

export const SORT_BY_DATE_ADDED_FILTER: DropDownSelect = {
    label: "Date added",
    value: "Date added",
    param: 'date_added',
}

export const SORT_BY_HIGHEST_PRICE_FILTER: DropDownSelect = {
    label: "Highest price",
    value: "Highest price",
    param: 'price',
}

export const SORT_BY_LOWEST_PRICE_FILTER: DropDownSelect = {
    label: "Lowest price",
    value: "Lowest price",
    param: 'price',
}

export const ADVERTISEMENT_TYPE_APARTMENT_TYPE: DropDownSelect = {
    label: "Apartment",
    value: "Apartment",
    param: 'type'
}

export const SORT_BY_FILTER_VALUES: DropDownSelect[] = [
    SORT_BY_DATE_ADDED_FILTER,
    SORT_BY_HIGHEST_PRICE_FILTER,
    SORT_BY_LOWEST_PRICE_FILTER,
]

export const ADVERTISEMENT_TYPE_FILTER_VALUES: DropDownSelect[] = [
    ADVERTISEMENT_TYPE_APARTMENT_TYPE,
    ADVERTISEMENT_TYPE_VILA_TYPE,
    ADVERTISEMENT_TYPE_TOWNHOUSE_TYPE
]
