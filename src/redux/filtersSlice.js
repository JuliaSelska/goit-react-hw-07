import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        name: "",
    },
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        }
    }
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

// export const changeFilter = createAction('filterContact/filters');

// const initialState = {
//     name: "",
// };

// export default function changeFilterSliceReducer(state = initialState, action) {

//     switch (action.type) {
//         case 'filterContact/filters':
//             return {
//                 ...state, name: action.payload,
//             };

//         default:
//             return state;
//     }
// }