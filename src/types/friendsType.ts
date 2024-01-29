export type FriendsType = {
  id: number;
  friendId: number;
  firstName: string;
  lastName: string;
  chineseName?: string | null | undefined;
  address: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  country: string | null;
  phone: string | null;
  email: string;
  DNS: boolean | null;
  Notes: string | null;
};
