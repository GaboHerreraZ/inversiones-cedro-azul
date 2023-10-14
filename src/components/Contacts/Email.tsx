import * as React from "react";

interface EmailTemplateProps {
  name: string;
  lastName: string;
  phone: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  lastName,
  phone,
  message,
  email,
}) => (
  <div className="text-center">
    <h1>Buenas Inversiones Cedro Azul,</h1>
    <p>
      <span className="font-bold">Mi nombre es:</span>
      <span className="font-bold">
        {name} {lastName}
      </span>
      y estoy interesado en invertir con ustedes, mi número de celular es:{" "}
      <span className="font-bold">{phone}</span> y correo:{" "}
      <span className="font-bold">{email}</span>, mi mensaje es:
    </p>
    <p className="font-bold">{message}</p>
  </div>
);
