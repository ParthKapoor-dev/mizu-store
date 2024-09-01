import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import IntroText from "./components/introText";
import { LandingHeading } from "./components/LandingHeading";
import { UsersCount } from "./components/AvatarCircles";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function LandingPage() {

    return (
        <div className=" dark:bg-black w-full min-h-[100vh] mt-4 flex flex-col gap-20 items-center">

            <div className="flex flex-col gap-12">

                <IntroText title="Introducing Mizu" />

                <LandingHeading
                    title="Modern and Optimized App 🚀"
                    titleDelay={0.25}
                    desc="for your daily home needs"
                    descDelay={0.25}
                />


                <DotPattern
                    className={cn(
                        "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />
            </div>


            <FeaturedProducts />

            {/* <div className="relative h-[200px] w-[200px] rounded-xl">
                <BorderBeam duration={4} />
            </div> */}

        </div>
    )
}