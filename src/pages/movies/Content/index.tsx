import Image from "next/image";
type MovieProps = {
    title_id: number,
    title: string,
    poster_path: string,
    release_date: string,
    overview: string,
    seasons: any[]
}

export default function Content(props: MovieProps) {
    const { title, poster_path, release_date, overview, seasons, title_id } = props

    return (

        <main className="pt-[88px] text-center mx-[20%]">
            <section className="">
                <Image
                    height={450}
                    width={300}
                    alt={'Poster da Série Stranger Things'}
                    src={poster_path}
                    className="mx-auto"
                />
                <div className="py-4 flex flex-col gap-4 text-white-primary">
                    <div className="">
                        <h1 className="text-lg">
                            {title}
                        </h1>
                        <h1 className="">({release_date})</h1>
                    </div>
                    <div className="">
                        <p className="text-md">
                            <span className="">Visão Geral: </span>
                            {overview}
                        </p>
                    </div>
                </div>
            </section>

        </main>

    )
}