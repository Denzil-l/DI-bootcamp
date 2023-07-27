import './List.css'

const List = (props) => {
    return (
        <div className="List">
            {props.list.map(item => (
                <div onClick={() => props.handleDelete(item)} className="task">{item}</div>
            ))}
        </div>
    )

}

export default List