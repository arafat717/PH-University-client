import { useGetAllSemestersQuery } from "../../../redux/feature/acadamicSemester/AcadamicSemesters.api";

const AcadamicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return (
    <div>
      <h1>this is accadamic semester</h1>
    </div>
  );
};

export default AcadamicSemester;
