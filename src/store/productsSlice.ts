import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/product";

type ProductsState = {
  items: Product[];
  loading: boolean;
  error: string | null;
  categories: string[];
};

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  categories: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await Promise.all(
      Array.from({ length: 20 }, (_, i) =>
        fetch(`https://fakestoreapi.com/products/${i + 1}`).then((res) =>
          res.json()
        )
      )
    );
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.categories = [
          ...new Set(action.payload.map((product) => product.category)),
        ];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
