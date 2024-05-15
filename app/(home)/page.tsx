import Link from "next/link"
import Navigation from "../../components/navigation"
import Movie from "../../components/Movie/movie";
import styles from "./home.module.css"
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};
/**
 * 이게 개쩌는게 이코드는 백에서 사용되는거라 브라우저에 전달되지않음.
 * 보안적으로 안전하다는 소리임
 * 하지만 단점으로는 api응답이 오기전까지는 html페이지를 만들어서 전달하지않음
*/


async function getMovies() {
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies()
  return (
    <div className={styles.container}>
      {
        movies.map((movie) => {
          return (
            <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path}/>
          )
        })
      }
    </div>
  )
}
