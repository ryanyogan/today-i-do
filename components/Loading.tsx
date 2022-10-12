import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Player
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_3gl6z75q.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
}
