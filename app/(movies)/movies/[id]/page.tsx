import MovieInfo, { getMovie } from "../../../../components/Movie-info/movie-info"
import MovieVideo from "../../../../components/Movie-video/movie-video"
import { Suspense } from "react"


interface Iparams {
    params: { id: string }
}

export async function generateMetadata({ params: { id } }: Iparams) {
    const movie = await getMovie(id)
    return {
        title: movie.title
    }
}


export default async function MovieDetailPage({ params: { id } }: Iparams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading Movie Info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Movie Video...</h1>}>
                <MovieVideo id={id} />
            </Suspense>

        </div>
    )
}