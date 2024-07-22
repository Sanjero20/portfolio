interface Props {
  header: string;
  data: string[];
}

const SectionList = ({ header, data }: Props) => {
  return (
    <>
      <h4>{header}</h4>

      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SectionList;
