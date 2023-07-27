import { useEffect, useState } from "react"
import posts from './data.json'
import './PostList.css'
const PostList = (props) => {
    const [data, setData] = useState(posts)
    return (
        <div>
            <h1>Hi this is a Title</h1>
            <ul>
                {data.map(item => (
                    <ul>
                        <li className="fat" key={item.title}>{item.title}</li>
                        <li key={item.content}>{item.content}</li>
                    </ul>
                ))}
            </ul>
        </div>
    )
}


export default PostList