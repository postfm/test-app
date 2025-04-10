import { ButtonType } from '@/constants/constants';
import { task } from '@/constants/interface';

const filter = {
  [ButtonType.ALL]: (tasks: task[]) => [...tasks],
  [ButtonType.ACTIVE]: (tasks: task[]) => [...tasks.filter((task) => task.completed === false)],
  [ButtonType.COMPLETED]: (tasks: task[]) => [...tasks.filter((task) => task.completed === true)],
};

export { filter };
