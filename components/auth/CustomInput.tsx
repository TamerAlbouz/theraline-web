// Custom Input function for email and password
export function CustomInput({
  label,
  type,
  placeholder,
  register,
  error,
  htmlForValue,
}: {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  error: any;
  htmlForValue: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlForValue}
        className="mb-2 block text-lg font-bold text-primary-dark">
        {label}
      </label>
      <input
        id={htmlForValue}
        {...register}
        type={type}
        placeholder={placeholder}
        className="focus:shadow-outline block w-full appearance-none rounded-md border p-3 leading-tight text-primary-dark shadow focus:outline-none"
      />
      <span className="text-base text-red-600">{error}</span>
    </div>
  );
}
