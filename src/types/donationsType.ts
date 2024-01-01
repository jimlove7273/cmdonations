export type DonationsType = {
  id: number;
  donationDate: Date;
  Type: string;
  Check?: string | null;
  Amount: number;
  For?: string | null;
  Notes?: string | null;
};
