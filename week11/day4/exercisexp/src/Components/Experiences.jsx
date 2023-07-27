import { useState } from "react"

const Experiences = (props) => {
    const [data, setData] = useState(props.data)

    return (
        <div>
            {data.map((item) => (
                <div key={item.companyName}>
                    <h2>{item.companyName}</h2>
                    <img src={item.logo} alt="" />
                    <h2>{item.url}</h2>
                    <ul>
                        {item.roles.map((i) => (
                            <div key={i.title}>
                                <li>{i.title}</li>
                                <li>{i.description}</li>
                                <li>{i.startDate}</li>
                                <li>{i.endDate}</li>
                                <li>{i.location}</li>
                                +                        </div>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default Experiences