export type paymentDataModel = {
  _id: string;
  patient_id: string;
  fullName: string;
  imageUrl: string;
  email: string;
  paymentInfo:
    | {
        amount: string;
        status: string;
        method: string;
        date: string;
        _id: string;
      }
    | undefined;
};

export type getPayments = {
  docs: paymentDataModel[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: number;
};
