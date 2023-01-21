import Header from "../../../components/Header";
import Text from "../../../components/Text";
import Card from "../Card";

export async function getStaticProps(context: any) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=37515be8a40c641389533f4f4c0724ee&language=pt-BR&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`
  const getDatas = await fetch(url)
  const datas = await getDatas.json()

  return { props: { datas } }
}

export default function Animes({ datas }: any) {
  const popularAnimes = datas.results
type AnimesProps = {
    title: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    id: number,
    overview: string
  }
  return (
    <>
      <Header />
      <div className="min-h-screen w-full p-8 mt-32">
        <Text className="text-white-primary text-left w-full mb-4">Descubra novos Filmes</Text>
        <ul className="grid grid-cols-5 grid-rows-4 gap-4 max-md:grid-cols-2 ">

          {
            popularAnimes.map((movie: AnimesProps) => {
              console.log(movie)
              const year = +movie.release_date.slice(0, 4)
              const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

              return (
                <Card
                  overview={movie.overview}
                  href={movie.id}
                  name={movie.title}
                  poster_path={url}
                  release_date={year}
                />
              )
            })
          }

        </ul>
      </div>
    </>
  );
}