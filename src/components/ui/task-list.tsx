'use client';

import { Box } from '@chakra-ui/react';
import TaskItem from './task-item';

interface TaskListProps {
  tasks: {
    name: string;
    isActive: boolean;
  }[];
}

export default function TaskList({ tasks }: TaskListProps) {
  console.log(tasks);
  return (
    <Box
      maxW={780}
      mx={'auto'}
      bg={'gray.100'}
    >
      {tasks.map((task) => (
        <TaskItem
          key={task.name}
          task={task}
        />
      ))}
    </Box>
  );
}
