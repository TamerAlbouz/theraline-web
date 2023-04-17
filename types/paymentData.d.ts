export type paymentDataModel = {
  Id: string;
  patient_id: string;
  paymentInfo: {
    name: string;
    imageUrl: string;
    email: string;
    date: string;
    paymentStatus: string;
    method: string;
    amount: string;
    Id: string;
  };
};
