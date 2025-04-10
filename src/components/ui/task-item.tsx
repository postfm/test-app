'use client';

import { Box, Checkbox } from '@chakra-ui/react';

interface TaskItemProps {
  task: {
    name: string;
    isActive: boolean;
  };
}

export default function TaskItem({ task }: TaskItemProps) {
  const x = 0;
  return (
    <Box
      pt={8}
      pl={4}
      pb={8}
      borderBottomWidth={1}
      borderBottomColor={'gray.300'}
    >
      <Checkbox.Root
        variant={'outline'}
        colorPalette={'green'}
        size={'lg'}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label
          fontFamily={'Roboto'}
          fontWeight='thin'
          fontSize={36}
          color={x ? 'gray.600' : 'red.600'}
        >
          {task.name}
        </Checkbox.Label>
      </Checkbox.Root>
    </Box>
  );
}
