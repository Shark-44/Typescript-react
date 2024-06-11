import "./Home.scss";
import LogoA2 from "../assets/images/LogoA2.png";
import Candy from "../assets/images/DA/Candy.jpg";
import Sawer from "../assets/images/DA/tom sawer.jpg";
import Goldorak from "../assets/images/DA/Goldorak.jpg";
import Cobra from "../assets/images/DA/cobra.webp";
import Clementine from "../assets/images/DA/Clementine.jpg";
import TourduMonde from "../assets/images/DA/tour du monde.png";
import Card from '../components/Card';
import MusicPlayer from '../components/MusicPlayer';
import {  useState } from "react"

interface CardData {
  image: string;
  title: string;
  description: string;
  url: string;
}

const cardsData: CardData[] = [
  {
    image: Goldorak,
    title: 'Goldorak',
    description: 'This is a description for card 1.',
    url: 'https://music.youtube.com/watch?v=3jRKe3mENqc'
  },
  {
    image: Candy,
    title: 'Candy',
    description: 'This is a description for card 2.',
    url: 'https://music.youtube.com/watch?v=wVcXDbRJ79w'
  },
  {
    image: Cobra,
    title: 'Cobra',
    description: 'This is a description for card 2.',
    url: 'https://music.youtube.com/watch?v=PQw1ogP-boo'
  },
  {
    image: Sawer,
    title: 'Tom Sawer',
    description: 'This is a description for card 2.',
    url: 'https://music.youtube.com/watch?v=RNfXaszFfGU'
  },
  {
    image: Clementine,
    title: 'Clementine',
    description: 'This is a description for card 2.',
    url: 'https://music.youtube.com/watch?v=smSsT6wJn18'
  },
  {
    image: TourduMonde,
    title: 'Le tour du monde en 80 jours',
    description: 'This is a description for card 2.',
    url: 'https://music.youtube.com/watch?v=Ho-OFlzqTbg'
  },
];

const Home: React.FC = () => {
  const [selectedUrl, setSelectedUrl] = useState<string>('');

  return (
    <div className="contenaireHome">
      <div className="title">
        <h1>Les génériques de récré</h1>
        <img src={LogoA2} alt="logo" />
      </div>

      <div className="ContenairCard">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            url={card.url}
            onClick={() => setSelectedUrl(card.url)}
          />
        ))}
      </div>

      {selectedUrl && <MusicPlayer url={selectedUrl} />}
    </div>
  );
};

export default Home;