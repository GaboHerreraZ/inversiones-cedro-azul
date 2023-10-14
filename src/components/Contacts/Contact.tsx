"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Utilss/Input";
import logo from "../../../public/img/logo-cedro-azul.png";
import Image from "next/legacy/image";
import Link from "next/link";
import TextArea from "@/components/Utilss/TextArea";
import { useTranslations } from "next-intl";
import { POST } from "@/components/Contacts/Send";

type Inputs = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = React.memo(() => {
  const {
    formState: { errors, isValid },
    register,
    reset,
    handleSubmit,
  } = useForm<Inputs>();

  const t = useTranslations("contact");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("data", data);

    if (!isValid) return;

    const response = await POST({ ...data });

    console.log("response", response);

    reset({
      name: "",
      email: "",
      lastName: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="w-full bg-contacto bg-center bg-cover mb-10">
      <div className="grid grid-cols-1 bg-black bg-opacity-70 md:grid-cols-2  justify-center gap-4 p-10 rounded-md">
        <div className="self-center justify-self-center text-white text-center text-2xl font-bold">
          <Link href={"/"}>
            <Image
              alt="Inversiones cedro azul"
              src={logo}
              layout="fixed"
              width={300}
              height={120}
            />
          </Link>
          <h1>{t("doubts")}</h1>
          <h1>{t("contactUs")}</h1>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-center text-3xl text-white font-bold">
            {t("title")}
          </h1>
          <Input
            {...register("name", { required: true })}
            labelText="Nombre"
            required={true}
            error={errors.name && "Nombre requerido"}
          />
          <Input
            {...register("lastName", { required: true })}
            labelText="Apellidos"
            required={true}
            error={errors.lastName?.message}
          />
          <Input
            {...register("phone", { required: true })}
            type="number"
            required={true}
            labelText="Telefono"
            error={errors.phone && "Nombre requerido"}
          />
          <Input
            {...register("email", { required: true })}
            type="email"
            required={true}
            labelText="Correo"
            error={errors.email && "Nombre requerido"}
          />
          <TextArea
            {...register("message", { required: true })}
            labelText="Mensaje"
            required={true}
            error={errors.message && "Mensaje requerido"}
          />
          <button className="button mt-5" type="submit">
            {t("send")}
          </button>
        </form>
      </div>
    </section>
  );
});
