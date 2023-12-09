import {useState, useReducer} from 'react';
import {data} from '../../../data';
import {CLEAR_LIST, RESET_LIST, REMOVE_ITEM} from "./actions.js";
import reducer from "./reducer.js"

const defaultState = {
    people: data,
    isLoading: false
}


const ReducerBasics = () => {

    //useReducer hook needs 2 parameters a reducer and a default state
    //we are getting back a state and a dispatch that will update the state
    const [state, dispatch] = useReducer(reducer, defaultState)
    const reset = () => {
        dispatch({type: RESET_LIST});
    }
    const clear = () => {
        dispatch({type: CLEAR_LIST})
        // setPeople([])
    }
    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload: {id}})
        /*   let newPeople = people.filter((person) => person.id !== id);
           setPeople(newPeople);*/
    };
    return (
        <div>
            {state.people.map((person) => {
                const {id, name} = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}
            {
                state.people !== data ?
                    <button
                        className='btn'
                        style={{marginTop: '2rem'}}
                        onClick={reset}
                    >
                        Reset
                    </button> :
                    <button
                        className='btn'
                        style={{marginTop: '2rem'}}
                        onClick={clear}
                    >
                        clear items
                    </button>

            }
        </div>
    );
};

export default ReducerBasics;
