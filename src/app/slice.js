import { createSlice, current } from "@reduxjs/toolkit"

const filter = createSlice({
  name: "filter",
  initialState: { filter: "" },
  reducers: {
    setFilter: (state, action) => {
      current(state)
      state.filter = action.payload
    },
  },
})

export const { setFilter } = filter.actions
export default filter.reducer
