import { ProgressInterface } from 'interfaces/progress';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface LessonInterface {
  id?: string;
  name: string;
  description?: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  progress?: ProgressInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    progress?: number;
  };
}

export interface LessonGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  user_id?: string;
  organization_id?: string;
}
