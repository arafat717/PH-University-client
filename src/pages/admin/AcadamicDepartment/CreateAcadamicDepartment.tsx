import { Button, Col, Flex } from "antd";

import PhForm from "../../../components/form/PhForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../components/form/PhSelect";
import { nameOfDepartmentOptions } from "../../../constants/gobal";
import { useGetAllFacultyQuery } from "../../../redux/feature/admin/AcadamicFaculty.api";
import { useAddAcademicDepartmentMutation } from "../../../redux/feature/admin/AcadamicDepartment.api";
import { toast } from "sonner";

type TFacultyProps = {
  _id: string;
  name: string;
};

const defaultValue = {
  name: "Department of L1",
  academicFaculty: "Department of English",
};

const CreateAcadamicDepartment = () => {
  const [createDepartment] = useAddAcademicDepartmentMutation();

  const { data: fData, isLoading: fIsLoading } =
    useGetAllFacultyQuery(undefined);

  const facultyOptions = fData?.data?.map((item: TFacultyProps) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const faculty = {
      name: data.name,
      academicFaculty: data.academicFaculty,
    };

    try {
      const res = await createDepartment(faculty);
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Department Created");
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm onSubmit={onSubmit} defaultValues={defaultValue}>
          <PhSelect
            label="Academic Department:"
            name="name"
            options={nameOfDepartmentOptions}
            disabled={fIsLoading}
          ></PhSelect>
          <PhSelect
            label="Academic Department:"
            name="academicFaculty"
            options={facultyOptions}
            disabled={fIsLoading}
          ></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcadamicDepartment;
