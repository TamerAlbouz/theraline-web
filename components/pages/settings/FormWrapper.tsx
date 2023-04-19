function FormWrapper(props: {
  title: String;
  description: String;
  Child: any;
}) {
  const { title, description, Child } = props;
  return (
    <div className="w-full rounded-lg bg-primary p-5 text-lg font-medium text-textColor">
      <div className="flex flex-row items-start">
        <div className="flex flex-col">
          <span className="mt-2 mb-4 text-2xl font-bold">{title}</span>

          <span className="text-md mb-6">{description}</span>

          <Child />
        </div>
      </div>
    </div>
  );
}

export default FormWrapper;
