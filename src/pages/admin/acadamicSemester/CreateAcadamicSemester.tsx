import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../components/form/PhSelect";
import { selectOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/gobal";
import { zodResolver } from "@hookform/resolvers/zod";
import { acadamicSemesterSchema } from "../../../schemas/acadamicSchema";
import { useAddAllSemistersMutation } from "../../../redux/feature/admin/AcadamicSemester.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/gobal.types";

const currentYear = new Date().getFullYear();

const yearoptions = [0, 1, 2, 3, 4, 5].map((num) => ({
  value: String(currentYear + num),
  label: String(currentYear + num),
}));

const CreateAcadamicSemester = () => {
  const [addSemister] = useAddAllSemistersMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const name = selectOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
    try {
      const res = (await addSemister(semesterData)) as TResponse;
      if (res.error) {
        toast.error(res.error.data.message);
      } else {
        toast.success("Semister Created");
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhForm
          onSubmit={onSubmit}
          resolver={zodResolver(acadamicSemesterSchema)}
        >
          <PhSelect label="name" name="name" options={selectOptions}></PhSelect>
          <PhSelect label="Year" name="year" options={yearoptions}></PhSelect>
          <PhSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          ></PhSelect>
          <PhSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          ></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcadamicSemester;
