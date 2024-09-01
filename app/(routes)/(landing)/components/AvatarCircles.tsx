import AvatarCircles from "@/components/magicui/avatar-circles";
import { cn } from "@/lib/utils";

const avatarUrls = [
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
    "https://avatars.githubusercontent.com/parthkapoor-dev",
    "https://avatars.githubusercontent.com/lodgingzeus",
];

interface UsersCountProps {
    className: string
}

export async function UsersCount({ className }: UsersCountProps) {
    return (
        <div className={cn("py-1 px-4 rounded-full dark:bg-black z-10 border-[0.5px] dark:border-slate-800 flex items-center gap-2" , className)}>
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            <p>
                5000+ peoples used our application

            </p>
        </div>
    )
}
