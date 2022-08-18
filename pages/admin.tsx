import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Admin from "../components/Admin/Admin";
import Loader from "../components/Loader";
import Head from "next/head";

function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return <Loader />;

  return (
    <>
      <Head>
        <title>Шашландия - авторизация</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Admin />
    </>
  );
}

export default AdminPage;
