import { baseApi } from "../../api/baseApi";

const acadamicFaculltyapi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaculty: builder.query({
      query: () => ({
        url: "/academic-faculties",
        method: "GET",
      }),
    }),
    addAllFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllFacultyQuery, useAddAllFacultyMutation } =
  acadamicFaculltyapi;
