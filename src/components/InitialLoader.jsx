export default function InitialLoader() {
  return (
    <div className="loader w-screen h-screen bg-black z-[28]  flex items-center justify-center">
      <video
        src="/Bg.mp4"
        autoPlay
        loop
        muted
        className="w-[10rem] h-[10rem]"
      ></video>
    </div>
  );
}
