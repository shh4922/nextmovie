import { resolve } from "path"
import style from "./style.module.css"
import { API_URL } from "../../app/constants"
const getVideo = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}/videos`)
    return response.json()
    // await new Promise((resolve)=> setTimeout(resolve, 3000))
    // throw new Error('something error!')
}

export default async function MovieVideo({ id }: { id: string }) {
    const videos = await getVideo(id)

    return (
        <div className={style.container}>
            {
                videos.map((video) => {
                    return (
                        <iframe key={video.id} src={`https://www.youtube.com/embed/${video.key}`} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={video.name}/>
                    )
                })
            }
        </div>
    )


}