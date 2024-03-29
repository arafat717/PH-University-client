/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../feature/store";
import { setUser } from "../feature/auth/AuthSlice";
import { toast } from "sonner";

const basequery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await basequery(args, api, extraOptions);
  console.log(result);
  if (result.error?.status === 404) {
    toast.error("User Not Found");
  }
  if (result.error?.status === 401) {
    console.log("send refresh token");
    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
    console.log(data);
    console.log(data);
    const user = (api.getState() as RootState).auth.user;
    api.dispatch(
      setUser({
        user,
        token: data.data.accessToken,
      })
    );
    result = await basequery(args, api, extraOptions);
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["semester", "courses"],
  endpoints: () => ({}),
});
