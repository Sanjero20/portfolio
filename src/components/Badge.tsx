
interface Props {
 children: React.ReactNode 
}

const Badge = ({ children }: Props) => {
  return (
    <div className="badge badge-outline badge-lg cursor-pointer hover:bg-neutral hover:text-white">
      {children}
    </div>
  );
};

export default Badge;
