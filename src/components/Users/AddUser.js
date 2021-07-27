import { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState()
    const errorHandler = () => {
        setError(null)
    }

    const addUserHandler = (event) =>{
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
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
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age (years)</label>
                    <input 
                        id='age' 
                        type='number' 
                        ref={ageInputRef}
                    />
                    <Button buttonType='submit'> add user</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;