"use client";
import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import { useForm } from "react-hook-form";
import FormError from "./FormError";
import { useState } from "react";

export default function FormContact() {
      const [sendMessage, setSendMessage] = useState(false)
      const { register, formState: { errors }, reset, handleSubmit } = useForm();

      const onSubmit = (data: object) => {
            setSendMessage(false)
            console.log(data);
            reset()
            setSendMessage(true)
            setInterval(() => {
                  setSendMessage(false)
            }, 2500);
      };
      return (
            <section className=" w-full max-w-150 bg-backgroundSecondary p-8 border border-borders ">
                  <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-6 ">
                        <div className=" relative flex flex-col gap-2 ">
                              <label htmlFor="name">
                                    <BadgeTitle text={"Nombre completo*"} />
                              </label>
                              <input
                                    id="name"
                                    type="text"
                                    {...register('name', {
                                          required: "El campo nombre es requerido",
                                          maxLength: {
                                                value: 30,
                                                message: "Máximo 30 caracteres"
                                          },
                                          minLength: {
                                                value: 3,
                                                message: "Mínimo 3 caracteres"
                                          }
                                    })}

                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText  outline-0 "
                              />
                              <FormError error={errors.name?.message?.toString() ?? ''} />
                        </div>
                        <div className=" relative flex flex-col gap-2 ">
                              <label htmlFor="email">
                                    <BadgeTitle text={"email*"} />
                              </label>
                              <input
                                    type="email"
                                    {...register('email', {
                                          required: 'El campo Email es requerido',
                                          pattern: {
                                                value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                                message: 'El email no es correcto'
                                          }
                                    })}

                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText  outline-0 "
                              />
                              <FormError error={errors.email?.message?.toString() ?? ''} />

                        </div>
                        <div className=" flex flex-col gap-2 ">
                              <label htmlFor="telefono">
                                    <BadgeTitle text={"telefono"} />
                              </label>
                              <input
                                    type="text"
                                    {...register('telefono')}
                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText  outline-0 "
                              />
                        </div>
                        <div className=" relative flex flex-col gap-2 ">
                              <label htmlFor="">
                                    <BadgeTitle text={"mensaje*"} />
                              </label>
                              <textarea
                                    rows={5}
                                    {...register('mensaje', {
                                          required: 'Por favor, dejenos un mensaje',
                                          minLength: {
                                                value: 1,
                                                message: 'El mensaje debe contener algun caracter'
                                          },
                                          maxLength: {
                                                value: 255,
                                                message: 'El mensaje debe contener como maximo 255 caracteres'
                                          }
                                    })}
                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText resize-none outline-0 "
                              />
                              <FormError error={errors.mensaje?.message?.toString() ?? ''} />
                        </div>
                        <input
                              type="submit"
                              value={"enviar solicitud"}
                              className={` w-full min-w-max py-4 px-10 uppercase bg-accent hover:bg-whiteText  font-inter font-black italic text-lg  text-darkText text-center transition-colors duration-150 `}
                        />
                        <section className="">
                              {
                                    sendMessage && <p className=" text-accent font-jetBrainsMono text-xs text-center ">El mensaje se envio correctamente</p>
                              }
                        </section>
                  </form>
            </section>
      );
}
