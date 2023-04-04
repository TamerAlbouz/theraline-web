import Image from "next/image";

function ProfileMenu() {
  return (
    <div className="ml-2 flex w-full flex-row items-center gap-3 md:ml-0 md:px-5">
      <Image
        width={50}
        height={50}
        className="h-8 w-8 rounded-full md:h-12 md:w-12"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />

      <div className="hidden md:block">
        <h2 className="text-xl font-semibold text-textColor">Tim Cook</h2>
        <p className="text-secondary">Therapist</p>
      </div>
    </div>
  );
}

export default ProfileMenu;
