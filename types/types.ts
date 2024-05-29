import { UserRole } from "@prisma/client";

export type signupData = {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  password: string;
  role: UserRole;
};
export type loginData = {
  email: string;
  password: string;
};
