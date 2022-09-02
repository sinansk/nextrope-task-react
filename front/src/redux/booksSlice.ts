import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksType, BookType } from "../types";
import { publicRequest } from "../utils";
interface BooksState {
  data: BookType[] | null;
  loading: boolean;
  error: string;
  currentPage: string;
}
const initialState: BooksState = {
  data: null,
  loading: false,
  error: "",
  currentPage: "1",
};
export const fetchBooks = createAsyncThunk(
  "fetchBooks",
  async (currentPage: string) => {
    const response = await publicRequest.get<BooksType>(
      "/book?page=" + currentPage
    );
    return response.data.data;
  }
);
const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      fetchBooks.fulfilled,
      (state, action: PayloadAction<BookType[]>) => {
        state.data = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error fetching books";
    });
  },
});
export const { setPage } = booksSlice.actions;
export default booksSlice.reducer;
