import "./App.css";
import { Bio } from "./components/Bio";
import { Links } from "./components/Links";
import { ProfilePic } from "./components/ProfilePic";

function App() {
  return (
    <main className="bg-[#141414] min-h-screen flex flex-col items-center justify-center px-6 md:px-0">
      <section className="bg-[#1F1F1F] m-w-[327px] w-full p-6 flex flex-col items-center rounded-lg md:w-[384px] md:m-h-[611px] md:p-10">
        <ProfilePic url="./images/avatar-jessica.jpeg" />
        <div className="flex flex-col gap-6 text-center">
          <Bio />
          <Links />
        </div>
      </section>
    </main>
  );
}

export default App;
