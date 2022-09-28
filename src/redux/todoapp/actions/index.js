import axios from 'axios';


export const ADD_TODO = 'ADD_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';


export const getListProduct =() =>
  async (dispatch)=> {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(res.data);
        dispatch({type: 'GET_TODO', payload: res.data});
    } catch (error) {
        console.log(error);
    }
  };


export const addTodo=(payload)=>{
    return{
        type: ADD_TODO,
        payload
    }
}

export const deleteAll = () =>{
    return{
        type: DELETE_ALL
    }
}

export const removeTodo=(payload)=>{
    return{
        type: REMOVE_TODO,
        payload
    }
}

export const handleEditSubmit=(payload)=>{
    return{
        type: UPDATE_TODO,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}