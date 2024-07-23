import noproject from '../assets/no-projects.png';
import Button from './Button';

export default function NoProject({switchProject}) {
    return (
        <div className="flex flex-col grow min-h-screen justify-center items-center gap-5">
            <img src={noproject} alt="" className='w-20 bg-none '/>
            <h1 className='text-2xl text-[#625f5c] font-bold'>No Project Selected</h1>
            <h2 className='text-[#9a9692]'>Select a project or get started with a new one</h2>
            <Button handelClick={() => switchProject(-1)} text="Create new project" bgColor=" bg-[#100e0c] " textColor=" text-[#9a9692] "></Button>
        </div>
    )
}