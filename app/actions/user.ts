"use server";
import { db } from "@/lib/db";
import { User } from "@prisma/client";
import { Resend } from "resend";
import bcrypt from "bcrypt";
import EmailTemplate from "@/components/Emails/email-template";
export async function createUser(data: User) {
  const { firstName, lastName, email, password, phone, role } = data;
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        data: null,
        error: `User with this email ( ${email})  already exists in the Database`,
        status: 409,
      };
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token

    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phone,
        role,
        token: userToken,
      },
    });
    const token = newUser.token;
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with Boogie. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: "Invoicer <info@flakolimited.com>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ firstName, token, linkText, message }),
    });
    // console.log(token);
    // console.log(sendMail);
    // console.log(newUser);
    // console.log(email);
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function getUserById(id: string) {
  if (id) {
    try {
      const user = await db.user.findUnique({
        where: { id },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
export async function updateUserById(id: string) {
  if (id) {
    try {
      const updateduser = await db.user.update({
        where: { id },
        data: {
          isVerfied: true,
        },
      });
      return updateduser;
    } catch (error) {
      console.log(error);
    }
  }
}
