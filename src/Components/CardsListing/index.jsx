import Card from "../Card";

const CardListing = ({ cities }) => {
  return cities?.map((city, index) => (
    <Card
      key={index}
      city={city?.city}
      imgsrc={city?.imgsrc}
      
    />
  ));
};
export default CardListing;
