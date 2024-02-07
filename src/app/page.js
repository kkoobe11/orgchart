import Image from "next/image";
import HomePage from "@/containers/home/page"

export default function Home() {
  return (
      <div className="hidden max-w-screen-xl px-4 pb-16 mx-auto space-y-6 md:block">
        <div className="flex flex-col space-y-8 lg:space-x-12 lg:space-y-0">
        <HomePage></HomePage>
</div>
      </div>
  );
}