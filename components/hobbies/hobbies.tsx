export const Hobbies = (props: { hobbies: string }) => {
  const { hobbies } = props;

  return (
    <div className="mt-6 text-primary text-base md:text-md tracking-wide">
      <p className="text-xl mb-2 underline font-semibold">Hobbies</p>
      <p>{hobbies}</p>
    </div>
  );
};
