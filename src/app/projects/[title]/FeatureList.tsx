interface Props {
  features: string[];
}

const FeatureList = ({ features }: Props) => {
  return (
    <ul>
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  );
};

export default FeatureList;
