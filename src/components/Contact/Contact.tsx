"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Utils/Input";
import logo from "../../../public/img/logo-cedro-azul.png";
import Image from "next/legacy/image";
import Link from "next/link";
import TextArea from "@/components/Utils/TextArea";
import { useTranslations } from "next-intl";

type Inputs = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export const Contact = React.memo(() => {
  const {
    formState: { errors, isValid, isSubmitSuccessful },
    register,
    reset,
    handleSubmit,
  } = useForm<Inputs>();

  const t = useTranslations("contact");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!isValid) return;

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      reset({
        name: "",
        email: "",
        lastName: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="w-full bg-contacto bg-center bg-cover mb-10">
      <div className="grid grid-cols-1 bg-black bg-opacity-70 md:grid-cols-2  justify-center gap-4 p-10 rounded-md">
        <div className="self-center justify-self-center text-white text-center text-2xl font-bold">
          <Link href={"/"}>
            <Image
              alt="Grupo cedro azul"
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
            labelText={t("inputName")}
            required={true}
            error={errors.name && t("inputNameRequired")}
          />
          <Input
            {...register("lastName")}
            labelText={t("inputLastName")}
            required={false}
          />
          <Input
            {...register("phone", { required: true })}
            type="number"
            required={true}
            labelText={t("inputPhone")}
            error={errors.phone && t("inputPhoneRequired")}
          />
          <Input
            {...register("email", { required: true })}
            type="email"
            required={true}
            labelText={t("inputEmail")}
            error={errors.email && t("inputEmailRequired")}
          />
          <TextArea
            {...register("message", { required: true })}
            labelText={t("inputMessage")}
            required={true}
            error={errors.message && t("inputMessageRequired")}
          />
          <button className="button mt-5" type="submit">
            {t("send")}
          </button>
          {isSubmitSuccessful ? (
            <div className="bg-green-500 p-3 text-center mt-3 rounded-md">
              <h1 className="text-white">
                Gracias!!, pronto estaremos en contacto contigo
              </h1>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </section>
  );
});
