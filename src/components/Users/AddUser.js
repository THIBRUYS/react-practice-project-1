import {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
    const [enteredUserName, setEnteredUsername] = useState('');
    const userNameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const [enteredAge, setEnteredAge] = useState('');
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const [error, setError] = useState()
    const errorHandler = () => {
        setError(null)
    }

    const addUserHandler = (event) =>{
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age, non empty-values'
            });
            return;
        };
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age (>0)'
            });
            return;
        };
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id='username' 
                        type='text' 
                        onChange={userNameChangeHandler} 
                        value={enteredUserName}
                    />
                    <label htmlFor='age'>Age (years)</label>
                    <input 
                        id='age' 
                        type='number' 
                        onChange={ageChangeHandler} 
                        value={enteredAge}
                    />
                    <Button buttonType='submit'> add user</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;