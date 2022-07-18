import { List } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import Form from '../components/Form';
import { TodoItem } from '../components/Todoitem';


function Home() {

    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id  ) => {
        console.log(id)
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered)
    }

    return (
        <Container maxWidth="xs" style={{marginTop: "3em"}}>
            <Form addTodo={addTodo}/>
            <List sx={{marginTop: "1em" }}>
                {todos.map((todo) => ( 
                    <div key={todo.id} style={{ marginTop: "1em" }}>
                        <TodoItem todo={todo} deleteTodo={deleteTodo}/>
                    </div>
                ))}
            </List>
        </Container>
    )
}

export default Home;