"use client";
import React, { useState } from "react";
import BillingAddressForm from "./BillingAddressForm";
import ShippingAddressForm from "./ShippingAddressForm";
import SetShippingAddress from "@/store/SetShippingAddress";
import SetBillingAddress from "@/store/SetBillingAddress";

const Addresses = () => {
  const [form, setForm] = useState();
  const { addressShipping } = SetShippingAddress();
  const { BillingAddress } = SetBillingAddress();
  return (
    <div className="flex flex-col items-start justify-start gap-5 pt-5 px-8">
      <p className="text-gray-500">
        The following addresses will be used on the checkout page by default.
      </p>
      <div className="grid grid-cols-2 w-full gap-10">
        <div className="w-full flex flex-col gap-5">
          <div className="font-bold uppercase text-black text-2xl">
            Billing address{" "}
            <button
              onClick={() => setForm("Billing")}
              className="hover:text-redcolor text-sm"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="font-bold uppercase text-black text-2xl">
            Shipping address{" "}
            <button
              onClick={() => setForm("Shipping")}
              className="hover:text-redcolor text-sm"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {form == "Billing" ? (
        <BillingAddressForm />
      ) : form == "Shipping" ? (
        <ShippingAddressForm />
      ) : (
        <div className="grid grid-cols-2 gap-10 w-full">
          <div className="w-full">
            {BillingAddress ? (
              <div className="flex flex-col items-start justify-start gap-2 text-gray-400">
                <p>
                  {BillingAddress?.firstName} {BillingAddress?.lastName}
                </p>
                <p>{BillingAddress?.company}</p>
                <p>{BillingAddress?.country}</p>
                <p>{BillingAddress?.street}</p>
                <p>{BillingAddress?.postCode}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="w-full">
            {addressShipping ? (
              <div className="flex flex-col items-start justify-start gap-2 text-gray-400">
                <p>
                  {addressShipping?.firstName} {addressShipping?.lastName}
                </p>
                <p>{addressShipping?.company}</p>
                <p>{addressShipping?.country}</p>
                <p>{addressShipping?.city}</p>
                <p>{addressShipping?.street}</p>
                <p>{addressShipping?.postCode}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Addresses;
