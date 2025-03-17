
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum SortPropertyEnum {
  DEFAULT = "default",
  TITLE_DESC = "title",
  TITLE_ASC = "-title",
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

export type Sort = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterState {
  searchValue: string;
  category: string[];
  series: string[];
  classification: string[];
  structures: string[];
  compartments: string[];
  colours: string[];
  gender: string[];
  chapter: string[];
  sort: Sort;
  visible: boolean,
}

const initialState: FilterState = {
  searchValue: "",
  category: [],
  series: [],
  classification: [],
  structures: [],
  compartments: [],
  colours: [],
  gender: [],
  chapter: [],
  sort: {
    name: "за замовчуванням",
    sortProperty: SortPropertyEnum.DEFAULT,
  },
  visible: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },

    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },

    toggleFilter(
      state,
      action: PayloadAction<{ filterType: keyof Omit<FilterState, "searchValue" | "sort">; value: string }>
    ) {
      const { filterType, value } = action.payload;
      const array = state[filterType] as string[];

      if (array.includes(value)) {
        state[filterType] = array.filter(item => item !== value) as never;
      } else {
        state[filterType] = [...array, value] as never;
      }
    },

    resetFilters(state) {
      return { ...initialState, visible: state.visible };
    },

    setVisible(state, action: PayloadAction<boolean>) {
      state.visible = action.payload;
    },
  },
});

export const { setSearchValue, setSort, toggleFilter, resetFilters, setVisible } = filterSlice.actions;

export default filterSlice.reducer;

export const selectValue = (state: RootState): string => state.filter.searchValue;
export const selectSort = (state: RootState): Sort => state.filter.sort;
