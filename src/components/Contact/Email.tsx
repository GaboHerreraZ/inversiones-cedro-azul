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
  <div style={{ textAlign: "center" }}>
    <h1>Buenas Grupo Cedro Azul,</h1>
    <p>
      <span>Mi nombre es: </span>
      <span
        style={{ fontWeight: "bold", marginLeft: "2px", marginRight: "2px" }}
      >
        {name} {lastName}
      </span>
      y estoy interesado en invertir con ustedes, mi número de celular es:
      <span
        style={{ fontWeight: "bold", marginLeft: "2px", marginRight: "2px" }}
      >
        {phone}
      </span>
      y correo:
      <span
        style={{ fontWeight: "bold", marginLeft: "2px", marginRight: "2px" }}
      >
        {email}
      </span>
      , mi mensaje es:
    </p>
    <p style={{ fontWeight: "bold", marginLeft: "2px", marginRight: "2px" }}>
      {message}
    </p>
  </div>
);
