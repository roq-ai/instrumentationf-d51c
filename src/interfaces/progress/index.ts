import { UserInterface } from 'interfaces/user';
import { LessonInterface } from 'interfaces/lesson';
import { GetQueryInterface } from 'interfaces';

export interface ProgressInterface {
  id?: string;
  user_id?: string;
  lesson_id?: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  lesson?: LessonInterface;
  _count?: {};
}

export interface ProgressGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  lesson_id?: string;
  status?: string;
}
