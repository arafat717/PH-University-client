/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Divider, Form, Input, Row } from "antd";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PhSelect from "../../../components/form/PhSelect";
import { bloodGroupeOptions, genderOptions } from "../../../constants/gobal";
import DatePicker from "../../../components/form/datePicker";
import { useGetAllSemestersQuery } from "../../../redux/feature/admin/AcadamicSemester.api";
import { useGetAcademicDepartmentsQuery } from "../../../redux/feature/admin/AcadamicDepartment.api";
import { useAddStudentsMutation } from "../../../redux/feature/admin/createStudent.api";

const studentDummyDate = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },

    gender: "male",
    dateOfBirth: "1990-01-01",
    bloogGroup: "A+",

    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",

    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },

    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },

    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};

const studentDefaultValues = {
  name: {
    firstName: "I am ",
    middleName: "Student",
    lastName: "Number 1",
  },

  gender: "male",
  bloogGroup: "A+",

  email: "student2@gmail.com",
  contactNo: "1235678",
  emergencyContactNo: "987-654-3210",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",

  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666",
  },

  localGuardian: {
    name: "Alice Johnson",
    occupation: "Doctor",
    contactNo: "777-888-9999",
    address: "789 Pine St, Villageton",
  },

  // admissionSemester: "65b0104110b74fcbd7a25d92",
  // academicDepartment: "65b00fb010b74fcbd7a25d8e",
};

const CreateStudent = () => {
  const [addStudent, { data, error }] = useAddStudentsMutation();
  console.log(data, error);
  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);

  const { data: dData, isLoading: dIsLoading } =
    useGetAcademicDepartmentsQuery(undefined);

  console.log(dData);

  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const departmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item.academicFaculty.name,
  }));
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student1234",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);
    console.log(Object.fromEntries(formData));
    addStudent(formData);
    console.log(data);
  };

  return (
    <Row>
      <Col span={24}>
        <PhForm onSubmit={onsubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Information</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="First Name:"
                type="text"
                name="name.firstName"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Middle Name:"
                type="text"
                name="name.middleName"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Last Name:"
                type="text"
                name="name.lastName"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                label="Gender"
                name="gender"
                options={genderOptions}
              ></PhSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <DatePicker label="Date Of Birth" name="dateOfBirth"></DatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                label="Blood Groupe"
                name="bloogGroup"
                options={bloodGroupeOptions}
              ></PhSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Divider>Contact Information</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput label="Email:" type="text" name="email"></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Contact No:"
                type="text"
                name="contactNo"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Emergency Contact No:"
                type="text"
                name="emergencyContactNo"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Present Address:"
                type="text"
                name="presentAddress"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Permanent Address:"
                type="text"
                name="permanentAddress"
              ></PhInput>
            </Col>
            <Divider>Guardian</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Father Name:"
                type="text"
                name="guardian.fatherName"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Father Occupation:"
                type="text"
                name="guardian.fatherOccupation"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Father Contact No:"
                type="text"
                name="guardian.fatherContactNo"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Mother Name:"
                type="text"
                name="guardian.motherName"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Mother Occupation:"
                type="text"
                name="guardian.motherOccupation"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Mother Contact No:"
                type="text"
                name="guardian.motherContactNo"
              ></PhInput>
            </Col>
            <Divider>Loacl Guardian</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Name:"
                type="text"
                name="localGuardian.name"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Occupation:"
                type="text"
                name="localGuardian.occupation"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Contact No:"
                type="text"
                name="localGuardian.contactNo"
              ></PhInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                label="Address:"
                type="text"
                name="localGuardian.address"
              ></PhInput>
            </Col>
            <Divider>Accadamic Semester</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                label="Admission Semester:"
                name="admissionSemester"
                options={semesterOptions}
                disabled={sIsLoading}
              ></PhSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                label="Academic Department:"
                name="academicDepartment"
                options={departmentOptions}
                disabled={dIsLoading}
              ></PhSelect>
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
