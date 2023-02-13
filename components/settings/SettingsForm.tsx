function CardWrapper(props: any) {
  return (
    <div className="rounded-md bg-primary p-5 text-lg font-medium text-white">
      {props.children}
    </div>
  );
}

export function PersonalInfoBodyCard() {
  return (
    <CardWrapper>
      <p>Full Name:</p>
    </CardWrapper>
  );
}
