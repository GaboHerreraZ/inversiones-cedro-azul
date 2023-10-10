"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Container } from "@/components/container/container";
import Input from "@/components/utils/input";

type Service = {
  label: string;
  key: string;
};

type Inputs = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  service: Service;
};

export const ContactHome = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("data", data);

  return (
    <section className="bg-cedro-900">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2  p-10">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            impedit explicabo nemo animi ab adipisci repellendus corrupti
            recusandae laboriosam ex, dolor aperiam omnis, nisi laudantium odit
            facilis aut numquam ipsum!
          </p>
          <div className="bg-white p-10 rounded-md">
            <p>Asesoráte con nosotros</p>
            <form className="grid gap-5" onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...(register("name"), { required: true })}
                labelText="Nombre"
                error={errors.name && "Nombre requerido"}
              />
              <Input
                {...(register("lastName"), { required: true })}
                labelText="Apellidos"
                error={errors.lastName?.message}
              />
              <Input
                {...(register("phone"), { required: true })}
                type="number"
                labelText="Telefono"
                error={errors.phone && "Nombre requerido"}
              />
              <Input
                {...(register("email"), { required: true })}
                type="email"
                labelText="Correo"
                error={errors.email && "Nombre requerido"}
              />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
