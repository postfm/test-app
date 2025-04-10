'use client';

import { task } from '@/constants/interface';
import { Box, Checkbox } from '@chakra-ui/react';

interface TaskListProps {
  task: task;
  onComplete: (task: task) => void;
}

export default function TaskItem({ task, onComplete }: TaskListProps) {
  return (
    <Box
      pt={8}
      pl={4}
      pb={8}
      borderBottomWidth={1}
      borderBottomColor={'gray.300'}
      key={task.name}
    >
      <Checkbox.Root
        variant={'outline'}
        colorPalette={'green'}
        size={'lg'}
      >
        <Checkbox.HiddenInput onChange={() => onComplete(task)} />
        <Checkbox.Control />
        <Checkbox.Label
          fontFamily={'Roboto'}
          fontWeight='thin'
          fontSize={36}
          color={task.completed ? 'gray.300' : 'gray.600'}
          textDecoration={task.completed ? 'line-through' : 'none'}
          textDecorationThickness={task.completed ? '1px' : '0'}
        >
          {task.name}
        </Checkbox.Label>
      </Checkbox.Root>
    </Box>
  );
}
