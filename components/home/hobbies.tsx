const Hobbies = (props: { hobbies: string }) => {
  const { hobbies } = props;

  return (
    <div className="mt-6 text-electric-blue text-base md:text-lg tracking-wide">
      <p className="text-2xl mb-2 underline font-bold">Hobbies</p>
      <p>{hobbies}</p>
    </div>
  );
};

export default Hobbies;
