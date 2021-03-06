import {useState} from 'react'
import React from 'react'
import './Input.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToDo, deleteToDo, removeToDo } from '../Actions/allActions';

export default function Input() {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state)=>state.todoReducers.list);
    const dispatch = useDispatch();
    const [removeAll, setRemoveAll] = useState(false);

    return (
        <div>
            <div className="heading align-middle">
                <h1>Welcome to To-Do App</h1>
            </div>
            <div className="align-middle mb-4">
                <form> 
                    <input type="text" placeholder="Enter To-Do Here" value={inputData} 
                    onChange={(event) => setInputData(event.target.value)}/>
                    <span className="btn btn-dark submit align-self-center”" onClick={() => {dispatch(addToDo(inputData), setInputData(''))}}
                     >Add</span>
                </form>
            </div>
            <div className="items">
                {
                    list.map((elem) => {
                        return (
                        <div className="disp">
                            <div key={elem.id} className="inner align-middle mb-4">
                                <h3>{elem.data}</h3>
                            </div>
                            <span className="submit btn btn-dark align-self-center”" onClick={() => dispatch(deleteToDo(elem.id))}>Delete</span>
                        </div>
                        )
                    })
                }
            </div>
            <div>
            { (list.length !== 0) ? <span className="remove btn btn-dark align-self-center" 
            onClick={() => dispatch(removeToDo())}>Remove All</span> : null }
            </div>
        </div>
    )
}
