import { useState } from 'react';
import { Box, Button, Checkbox, Stack, TextField, Typography } from './Todo.styled';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

type MonthlyTodoType = Record<string, TodayTodoType[]>;

type TodayTodoType = {
    done: boolean;
    text: string;
};

const Todo = () => {
    const [value, setValue] = useState('');
    const [monthlyTodos, setMonthlyTodos] = useState<MonthlyTodoType>({});
    const [todayTodos, setTodayTodos] = useState<TodayTodoType[]>([]);

    const handlePush = () => {
        setTodayTodos([
            ...todayTodos.filter((item) => item.text !== value),
            {
                done: false,
                text: value,
            },
        ]);
        setMonthlyTodos(
            Object.assign(monthlyTodos, {
                [new Date().getMonth()]: [
                    ...(monthlyTodos?.[new Date().getMonth()]?.filter((item) => item.text !== value) ?? []),
                    {
                        done: false,
                        text: value,
                    },
                ],
            }),
        );
        setValue('');
    };

    const handleCheck = (index: number) => {
        const targetIndex = todayTodos[index];
        if (targetIndex) {
            targetIndex.done = !targetIndex.done;
            setMonthlyTodos({
                ...monthlyTodos,
                [new Date().getMonth()]: [
                    ...(monthlyTodos?.[new Date().getMonth()]?.filter((item) => item.text !== targetIndex.text) ?? []),
                    {
                        done: targetIndex.done,
                        text: targetIndex.text,
                    },
                ],
            });
        }
        setTodayTodos([...todayTodos]);
    };

    const handleRemove = (index: number) => {
        const newTodo = todayTodos.filter((todo, i) => i !== index);
        setTodayTodos(newTodo);
    };

    return (
        <div>
            <Typography variant="h1">Todo Page</Typography>
            <Box>
                <Typography className="subtitle" variant="h4">
                    Monthly Todo
                </Typography>
                <Stack>
                    {Object.entries(monthlyTodos).map(([key, value]) => {
                        return (
                            <Stack>
                                <Typography variant="h3">{Number(key) + 1} Month</Typography>
                                <Stack>
                                    {value.map((todo, index) => {
                                        return (
                                            <Stack className="todo-list">
                                                <Checkbox checked={todo.done} />
                                                <Typography
                                                    key={index}
                                                    className={todo.done ? 'todo-done' : 'todo-undone'}
                                                    variant="body1"
                                                >
                                                    {todo.text}
                                                </Typography>
                                            </Stack>
                                        );
                                    })}
                                </Stack>
                            </Stack>
                        );
                    })}
                </Stack>
            </Box>
            <Box>
                <Typography className="subtitle" variant="h4">
                    Today Todo
                </Typography>
                <Stack className="input-field">
                    <TextField size="small" value={value} onChange={(event) => setValue(event.currentTarget.value)} />
                    <Button className="input-button" onClick={handlePush}>
                        Push
                    </Button>
                </Stack>
                <Stack>
                    {todayTodos.map((todo, index) => {
                        return (
                            <Stack className="todo-list">
                                <Checkbox checked={todo.done} onClick={() => handleCheck(index)} />
                                <Typography
                                    key={index}
                                    className={todo.done ? 'todo-done' : 'todo-undone'}
                                    variant="body1"
                                >
                                    {todo.text}
                                </Typography>
                                <Button onClick={() => handleRemove(index)}>Remove</Button>
                            </Stack>
                        );
                    })}
                </Stack>
            </Box>
        </div>
    );
};

export default Todo;
