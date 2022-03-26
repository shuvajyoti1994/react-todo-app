import React from 'react'

function Todo1(props) {
    // const [input, setInput] = useState("");

    return (
        <>
            <div className="todo_style">
                {/* <h4>+</h4> */}
                {/* <i className='fa fa-times' aria-hidden='true'/> */}
                <li key={props.id}><button onClick={()=>{
                    props.onselect(props.id)
                }} className='btn_sm'>  ❌ </button>{props.text}  </li>
            </div>
        </>
    );
}

export default Todo1;