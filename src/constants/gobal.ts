export const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const genders = ["Male", "Female", "Other"];
export const bloodGroupe = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
export const nameOfDepartment = [
  "Department of L1",
  "Department of L2",
  "Department of L3",
  "Department of L4",
];

const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));

export const bloodGroupeOptions = bloodGroupe.map((item) => ({
  value: item,
  label: item,
}));

export const nameOfDepartmentOptions = nameOfDepartment.map((item) => ({
  value: item,
  label: item,
}));

export const monthOptions = monthName.map((item) => ({
  value: item,
  label: item,
}));

export const weekDaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));
