import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "@/components/Contact/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, lastName, phone, email, message } = body;
  try {
    const data = await resend.emails.send({
      from: "Grupo Cedro Azul Contacto <info-no-reply@grupocedroazul.com>",
      to: ["andersonmuneton@gmail.com"],
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
