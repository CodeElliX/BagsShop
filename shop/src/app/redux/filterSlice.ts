// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from './store';

// export enum SortPropertyEnum {
//   RATING_DESC = 'rating',
//   RATING_ASC = '-rating',
//   TITLE_DESC = 'title',
//   TITLE_ASC = '-title',
//   PRICE_DESC = 'price',
//   PRICE_ASC = '-price'
// }

// export type Sort = {
//   name: string,
//   sortProperty: SortPropertyEnum
// }

// const initialState = {
//   searchValue: '',
//   category: [],
//   series: [],
//   classification: [],
//   structures: [],
//   compartments: [],
//   colours: [],
//   gender: [],
//   chapter: [],
//   sort: {
//     name: 'популярности',
//     sortProperty: SortPropertyEnum.RATING_DESC
//   }
// }

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
//     setSearchValue(state, actions) {
//       state.searchValue = actions.payload
//     },
//     setSort(state, actions: PayloadAction<Sort>) {
//       state.sort = actions.payload
//     },
//     toggleFilter(state, action) {
//       const { filterType, value } = action.payload;
//       if (state[filterType].includes(value)) {
//         state[filterType] = state[filterType].filter(item => item !== value);
//       } else {
//         state[filterType] = [...state[filterType], value];
//       }
//     },
//     resetFilters: () => initialState,
//   }
// })

// export const { setSearchValue, setSort, toggleFilter, resetFilters } = filterSlice.actions;

// export default filterSlice.reducer;

// export const selectValue = (state: RootState) => state.filter?.searchValue || "";
// export const selectSort = (state: RootState) => state.filter.sort;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum SortPropertyEnum {
  RATING_DESC = "rating",
  RATING_ASC = "-rating",
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
    name: "популярності",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
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
      const array = state[filterType] as string[]; // Явное указание, что это массив строк

      if (array.includes(value)) {
        state[filterType] = array.filter(item => item !== value) as never;
      } else {
        state[filterType] = [...array, value] as never;
      }
    },

    resetFilters: () => initialState,
  },
});

export const { setSearchValue, setSort, toggleFilter, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;

export const selectValue = (state: RootState): string => state.filter.searchValue;
export const selectSort = (state: RootState): Sort => state.filter.sort;
