import React, { useState } from 'react';

const Home = () => {
    const [nameTask, setNameTask] = useState(""); //Estado del input, se inicializa vacio para alamcenar los datos introducidos por el usuario, el valor se almacebara como tarea
    const [listTask, setListTask] = useState([]); // estado de la lista de tareas, se inicializa como un arreglo vacio, debido a que se almacenaran las tareas, [tarea1, tarea2, tarea3....]
    const [campo, setCampo] = useState(false); // Estado del Alert, se inicializa false o inactivo, se cambiara cuando se dispare le boton con el campo del input vacio.

    /* Constante que almacena el todoList, se pasa como argumento el evento y se le aplica el Prevent Default para anular el comportamiento por defecto del Formulario*/
    const sendForm = (e) => {
        e.preventDefault();

        /*Comparacion Imput, al estar vacio dispara el Estado de falso a True, la función trim() se utiliza para eliminar los espacios vacios al inicio y final de un texto. Al colocarle valores al input el estado regresa a su estado inicial osea False*/
        if (!nameTask.trim()) {
            setCampo(true);
            return;
        } else {
            setCampo(false);
        }

        /* Se utiliza el Operador de Propagación para agregar una nueva tarea al arreglo, sin modificar el arreglo, [tarea1, tarea2, tarea3..., tarea4], se agregara al final con el estado nameTask y posterior se gatilla el estado setNametask para colocar el input nuevamente eb vacio*/
        setListTask([...listTask, nameTask]);
        setNameTask(" ");
    };

    /* Funcion que nos permite recuperar el valor del input*/

    const captureTask = (e) => {
        setNameTask(e.target.value);
    };

    /* Funcion que nos permite eliminar una tarea, se debe eliminar por el indice, para que al momento de filtrar se verifique que el indice ateriormente borrado ya no esxiste y por ende no se debe renderizar*/
    const deleteTask = (index) => {
        const newList = listTask.filter((task, i) => i !== index);
        setListTask(newList);
    };

    return (
        <>
            <div className="formTask">
                <form onSubmit={sendForm}>
                    <input type="text" onChange={captureTask} value={nameTask} placeholder="Add task" />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {listTask.map((task, index) => ( /* Le aplicamsos un maps a la lista de tareas*/
                        <li key={index}>
                            - {task}
                            <button className='bDelete' onClick={() => deleteTask(index)}>X</button>
                        </li>
                    ))}
                </ul>
                {/* Utilizando un operador ternario verificamos el estado de listTask, si es igual a  0, eso nos indica que esta vacio y por ende activamos el texto de las tareas, caso contrario contamos el numero de tarea y lo imprimimos*/}
                {listTask.length === 0 ? <h3>No hay Tareas Pendientes</h3> : <h3>Numero de Tareas: {listTask.length}</h3>}
            </div>
            {/* verificamos el Estado de Campo con un operador ternario, si esta vacio activamos el alert, caso contrario queda null*/}
            {campo ? <p className='alert'>El Campo Agregar Tarea no puede estar vacio</p> : null}
        </>
    );
};

export default Home;