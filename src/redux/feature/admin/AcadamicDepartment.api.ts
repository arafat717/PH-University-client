import { TAcademicDepartment } from "../../../types/acadamicManagement.types";
import { TResponseRedux } from "../../../types/gobal.types";
import { baseApi } from "../../api/baseApi";

const AcadamicDepartment = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAcademicDepartments: builder.query({
      query: () => {
        return { url: "/academic-departments", method: "GET" };
      },
      transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddAcademicDepartmentMutation,
  useGetAcademicDepartmentsQuery,
} = AcadamicDepartment;
