import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import AuthContext from "store/auth.context";
import Loading from "./Loading";
import Login from "./Logint";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user && !loading && router.pathname === "/") {
      router.replace("/todo");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (user && !loading && router.pathname !== "/") {
    return children;
  } else if (!user && !loading) {
    return <Login />;
  } else {
    return <Loading />;
  }
}
