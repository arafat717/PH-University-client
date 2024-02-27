import React from "react";
import { useGetAllFacultyQuery } from "../../../redux/feature/admin/AcadamicFaculty.api";
import { Button, Table, TableColumnsType, TableProps } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

type TFacultyProps = {
  name: string;
  _id: string;
};

const AcadamicFaculty = () => {
  const { data: facultyData, isFetching } = useGetAllFacultyQuery(undefined);

  const tableData = facultyData?.data?.map(({ name, _id }: TFacultyProps) => ({
    name,
    _id,
  }));

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name Of Facultly",
      dataIndex: "name",
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

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
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

export default AcadamicFaculty;
