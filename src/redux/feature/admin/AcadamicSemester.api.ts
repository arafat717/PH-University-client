import { TAcadamicSemester } from "../../../types/acadamicSemester.types";
import { TQueryParams, TResponseRedux } from "../../../types/gobal.types";
import { baseApi } from "../../api/baseApi";

const acadamicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemesters: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcadamicSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAllSemisters: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllSemestersQuery, useAddAllSemistersMutation } =
  acadamicSemesterApi;
