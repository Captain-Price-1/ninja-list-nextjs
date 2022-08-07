import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    console.log("use effect ran");
    setTimeout(() => {
      // router.go(1)
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oooops ..</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;