'use client';

import { Box, Button, Flex, Group, Input, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import TaskItem from './components/ui/task-item';
import { task } from './constants/interface';
import { filter } from './utils/filter';
import { ButtonType } from './constants/constants';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Сделать верстку', completed: false },
    { name: 'Запрограммировать интерфейс', completed: false },
    { name: 'Написать тесты', completed: false },
  ]);
  const [task, setTask] = useState('');
  const [filterType, setFilterType] = useState(ButtonType.ALL);

  const completed = false;
  const leftTasks = tasks.filter((task) => task.completed === completed).length;

  const clickAddHandler = () => {
    if (task) {
      const element = { name: task, completed: false };

      setTasks([...tasks, element]);
      setTask('');
    }
  };

  const changeInputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTask(evt.target.value);
  };

  const completeTask = (item: task) => {
    setTasks(tasks.map((task) => (task === item ? { ...task, completed: !task.completed } : task)));
  };

  const deleteCompletedTasks = () => {
    setTasks([...tasks.filter((task) => task.completed === false)]);
    setFilterType(ButtonType.ALL);
  };

  return (
    <Box
      maxW={'auto'}
      minH={'dvh'}
      m={'auto'}
      bg={'gray.300'}
      zIndex={-100}
    >
      <Text
        fontFamily={'Roboto'}
        fontWeight='thin'
        textAlign={'center'}
        fontSize={128}
        color={'red.300'}
        mb={10}
      >
        todos
      </Text>
      <Box
        maxW={780}
        mx={'auto'}
        mb={10}
        bg={'gray.100'}
      >
        <Group
          attached
          w='full'
        >
          <Input
            flex='1'
            fontFamily={'Roboto'}
            fontWeight='thin'
            placeholder='Enter new task'
            value={task}
            onChange={changeInputHandler}
          />
          <Button
            bg='bg.subtle'
            variant='outline'
            fontFamily={'Roboto'}
            fontWeight='thin'
            onClick={clickAddHandler}
          >
            Add
          </Button>
        </Group>
      </Box>
      <Box
        maxW={780}
        mx={'auto'}
        p={2}
        fontFamily={'Roboto'}
        fontWeight='thin'
        fontStyle={'italic'}
        fontSize={40}
        color={'gray.300'}
        bg={'gray.100'}
        borderBottomWidth={2}
        borderBottomColor={'gray.300'}
        shadow={'lg'}
        shadowColor={'gray.400'}
        zIndex={3}
      >
        <Flex align={'center'}>
          <BsChevronDown display={'inline'} /> What needs to be done?
        </Flex>
      </Box>

      <Box
        maxW={780}
        mx={'auto'}
        bg={'gray.100'}
      >
        {[...filter[filterType](tasks)].map((task) => (
          <TaskItem
            key={task.name}
            task={task}
            onComplete={completeTask}
          />
        ))}
      </Box>

      <Box
        maxW={780}
        mx={'auto'}
        p={2}
        pl={12}
        fontFamily={'Roboto'}
        fontWeight='thin'
        fontSize={40}
        color={'gray.300'}
        bg={'gray.100'}
        borderBottomWidth={1}
        borderBottomColor={'gray.300'}
        shadow={'lg'}
        shadowColor={'gray.400'}
        zIndex={3}
      >
        <Flex
          justify={'space-between'}
          fontFamily={'Roboto'}
          fontWeight='thin'
          fontSize={16}
          align={'center'}
        >
          <Box
            font={'inherit'}
            bg={'transparent'}
            color={'gray.400'}
          >
            {leftTasks} items left
          </Box>
          <Flex gap={4}>
            <Button
              font={'inherit'}
              bg={'transparent'}
              color={'gray.400'}
              onClick={() => setFilterType(ButtonType.ALL)}
            >
              All
            </Button>
            <Button
              font={'inherit'}
              bg={'transparent'}
              color={'gray.400'}
              onClick={() => setFilterType(ButtonType.ACTIVE)}
            >
              Active
            </Button>
            <Button
              font={'inherit'}
              bg={'transparent'}
              color={'gray.400'}
              onClick={() => setFilterType(ButtonType.COMPLETED)}
            >
              Completed
            </Button>
          </Flex>
          <Button
            font={'inherit'}
            bg={'transparent'}
            color={'gray.400'}
            onClick={deleteCompletedTasks}
          >
            Clear completed
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
