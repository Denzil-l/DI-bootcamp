import { useState } from "react"

const Skills = (props) => {
    const [data, setData] = useState(props.data)

    return (
        <div>
            {data.map((item) => (
                <div key={item.Area}>
                    <h2>{item.Area}</h2>
                    {item.SkillSet.map((i) => (
                        <div key={i.Name}>
                            <span>{i.Name}</span>
                            <span>{i.Hot ? '   true' : '   false'}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
export default Skills