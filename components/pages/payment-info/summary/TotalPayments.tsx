const arr = [
  { amount: "$997", text: "This Week So Far..." },
  { amount: "$27,000", text: "This Month So Far..." },
  { amount: "$97,000", text: "All Time..." },
];

function TotalPayments() {
  return (
    <div
      className="flex h-full w-full flex-grow flex-col justify-start gap-8 rounded-md bg-primary p-5 md:w-1/3 xl:w-1/5
        ">
      <h1 className="mb-3 text-2xl font-bold text-textColor">TOTAL PAYMENTS</h1>
      {arr.map((item) => (
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-normal text-textColor">{item.amount}</p>
          <p className="text-xl font-medium text-textColor">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default TotalPayments;
