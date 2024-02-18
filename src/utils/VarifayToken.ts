import { jwtDecode } from "jwt-decode";

export const VarifayToken = (token: string) => {
  return jwtDecode(token);
};
