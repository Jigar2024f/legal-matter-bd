import { useEffect, useState } from "react";
import axios from "axios";
import { redirect, usePathname } from "next/navigation";

const isAuth = (Component) => {
  return function IsAuth(props) {
    const [auth, setAuth] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const path = usePathname();


    useEffect(() => {
      const checkAuth = async () => {
        try {
          const response = await axios.get(
            "https://ligalmatter.vercel.app/api/v1/user/me",
            {
              withCredentials: true,
            }
          );
          setAuth(response.data.success);
        } catch (err) {
          setError("Not authenticated");
          setAuth(false);
        } finally {
          setIsLoading(false);
        }
      };

      checkAuth();
    }, [path]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!auth) {
      redirect("/login");
      return null;
    }

    return <Component {...props} />;
  };
};

export default isAuth;
