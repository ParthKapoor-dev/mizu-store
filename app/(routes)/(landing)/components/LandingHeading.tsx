import BlurFade from "@/components/magicui/blur-fade";
import { UsersCount } from "./AvatarCircles";

interface HeadingProps {
    title: string,
    desc: string,
    titleDelay: number,
    descDelay: number
}

export function LandingHeading({ title, titleDelay, desc, descDelay }: HeadingProps) {
    return (
        <section id="header" className="flex flex-col items-center gap-2">
            <BlurFade delay={titleDelay} inView>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                    {title}
                </h2>
            </BlurFade>
            <BlurFade delay={descDelay} inView>
                <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-3xl/none">
                    {desc}
                </span>
            </BlurFade>

            <UsersCount className="mt-4" />

        </section>
    );
}
