import ReactFlipCard from "reactjs-flip-card";

const FlipItem = () => {
  const styles = {
    card: { background: "blue", color: "white", borderRadius: 20 },
  };
  return (
    <ReactFlipCard
      flipTrigger="onHover"
      frontStyle={styles.card}
      backStyle={styles.card}
      frontComponent={<div>Hover me!</div>}
      backComponent={<div>Back!</div>}
    />
  );
};

export default FlipItem;
