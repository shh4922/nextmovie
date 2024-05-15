'use client'

import Link from "next/link"
import styles from "./movie.module.css"
import { useRouter } from "next/navigation"

interface ImovieProps {
    title: string
    id: number
    poster_path: string
}
export default function Movie({title,id,poster_path}: ImovieProps) {
    const router = useRouter()
    const onClick = () => {
        router.push(`/movies/${id}`)
    }
    return (
        <div className={styles.movie} onClick={onClick}>
            <img src={poster_path} alt={title}></img>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}