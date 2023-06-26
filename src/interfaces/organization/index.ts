import { AccessRequestInterface } from 'interfaces/access-request';
import { OrganizationUserInterface } from 'interfaces/organization-user';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  access_request?: AccessRequestInterface[];
  organization_user?: OrganizationUserInterface[];
  user?: UserInterface;
  _count?: {
    access_request?: number;
    organization_user?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
