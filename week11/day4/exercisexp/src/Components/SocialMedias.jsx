import { useState } from "react"

const SocialMedias = (props) => {
    const [data, setData] = useState(props.data)

    return (
        data.map(item => (
            <div key={item}>{item}</div>
        ))
    )
}
export default SocialMedias