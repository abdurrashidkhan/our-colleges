import { auth } from "@/app/firebase.init";
import Loading from "@/app/loading";
import userInfoInsert from "@/database/userInfoInsert/userInfoInsert";
import Image from "next/image";
import { useSignInWithFacebook } from "react-firebase-hooks/auth";
import fbLogo from "../../../assets/images/logo/facebook.png";

export default async function LoginWithFb() {
  const [signInWithFacebook, user, loading, error] =
    useSignInWithFacebook(auth);
  // facebook user login after data save database
  const fbLogin = async () => {
    await signInWithFacebook();
  };
  const userInfo = {
    displayName: user?.user?.displayName,
    email: user?.user?.email,
    uid: user?.user?.uid,
    emailVerified: user?.user?.emailVerified,
    photoURL: user?.user?.photoURL,
    accessToken: user?.user?.accessToken,
  };
  if (user) {
    await userInfoInsert(userInfo);
  }
  if (loading) {
    return <Loading></Loading>;
  }
  let errorElement = "";
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    // <button onClick={() => fbLogin()}>
    <button onClick={() => fbLogin()}>
      <Image
        className="mx-auto w-[30px] h-auto"
        loading="lazy"
        //
        src={fbLogo}
        width={"100%"}
        height={"auto"}
        alt="Loading...."
      />
    </button>
  );
}
