import Image from "next/image";
import HomeContainer from "@/containers/homepage/page";
export default function About() {
    return (
        <div className="hidden max-w-screen-xl p-10 px-4 pb-16 mx-auto space-y-6 md:block">
            <div className="flex flex-col space-y-8 lg:space-x-12 lg:space-y-0">
                <HomeContainer></HomeContainer>

            </div>
        </div>
    );
}