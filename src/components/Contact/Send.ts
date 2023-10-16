import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "./Email";

console.log("process.env.RESEND_API_KEY", process.env.RESEND_API_KEY);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({
  name,
  lastName,
  email,
  phone,
  message,
}: {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["andersonmuneton@gmail.com", "herzar_620@hotmail.com"],
      subject: "Interesado en Grupo Cedro Azul",
      react: EmailTemplate({
        name,
        lastName,
        phone,
        email,
        message,
      }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
