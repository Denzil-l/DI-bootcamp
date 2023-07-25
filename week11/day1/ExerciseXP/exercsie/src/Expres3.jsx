import React from "react";
import './Exercise.css'
class Exercise extends React.Component {
    render() {
        const { styles } = this.props

        return (
            <div>
                <h1 style={{ color: styles.color, backgroundColor: styles.backgroundColor, padding: styles.padding, fontFamily: styles.fontFamily }}>HEllo World</h1>


                <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio officiis deserunt eveniet, sequi aliquid ipsum molestiae consequatur a mollitia, aut dolore, accusamus voluptatum eos similique ab ducimus adipisci fugit aperiam.</p>

                <a href="">Link</a>
                <form>
                    <input type="text" />
                    <button>Click</button>
                </form>
                <img src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%208/Day1/Exercise%20XP%20Gold/XP%20Gold.png" alt="" />
                <ul>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                    <li>Lorem, ipsum.</li>
                </ul>
            </div>
        )
    }
}


export default Exercise