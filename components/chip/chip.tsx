interface IChip {
  title: string;
}

export const Chip: React.FC<IChip> = ({ title }) => {
  return (
    <span className="text-sm m-1 italic bg-green text-light px-2 py-0.5 rounded-md inline-block">
      {title}
    </span>
  );
};
