function AuthBackgroundCard(props: any) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="my-4 flex items-center justify-center rounded-lg bg-white bg-opacity-70 py-8 px-6 shadow-sm shadow-primary drop-shadow-sm backdrop-blur-xl">
        {props.children}
      </div>
    </div>
  );
}

export default AuthBackgroundCard;
