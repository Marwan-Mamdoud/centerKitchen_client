"use client";
import { EditUserInfo } from "@/lib/APIS";
import setUserInfo from "@/store/UserInfo";
import React, { useState } from "react";

const AccountDetails = () => {
  const { user, setUser } = setUserInfo();
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [name, setName] = useState(user.name);

  const hundleEditUser = async (e) => {
    e.preventDefault();
    const User = {
      name,
      email,
      oldPassword,
      password,
      passwordConfirm,
      id: user._id,
    };
    const data = await EditUserInfo(User);
    if (data) {
      setUser(data);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start pt-5  [@media(max-width:1050px)]:px-5 pl-5 w-full">
      <form
        className="flex flex-col items-start justify-start gap-5 w-full"
        onSubmit={hundleEditUser}
      >
        <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
          <label htmlFor="name" className="text-black">
            UserName <span className="text-redcolor">*</span>
          </label>
          <input
            type="text"
            defaultValue={user.name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-12 outline-none px-3 border-2 border-black"
          />
        </div>
        <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
          <label htmlFor="name" className="text-black">
            Email <span className="text-redcolor">*</span>
          </label>
          <input
            type="text"
            defaultValue={user.email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 outline-none px-3 border-2 border-black"
          />
        </div>
        <div className="border-2 w-full relative gap-10 border-gray-200 p-10 mt-12 flex flex-col items-start justify-start">
          <p className="uppercase font-bold text-2xl bg-white p-5 absolute left-5 -top-10">
            Password change
          </p>
          <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
            <label htmlFor="name" className="text-black">
              Current password (leave blank to leave unchanged)
            </label>
            <input
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              className="w-full h-12 outline-none px-3 border-2 border-black"
            />
          </div>

          <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
            <label htmlFor="name" className="text-black">
              New password (leave blank to leave unchanged)
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 outline-none px-3 border-2 border-black"
            />
          </div>
          <div className="flex flex-col  w-full h-fit text-sm items-start justify-start gap-1">
            <label htmlFor="name" className="text-black">
              Confirm new password
            </label>
            <input
              type="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full h-12 outline-none px-3 border-2 border-black"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-3 uppercase bg-redcolor text-white font-bold text-sm hover:bg-bluecolor duration-200"
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default AccountDetails;
