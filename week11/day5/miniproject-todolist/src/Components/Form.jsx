import './Form.css'
const Form = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="text"></label>
            <input type="text" name="text" placeholder="I'm waiting for your useless task like washing dishes or trying to go to bed before 4 am." />
        </form>
    )
}

export default Form