import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { signInAnonymous, signInWithGoogle } from "../firebase/authentication";

export default function Login() {
  const router = useRouter();

  const loginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push("/todo");
    } catch (error: any) {
      toast(error.message, {
        icon: "⛔️",
      });
    }
  };

  const loginAnon = async () => {
    try {
      await signInAnonymous();
      router.push("/todo");
    } catch (error: any) {
      toast(error.message, {
        icon: "⛔️",
      });
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <p className="font-normal text-5xl mb-6">Only Today</p>
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_ipcfpsml.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
      <p className="text-base my-6">Get. This. Done.</p>
      <div className="flex">
        <button
          onClick={loginWithGoogle}
          className="flex items-center justify-center border-2 py-2 px-6 rounded-md mr-4"
        >
          <i className="bi bi-google mr-2"></i>
          <span>Google</span>
        </button>
        <button
          onClick={loginAnon}
          className="bg-black text-white flex items-center justify-center border-2 py-2 px-6 rounded-md mr-4"
        >
          <i className="bi bi-person mr-2"></i>
          <span>Anonymous</span>
        </button>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 5_000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}
