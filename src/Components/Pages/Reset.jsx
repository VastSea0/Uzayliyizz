import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

const Reset = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="grid grid-cols-1 justify-items-center items-center h-screen">
      <div className="w-96">
        <Typography variant="h6" color="blue-gray" className="pb-4">
          Sana E-posta gönderdik kontrol et
        </Typography>
        <Input
          name="email"
          type="email"
          lable="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Button variant="gradient" fullWidth className="mt-4">
          Tamam
        </Button>
      </div>
    </div>
  );
};

export default Reset;
