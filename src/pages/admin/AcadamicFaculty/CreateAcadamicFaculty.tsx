/* eslint-disable @typescript-eslint/no-unused-vars */
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { useAddAllFacultyMutation } from "../../../redux/feature/admin/AcadamicFaculty.api";
import { toast } from "sonner";

const CreateAcadamicFaculty = () => {
  const [addFaculty] = useAddAllFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const faculty = {
      name: data.name,
    };

    try {
      const res = await addFaculty(faculty);
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
        <PhForm onSubmit={onSubmit}>
          <PhInput type="text" name="name" label="Name Of Facultly:"></PhInput>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcadamicFaculty;
