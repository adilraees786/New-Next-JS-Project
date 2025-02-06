
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     products: [],
//     searchTerm: '',
//     filterData: []
// };

// const productSlice = createSlice({
//     name: "title",
//     initialState,
//     reducers: {
//         setProducts: (state, action) => {
//             state.products = action.payload;
//         },
//         setSearchTerm: (state, action) => {
//             state.searchTerm = action.payload;
//             state.filterData = state.products.filter(product =>
//                 product.title && product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//             );
//         }
//     },
// });

// export const { setProducts, setSearchTerm } = productSlice.actions;
// export default productSlice.reducer;