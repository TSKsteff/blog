import Link from "next/link"
import face from '@/img/face.png'
import intagran from '@/img/th.png'
import youtube from '@/img/youtube.png'

const Header = () =>{
    return(
        <div className="w-full py-2 flex justify-center bg-slate-300">
            <div className="max-w-screen-lg w-[90%] items-center flex justify-between text-black">
                <div className="font-bold text-lg ">UniViagens</div>
                <div className="flex gap-8 items-center">
                    <Link href={'/'} className="no-undeline font-semibold hover:opacity-90">Home</Link>
                    <Link href={'/'} className="no-undeline font-semibold hover:opacity-90">Blog</Link>
                    <Link href={'/'} className="no-undeline font-semibold hover:opacity-90">Contact</Link>
                    <div className="flex gap-2 items-center">
                            <  img
                                src={intagran.src}
                                width="450"
                                height="600"
                                alt="Artist"
                                className="mx-auto w-[20px] h-[20px] object-cover "
                            />
                            <   img
                                src={youtube.src}
                                width="450"
                                height="600"
                                alt="Artist"
                                className="mx-auto w-[20px] h-[20px] object-cover "
                            />
                            <   img
                                src={face.src}
                                width="450"
                                height="600"
                                alt="Artist"
                                className="mx-auto w-[20px] h-[20px] object-cover "
                            />
                    </div>
                </div>
            </div>            
        </div>
    ) 
}

export default Header