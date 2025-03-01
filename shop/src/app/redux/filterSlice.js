import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  searchValue: '',
  category: [],
  series: [],
  classification: [],
  structures: [],
  compartments: [],
  colours: [],
  gender: [],
  chapter: []
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue(state, actions) {
      state.searchValue = actions.payload
    },
    toggleFilter(state, action) {
      const { filterType, value } = action.payload;
      if (state[filterType].includes(value)) {
        state[filterType] = state[filterType].filter(item => item !== value);
      } else {
        state[filterType] = [...state[filterType], value];
      }
    },
    resetFilters: () => initialState,
  }
})

export const { setSearchValue, toggleFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;

export const selectValue = (state) => state.filter?.searchValue || "";