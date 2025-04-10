import { Box, Button, Flex, Group, Input, Text } from '@chakra-ui/react';
import TaskItem from './components/ui/task-item';
import { BsChevronDown } from 'react-icons/bs';

const tasks = [
  { name: 'Сделать верстку', isActive: true },
  { name: 'Запрограммировать интерфейс', isActive: true },
  { name: 'Написать тесты', isActive: true },
];

function App() {
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
        {tasks.map((task) => (
          <TaskItem task={task} />
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
