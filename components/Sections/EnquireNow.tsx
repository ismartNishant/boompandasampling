"use client";
import React from "react";
import { Form } from "@nextui-org/form";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Player } from '@lottiefiles/react-lottie-player';
import HeadingOne from "../Headings/HeadingOne";
import { Fade, Zoom } from "react-awesome-reveal";

const EnquireNow = () => {
  const [phoneno, setPhoneNo] = React.useState("");
  const [city, setCity] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState<string>("");

  // Validate email using regex
  const validateEmail = (value: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  };

  const validatePhoneNumber = (value: string) => /^\d{10}$/.test(value);


  const handleInputChange = (inputValue: string, fieldName: string) => {
    switch (fieldName) {
      case "name":
        setName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        if (inputValue === "" || validateEmail(inputValue)) {
          setEmailError("");
        } else {
          setEmailError("Please enter a valid email address.");
        }
        break;
      case "phone":
        const numericValue = inputValue.replace(/\D/g, "");
        validatePhoneNumber(phoneno)
        setPhoneNo(numericValue);

      default:
        break;
    }
  };

  // Form submit handler with basic validation
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    console.log(name, email, city, phoneno);
    setPhoneNo("");
    setName("");
    setEmail("");
    setCity("");
    setEmailError("");
  };

  const isPhoneInvalid = phoneno !== "" && !validatePhoneNumber(phoneno);


  return (
    <section className="px-4 pt-16 lg:pt-20 lg:px-20 space-y-5 lg:space-y-16 text-center" id="enquire-now">
      <HeadingOne>Enquire with our experts for product sampling</HeadingOne>
      <div className="grid grid-cols-1 lg:grid-cols-2  xl:gap-20 w-full">
        <div className="relative max-w-screen-lg lg:max-w-lg flex justify-center items-center w-full mx-auto ">
          <Zoom className="relative xl:-top-10 ">
            <Player
              className=" w-full xl:h-[550px]"
              autoplay
              loop
              src="/Images/contact.json"
            >
            </Player>
          </Zoom>
        </div>
        <div className="w-full mx-auto ">
          <Fade>
            <Form className="w-full" onSubmit={handleFormSubmit} >
              <div className="space-y-5 w-full bg-primary-50/30 shadow  p-4 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      required
                      className=""
                      id="FullName"
                      label="Name"
                      name="fullname"
                      type="text"
                      value={name}
                      variant="bordered"
                      onValueChange={(inputValue) =>
                        handleInputChange(inputValue, "name")
                      }
                    />
                  </Fade>
                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      required
                      className=""
                      color={emailError ? "danger" : email ? "success" : "default"}
                      errorMessage={emailError || "Please enter a valid email"}
                      id="UserEmail"
                      isInvalid={!!emailError}
                      label="Email"
                      name="useremail"
                      type="email"
                      value={email}
                      variant="bordered"
                      onValueChange={(inputValue) =>
                        handleInputChange(inputValue, "email")
                      }
                    />
                  </Fade>
                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      required
                      color={
                        isPhoneInvalid ? "danger" : phoneno ? "success" : "default"
                      }
                      errorMessage="Please enter a valid 10-digit phone number"
                      id="phoneNumber"
                      inputMode="numeric" // Hint for mobile numeric keypad
                      isInvalid={isPhoneInvalid}
                      label="Phone No"
                      maxLength={10}
                      name="mobilenumber"
                      pattern="[0-9]*"
                      type="tel"
                      value={phoneno}
                      variant="bordered"
                      onValueChange={(inputValue) =>
                        handleInputChange(inputValue, "phone")
                      }
                    />
                  </Fade>
                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      required
                      className=""
                      label="City"
                      type="text"
                      variant="bordered"
                    />
                  </Fade>
                </div>
                <Fade>
                  <Input
                    isClearable
                    isRequired
                    required
                    className=""
                    label="Business Name"
                    type="text"
                    variant="bordered"
                  />
                </Fade>
                <Fade>
                  <Textarea
                    isRequired
                    required
                    label="Message"
                    variant="bordered"
                  />
                </Fade>
                <Zoom>
                  <Button className="uppercase text-lg font-extrabold h-12 rounded-full w-52 hover:scale-95 duration-300 ease-in-out" color="primary" >
                    Submit
                  </Button>
                </Zoom>
              </div>
            </Form>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default EnquireNow;
