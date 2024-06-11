import "./Card.scss";

interface CardProps {
  image: string;
  title: string;
  description: string;
  url: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
       <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;