import React from 'react';
import Input from '../Components/Input';
import { useState } from 'react'
function AddStudent() {
    const [student, setStudent] = useState(0);
    const [titre, setTitre] = useState(0);
    const [description, setDescription] = useState(0);
    const [duration, setDuration] = useState(0);

    const getStudent = (e) => {
        setStudent(parseInt(e.target.value))
    }
    const getTitre = (e) => {
        setTitre(parseInt(e.target.value))
    }
    const getDescription = (e) => {
        setDescription(parseInt(e.target.value))
    }
    const getDuration = (e) => {
        setDuration(parseInt(e.target.value))
    }

    const printValue = (e) => {
        e.preventDefault()
        sendValue(inputVal)
        calculate()
        setInputVal(0)

    }

    return <div>
        {/* <form onSubmit={printValue} className='col' > */}
            <Input label='Student' sendValue={getStudent} calculate={() => dispatch({ type: "recharge" })} />
            <Input label='Titre' sendValue={getTitre} calculate={() => dispatch({ type: "recharge" })} />
            <Input label='Description' sendValue={getDescription} calculate={() => dispatch({ type: "recharge" })} />
            <Input label='Duration' sendValue={getDuration} calculate={() => dispatch({ type: "recharge" })} />
            <button type='submit'>Recharger</button>
        {/* </form> */}
    </div>;
}

export default AddStudent;

