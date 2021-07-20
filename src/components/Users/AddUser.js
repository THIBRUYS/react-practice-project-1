import {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

const AddUser = () => {
    const [enteredUserName, setEnteredUsername] = useState('');
    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const [enteredAge, setEnteredAge] = useState('');
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const addUserHandler = (event) =>{
        event.preventDefault();
        console.log(enteredUserName, enteredAge);
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text' onChange={userNameChangeHandler} value={enteredUserName}/>
                <label htmlFor='age'>Age (years)</label>
                <input id='age' type='number' onChange={ageChangeHandler} value={enteredAge}/>
                <Button buttonType='submit'> add user</Button>
            </form>
        </Card>
    );
};

export default AddUser;