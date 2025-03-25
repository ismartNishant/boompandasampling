"use client";
import React from "react";
import { Form } from "@nextui-org/form";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Player } from '@lottiefiles/react-lottie-player';
import HeadingOne from "../Headings/HeadingOne";
import { Fade, Zoom } from "react-awesome-reveal";
import { addToast } from "@heroui/toast";

const EnquireNow = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneno, setPhoneNo] = React.useState("");
  const [city, setCity] = React.useState("");
  const [businessName, setBusinessName] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [emailError, setEmailError] = React.useState<string>("");
  const [phoneError, setPhoneError] = React.useState<string>("");

  // Validate Email
  const validateEmail = (value: string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  // Validate Phone Number (only digits, 10 characters)
  const validatePhoneNumber = (value: string) => /^\d{10}$/.test(value);

  const handleInputChange = (inputValue: string, fieldName: string) => {
    switch (fieldName) {
      case "name":
        setName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        setEmailError(validateEmail(inputValue) ? "" : "Invalid email format.");
        break;
      case "phone":
        const numericValue = inputValue.replace(/\D/g, "");
        setPhoneNo(numericValue);
        setPhoneError(validatePhoneNumber(numericValue) ? "" : "Invalid phone number.");
        break;
      case "city":
        setCity(inputValue);
        break;
      case "businessName":
        setBusinessName(inputValue);
        break;
      case "message":
        setMessage(inputValue);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phoneno.trim();
    const trimmedCity = city.trim();
    const trimmedBusinessName = businessName.trim();
    const trimmedMessage = message.trim();

    // Validate All Fields
    if (!trimmedName || !trimmedEmail || !trimmedPhone || !trimmedCity || !trimmedBusinessName || !trimmedMessage) {
      addToast({ title: "All fields are required.", color: "danger" });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setEmailError("Invalid email format.");
      return;
    }

    if (!validatePhoneNumber(trimmedPhone)) {
      setPhoneError("Invalid phone number.");
      return;
    }

    console.log("Form Data:", { name, email, phoneno, city, businessName, message });

    // Clear form after submission
    setName("");
    setEmail("");
    setPhoneNo("");
    setCity("");
    setBusinessName("");
    setMessage("");
    setEmailError("");
    setPhoneError("");

    addToast({ title: "Form submitted successfully!", color: "success" });
  };

  return (
    <section className="px-4 pt-16 lg:pt-20 lg:px-20 space-y-5 lg:space-y-16 text-center" id="enquire-now">
      <HeadingOne>Enquire with our experts for product sampling</HeadingOne>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-20 w-full">
        <div className="relative max-w-screen-lg lg:max-w-lg flex justify-center items-center w-full mx-auto">
          <Zoom className="relative xl:-top-10">
            <Player className="w-full xl:h-[550px]" autoplay loop src="/Images/contact.json"></Player>
          </Zoom>
        </div>
        <div className="w-full mx-auto">
          <Fade>
            <Form className="w-full" onSubmit={handleFormSubmit}>
              <div className="space-y-5 w-full bg-primary-50/30 shadow p-5 lg:p-10 rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-5">
                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      label="Name"
                      type="text"
                      value={name}
                      variant="bordered"
                      onValueChange={(inputValue) => handleInputChange(inputValue, "name")}
                      classNames={{ label: "!text-black ", inputWrapper: "data-[focus=true]:bg-rose-200 text-black " }}
                    />
                  </Fade>

                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      label="Email"
                      type="email"
                      value={email}
                      variant="bordered"
                      color={emailError ? "danger" : email ? "success" : "default"}
                      errorMessage={emailError}
                      isInvalid={!!emailError}
                      onValueChange={(inputValue) => handleInputChange(inputValue, "email")}
                      classNames={{ label: "!text-black ", inputWrapper: "data-[focus=true]:bg-rose-200 text-black " }}
                    />
                  </Fade>

                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      label="Phone No"
                      type="tel"
                      value={phoneno}
                      maxLength={10}
                      variant="bordered"
                      inputMode="numeric"
                      color={phoneError ? "danger" : phoneno ? "success" : "default"}
                      errorMessage={phoneError}
                      isInvalid={!!phoneError}
                      onValueChange={(inputValue) => handleInputChange(inputValue, "phone")}
                      classNames={{ label: "!text-black ", inputWrapper: "data-[focus=true]:bg-rose-200 text-black " }}
                    />
                  </Fade>

                  <Fade>
                    <Input
                      isClearable
                      isRequired
                      label="City"
                      type="text"
                      value={city}
                      variant="bordered"
                      onValueChange={(inputValue) => handleInputChange(inputValue, "city")}
                      classNames={{ label: "!text-black ", inputWrapper: "data-[focus=true]:bg-rose-200 text-black " }}
                    />
                  </Fade>
                </div>

                <Fade>
                  <Input
                    isClearable
                    isRequired
                    label="Business Name"
                    type="text"
                    value={businessName}
                    variant="bordered"
                    onValueChange={(inputValue) => handleInputChange(inputValue, "businessName")}
                    classNames={{ label: "!text-black ", inputWrapper: "data-[focus=true]:bg-rose-200 text-black " }}
                  />
                </Fade>

                <Fade>
                  <Textarea
                    isRequired
                    label="Message"
                    variant="bordered"
                    value={message}
                    onValueChange={(inputValue) => handleInputChange(inputValue, "message")}
                    classNames={{ label: "!text-black ", inputWrapper: "data-[focus=true]:bg-rose-200 text-black " }}
                  />
                </Fade>

                <Zoom>
                  <Button type="submit" className="uppercase text-lg font-extrabold h-12 rounded-full w-52 hover:scale-95 duration-300 ease-in-out" color="primary">
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
