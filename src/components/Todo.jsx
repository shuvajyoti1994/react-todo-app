import React,{useState} from 'react'
import "./Style1.css"
import Todo1 from './Todo1';

function Todo() {
    const [input, setInput] = useState("");
    const [x , setX]=useState([]);

    const changeHandle=()=>{
        if(input !== ''){
            setX((preVal)=>{
                return [...preVal,input]
            });
            setInput('');
        }
       
     
    };

    const itemClick = (e)=>{
        setInput(e.target.value)
    }
    const deleteItem=(id)=>{
        console.log("deleted")
        setX((oldItem)=>{
            return oldItem.filter((arrey,Index)=>{
                console.log("index",Index)
                console.log("id",id)
                return Index!==id
            })
        })
    }
  return (
    <div className='main_div'>
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder='Add a Items'onChange={itemClick} value={input} />
            <button className='btn' onClick={changeHandle}>+</button>

            <ol> 
               { x.map((val,index)=>{
                    return <Todo1 text={val} key={index} id={index} onselect={deleteItem}/>
                })}
            </ol>
        </div>

    </div>
  )
}

export default Todo