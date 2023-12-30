import React, { useContext } from "react";
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import { AuthContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";

const UserLinks = () => {
  const { signOutUser, user, userData } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center cursor-pointer">
     
     
      <Link to={`/profile/${user?.uid}`}>
      <div className="mx-4 flex items-center" >
      <Tooltip content="Profilim" placement="bottom">
          <Avatar
            src={user?.photoURL || avatar}
            size="sm"
            alt="avatar"
          ></Avatar>
        </Tooltip>
        
        <p className="ml-4 font-roboto text-sm text-black font-medium no-underline">
          {user?.displayName === null && userData?.name !== undefined
            ? userData?.name?.charAt(0)?.toUpperCase() +
              userData?.name?.slice(1)
            : user?.displayName?.split(" ")[0]}
        </p>
      </div>
        </Link>
        <div className="mx-4 flex items-center" onClick={signOutUser}>
        
        <p className="ml-4 font-roboto text-sm text-black font-medium no-underline">
          Çıkış yap
        </p>
      </div>
        
    </div>
  );
};

export default UserLinks;
