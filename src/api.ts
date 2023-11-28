import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  timeout: 30_000,
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2UyZGVmMjVjYTkwMGUwMWYwMjYwM2RlZmExMjQ4YSIsInN1YiI6IjYwYTZiODI0MTQyZWYxMDA0MGVmZjZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q4DkwPmVk3hx1-BfugWehXLWnkGBWvE1k7YX7Z1ogWc",
  },
});
