import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function HomePage(){
  const router = useRouter();
  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token){
      setisLoggedin(true);
    }
    else{
      router.push('/login');
    }
  },[]);

  const handlelogout = () =>{
    localStorage.removeItem('token');
    setisLoggedin(false);
    router.push('/login');
  };

  return (
    <div>
      <h1>Welcome to tasklist</h1>
      {isLoggedin && (
        <button onClick={handlelogout}> logout</button>
      )}
    </div>
  );
}
export default HomePage;