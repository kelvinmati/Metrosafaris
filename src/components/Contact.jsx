import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    shouldUnregister: true,
    shouldFocusError: true,
  });
  // Email js
  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      emailjs
        .sendForm(
          "service_q05esic",
          "template_le20gcq",
          form.current,
          "_3i4KvWExBrZV1B2F"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Succesfully sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("error occured");
    }
  };
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_q05esic",
  //       "template_le20gcq",
  //       form.current,
  //       "_3i4KvWExBrZV1B2F"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Succesfully sent");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <section
      className="py-10 w-full h-full bg-no-repeat bg-cover bg-right bg-blend-multiply  text-white  "
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1512428559087-560fa5ceab42?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500)",
        backgroundColor: "rgba(0,0,0,0.6)",
      }}
    >
      <div className="w-mobile md:w-container_width mx-auto  rounded">
        <div className=" mb-12 text-center">
          <p className="text-4xl  font-bold ">CONTACT US.</p>
          <p className="text-gray-100">We will get back to you Asap!</p>
        </div>
        <div className="mb-10 text-xl  font-bold">Fill the form below.</div>
        <div className="grid md:grid-cols-2 ">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-5">
              <div className="">
                <label htmlFor=""> Username</label>
                <input
                  type="text"
                  className=" w-full border   p-2 rounded text-black"
                  placeholder="Enter username "
                  name="from_name"
                  {...register("from_name", {
                    required: true,
                  })}
                />
                {errors.from_name && (
                  <p className="text-red">Username is required </p>
                )}
              </div>
              <div>
                <label htmlFor=""> Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className=" w-full border p-2 rounded text-black"
                  placeholder="Enter phone number"
                  {...register("phone", {
                    required: false,
                  })}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  className=" p-2 rounded  w-full border text-black"
                  placeholder="Enter email"
                  {...register("email", {
                    required: true,
                  })}
                />
                {errors.email && <p className="text-red">Email is required </p>}
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="">Message</label>
                <textarea
                  className=" w-full border p-2 text-black"
                  name="message"
                  placeholder="Enter message here.."
                  cols="30"
                  rows="7"
                  {...register("message", {
                    required: true,
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-red">Message is required </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="  p-3 rounded w-full bg-purple "
                value="Send Enquiry"
              />
            </div>
          </form>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
