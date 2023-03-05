import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Normal-thunk

// export function fetchProduct() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const resp = await fetch("https://fakestoreapi.com/products");
//       const data = await resp.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUS.ERROR));
//     }
//   };
// }

// tookit Thunk

export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const resp = await fetch("https://fakestoreapi.com/products");
  const data = await resp.json();
  return data;
});
