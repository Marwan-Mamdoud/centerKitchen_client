"use client";
import SetBillingAddress from "@/store/SetBillingAddress";
import React, { useEffect, useState } from "react";
import { CgChevronDown } from "react-icons/cg";

const BillingAddressForm = () => {
  const options = ["Bahrain", "Oman", "Qatar", "United Arab Emirates"];
  const [firstName, setFirstName] = useState();
  const [lastName, setLastNames] = useState();
  const [company, setCompany] = useState();
  const [email, setEmail] = useState();
  const [street, setStreet] = useState();
  const [phone, setPhone] = useState();
  const [postCode, setPostCode] = useState();
  const [unit, setUnit] = useState();
  const [option, setOption] = useState();
  const [hide, setHide] = useState(false);
  const { setAddress, BillingAddress } = SetBillingAddress();
  const HundleAddress = async (e) => {
    e.preventDefault();
    const address = {
      firstName,
      lastName,
      company,
      country: option,
      email,
      phone,
      unit,
      street,
      postCode,
    };
    setAddress(address);
  };
  useEffect(() => {
    if (BillingAddress) {
      setEmail(BillingAddress?.email);
      setFirstName(BillingAddress?.firstName);
      setLastNames(BillingAddress?.lastName);
      setPostCode(BillingAddress?.postCode);
      setOption(BillingAddress?.country);
      setStreet(BillingAddress?.street);
      setPhone(BillingAddress?.phone);
      setUnit(BillingAddress?.unit);
      setCompany(BillingAddress?.company);
    }
  }, []);
  return (
    <div className="w-full py-12 flex flex-col items-start justify-start gap-10">
      <p className="font-bold text-xl w-1/3 text-black pb-5 border-b-2 border-b-black uppercase">
        Billing address
      </p>
      <form
        onSubmit={HundleAddress}
        className="w-10/12  flex flex-col gap-5 items-start justify-start"
      >
        <div className="grid grid-cols-2 gap-10 w-full">
          <div className="flex flex-col w-full items-start justify-start gap-2">
            <label htmlFor="phone" className="text-black">
              First Name <span className="text-redcolor">*</span>
            </label>
            <input
              required
              defaultValue={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="w-full h-10 border-black outline-none px-2.5 border-2"
            />
          </div>
          <div className="flex flex-col w-full items-start justify-start gap-2">
            <label htmlFor="phone" className="text-black">
              Last Name <span className="text-redcolor">*</span>
            </label>
            <input
              required
              defaultValue={lastName}
              onChange={(e) => setLastNames(e.target.value)}
              type="text"
              className="w-full h-10 border-black outline-none px-2.5 border-2"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="phone" className="text-black">
            Company name (optional)
          </label>
          <input
            defaultValue={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            className="w-full h-10 border-black outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="phone" className="text-black">
            Country / Region <span className="text-redcolor">*</span>
          </label>
          <div
            className={`flex flex-col  w-full items-start justify-start gap-0  relative`}
          >
            <div
              onClick={() => setHide((prev) => !prev)}
              className="w-full flex items-center cursor-pointer justify-between h-10 border-black text-black outline-none px-2.5 border-2  "
              name=""
              id=""
            >
              {" "}
              <p className=""> {option}</p>{" "}
              <CgChevronDown className="w-5 h-5" />
            </div>
            <div
              className={`flex flex-col cursor-pointer w-full items-start justify-start gap-0 absolute translate-y-10 bg-white border-[1px] border-gray-300 ${
                hide ? "" : "hidden"
              }`}
            >
              {options.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setHide(false);
                      setOption(item);
                    }}
                    className="h-10 w-full cursor-pointer text-start flex items-center justify-start   px-5 font-bold hover:text-white hover:bg-redcolor"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="phone" className="text-black">
            Street address <span className="text-redcolor">*</span>
          </label>
          <input
            defaultValue={street}
            required
            onChange={(e) => setStreet(e.target.value)}
            type="text"
            className="w-full h-10 border-black outline-none px-2.5 border-2"
          />
          <input
            defaultValue={unit}
            onChange={(e) => setUnit(e.target.value)}
            type="text"
            placeholder="Apartment, Unit, etc.(optional)"
            className="w-full h-10 border-black mt-3 outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="phone" className="text-black">
            Postcode / ZIP (optional)
          </label>
          <input
            defaultValue={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            type="text"
            className="w-full h-10 border-black outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="phone" className="text-black">
            Phone <span className="text-redcolor">*</span>
          </label>
          <input
            required
            defaultValue={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="w-full h-10 border-black outline-none px-2.5 border-2"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-2">
          <label htmlFor="phone" className="text-black">
            Email address <span className="text-redcolor">*</span>
          </label>
          <input
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
            className="w-full h-10 border-black outline-none px-2.5 border-2"
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 uppercase bg-redcolor text-white font-bold text-sm hover:bg-bluecolor duration-200"
        >
          Save Address
        </button>
      </form>
    </div>
  );
};

export default BillingAddressForm;
