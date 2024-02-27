import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/feature/admin/AcadamicSemester.api";
import { TAcadamicSemester } from "../../../types/acadamicSemester.types";
import { useState } from "react";
import { TQueryParams } from "../../../types/gobal.types";

type TTableData = Pick<
  TAcadamicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;

const currentYear = new Date().getFullYear();

const yearoptions = [0, 1, 2, 3, 4, 5].map((num) => ({
  text: String(currentYear + num),
  value: String(currentYear + num),
}));

const AcadamicSemester = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const { data: semesterData, isFetching } = useGetAllSemestersQuery(params);

  const tableData = semesterData?.data?.map(
    ({ _id, name, endMonth, startMonth, year }) => ({
      key: _id,
      name,
      endMonth,
      startMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Summer",
          value: "Summer",
        },
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: yearoptions,
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      dataIndex: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AcadamicSemester;
