import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
}

export const DataSlice = createSlice({
    name: 'data',
    initialState,
    reducer: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
    }
})

export const { setLoading } = DataSlice.actions;
export default DataSlice.reducer;