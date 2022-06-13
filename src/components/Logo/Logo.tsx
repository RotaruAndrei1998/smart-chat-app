import {GiSmallFishingSailboat} from "react-icons/gi";
import {useRouter} from "next/router";

export default function Logo () {
    const router = useRouter();
    return <div className='flex cursor-pointer' onClick={() => router.push("/")} >
        <GiSmallFishingSailboat className='h-12 w-12' />
        <div className="align-middle m-auto font-bold ml-5">
            Smart Chat App
        </div>
    </div>
}