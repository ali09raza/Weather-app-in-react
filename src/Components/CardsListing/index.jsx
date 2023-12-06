import Card from "../Card";

const CardListing = ({ cities, onClick }) => {
  return cities?.map((city, index) => (
    <Card
      key={index}
      city={city?.city}
      imgsrc={city?.imgsrc}
      onClick={() => onClick(city.city)} // Pass the onClick function to Card component
    />
  ));
};

export default CardListing;
