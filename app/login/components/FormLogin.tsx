'use client'
import { useForm } from "react-hook-form";
import BadgeTitle from "@/app/components/common/layout/BadgeTitle";
import FormError from "@/app/contact/components/FormError";
import Link from "next/link";

export default function FormLogin() {

      const { register, formState: { errors }, reset, handleSubmit } = useForm();

      const onSubmit = (data: object) => {
            console.log(data);
            reset()

      };


      return (

            <section className=" w-full max-w-150 bg-backgroundSecondary p-8 border border-borders ">
                  <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-12 ">
                        <div className=" relative flex flex-col gap-2 ">
                              <label htmlFor="">
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
                        <div className=" relative flex flex-col gap-2 ">
                              <label htmlFor="">
                                    <BadgeTitle text={"email*"} />
                              </label>
                              <input
                                    type="password"
                                    {...register('password', {
                                          required: 'la contraseña es requerida',
                                          
                                    })}

                                    className=" w-full px-2 py-2.5 border-b border-borders/50 bg-backgroundLightGray font-inter text-whiteText  outline-0 "
                              />
                              <FormError error={errors.password?.message?.toString() ?? ''} />

                        </div>

                                    <section className=" flex justify-between ">
                                          <div className=" flex items-center gap-2 ">
                                                <input type="checkbox" name="" id="remember" />
                                                <label htmlFor="remember" className=" uppercase text-[10px] tracking-wide font-jetBrainsMono text-grayText " >recuérdame</label>
                                          </div>
                                          <Link href={"/"} className=" text-[10px] uppercase font-jetBrainsMono text-accent " >olvidé mi contraseña</Link>
                                    </section>

                        <input
                              type="submit"
                              value={"entrar"}
                              className={` w-full min-w-max py-4 px-10 uppercase bg-accent hover:bg-whiteText  font-inter font-black italic text-lg  text-darkText text-center transition-colors duration-150 `}
                        />

                  </form>
            </section>

      )
}