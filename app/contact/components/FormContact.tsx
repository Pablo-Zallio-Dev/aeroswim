"use client";
import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import { useForm } from "react-hook-form";

export default function FormContact() {
      const { register, formState:{errors}, handleSubmit } = useForm();

      const onSubmit = (data: object) => {
            console.log(data);
      };
      return (
            <section className=" w-full max-w-150 bg-backgroundSecondary p-8 border border-borders ">
                  <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-6 ">
                        <div className=" flex flex-col gap-2 ">
                              <label htmlFor="">
                                    <BadgeTitle text={"Nombre completo*"} />
                              </label>
                              <input
                              id="name"
                                    type="text"
                                    {...register('name', {
                                          required: true,
                                          maxLength: 30,
                                          minLength: 1
                                    })}

                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText  outline-0 "
                              />
                              { errors.name?.type === 'required' && <p className=" text-whiteText ">requerido</p>   }
                        </div>
                        <div className=" flex flex-col gap-2 ">
                              <label htmlFor="">
                                    <BadgeTitle text={"email*"} />
                              </label>
                              <input
                                    type="email"
                                    {...register('email', {
                                          required: true,
                                          pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                                    })}

                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText  outline-0 "
                              />
                        </div>
                        <div className=" flex flex-col gap-2 ">
                              <label htmlFor="">
                                    <BadgeTitle text={"telefono"} />
                              </label>
                              <input
                                    type="text"
                                    {...register('telefono')}
                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText  outline-0 "
                              />
                        </div>
                        <div className=" flex flex-col gap-2 ">
                              <label htmlFor="">
                                    <BadgeTitle text={"mensaje*"} />
                              </label>
                              <textarea
                                    rows={5}
                                    {...register('mensaje', {
                                          required: true,
                                          minLength: 1,
                                          maxLength: 255
                                    })}
                                    required
                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText resize-none outline-0 "
                              />
                        </div>
                        <input
                              type="submit"
                              value={"enviar solicitud"}
                              className={` w-full min-w-max py-4 px-10 uppercase bg-accent hover:bg-whiteText  font-inter font-black italic text-lg  text-darkText text-center transition-colors duration-150 `}
                        />
                  </form>
            </section>
      );
}
