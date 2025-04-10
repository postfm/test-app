'use client';

import { Box, Button, Flex, Group, Input, Text } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
import TaskList from './components/ui/task-list';

function App() {
  const [tasks, setTasks] = useState([
    { name: 'Сделать верстку', isActive: true },
    { name: 'Запрограммировать интерфейс', isActive: true },
    { name: 'Написать тесты', isActive: true },
  ]);

  const clickAddHandler = () => {
    const element = { name: 'Проверка', isActive: true };
    tasks.push(element);
    setTasks(tasks);
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
            placeholder='Enter new task'
          />
          <Button
            bg='bg.subtle'
            variant='outline'
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

      <TaskList tasks={tasks} />

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
            2 items left
          </Box>
          <Flex gap={4}>
            <Button
              font={'inherit'}
              bg={'transparent'}
              color={'gray.400'}
            >
              All
            </Button>
            <Button
              font={'inherit'}
              bg={'transparent'}
              color={'gray.400'}
            >
              Active
            </Button>
            <Button
              font={'inherit'}
              bg={'transparent'}
              color={'gray.400'}
            >
              Completed
            </Button>
          </Flex>
          <Button
            font={'inherit'}
            bg={'transparent'}
            color={'gray.400'}
          >
            Clear completed
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
