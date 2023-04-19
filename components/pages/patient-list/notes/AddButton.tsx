import { HiPlus } from "react-icons/hi";

function AddButton(props: any) {
  const { openModal } = props;
  return (
    <button
      type="button"
      onClick={openModal}
      className="cursor-pointer rounded-full bg-white p-3 transition-all duration-200 hover:bg-gray-100">
      <HiPlus className="h-7 w-7 text-primary" />
    </button>
  );
}

export default AddButton;
