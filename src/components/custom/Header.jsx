import React from 'react'
import { Button } from '../ui/button';
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
export default function Header() {
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.error("Login Error:", error),
  });
  const GetUserProfile = async (tokenInfo) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo.access_token}`,
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      setOpenDialog(false);
      generateTrip();
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toast("Failed to fetch user profile. Please try again.");
    }
  };
  return (
    <div className='p-3 flex justify-between shadow-sm items-center px-5'>
   <div className='flex items-center gap-2'>
   <img src='/logo.svg' />
   <p className='font-bold text-indigo-700'>TripAI</p>
   </div>
 
     <div>
     <Button onClick={login}>Sign In</Button>
     </div>

    </div>
  )
}
