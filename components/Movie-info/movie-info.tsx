import { API_URL } from "../../app/(home)/page"
import styles from "./style.module.css"

export const getMovie = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`)
    return response.json()
}

export default async function MovieInfo({ id }: { id: string }) {
    const movieInfo = await getMovie(id)
    return (
        <div className={styles.container}>
            <img src={movieInfo.poster_path} className={styles.poster} alt={movieInfo.title}></img>
            <div className={styles.info}>
                <h1>{movieInfo.title}</h1>
                <h3> {movieInfo.vote_average.toFixed(1)}</h3>
                <p>{movieInfo.overview}</p>
                <a href={movieInfo.homepage} target={"_blank"}>Homepage &rarr;</a>
            </div>
        </div>
    )
}