import './Card.scss'; 

interface CardProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, url }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={url} className="card-link">Learn More</a>
      </div>
    </div>
  );
}

export default Card;