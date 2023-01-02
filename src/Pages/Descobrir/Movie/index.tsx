import { Button } from "flowbite-react";
import Image from "next/image";

export default function Movie(){
    return(
        
        <div className="w-screen overflow-hidden h-screen">
            <div className="bg-[url('/stranger-background.jpg')] bg-no-repeat bg-cover h-screen mt-[88px] bg-center">
                <div className="bg-black bg-opacity-70 h-full w-full">
                    <div className="flex h-full w-full justify-center items-center">
                        <main className="flex items-center gap-8 max-w-[850px] max-h-[330px] max-md:max-h-full max-md:translate-y-0 max-md:flex-col max-md:py-4 -translate-y-14">
                            <Image
                            height={450}
                            width={300}
                            alt={'Poster da Série Stranger Things'}
                            src={'/stranger.jpg'}
                            className=' w-[300px]'
                            />
                            <div className="infos flex flex-col gap-2 max-md:px-4">
                                <div className="flex justify-center">
                                    <h1 className="text-white-primary text-lg">Stranger Things</h1>
                                    <h1 className="text-white-primary text-lg">(2016)</h1>
                                </div>
                                <div className="description">
                                    <p className="text-white-primary text-md text-justify max-md:text-sm">
                                        <span className="max-md:text-sm">Visão Geral: </span>
                                        Quando um menino desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, forças sobrenaturais aterrorizantes e uma garotinha estranha.
                                    </p>
                                </div>
                            </div>
                        </main>
                    </div>
                    <button className="text-white-primary">Adicionar </button>
                </div>
                
            </div>
        </div>
    )
}