import { useState } from 'react';
import './Home.scss';
import LogoA2 from '../assets/images/LogoA2.png';
import Candy from '../assets/images/DA/Candy.jpg';
import Sawyer from '../assets/images/DA/tom sawer.jpg';
import Goldorak from '../assets/images/DA/Goldorak.jpg';
import Cobra from '../assets/images/DA/cobra.webp';
import Clementine from '../assets/images/DA/Clementine.jpg';
import TourduMonde from '../assets/images/DA/tour du monde.png';
import Card from '../components/Card';
import MusicPlayer from '../components/MusicPlayer';

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
    description: 'Sortie en 1978. Durant l\'attaque qui mènera à la destruction finale d\'Euphor, la famille royale est exterminée. Actarus, fils du roi et prince, parvient à s\'échapper après s\'être emparé de Goldorak, le plus perfectionné des robots mis au point par les scientifiques de la planète, et s\'enfuit vers la Terre.',
    url: 'https://music.youtube.com/watch?v=3jRKe3mENqc'
  },
  {
    image: Candy,
    title: 'Candy',
    description: 'Sortie en 1978. Les aventures, les drames et les amours de Candy Neige, jeune orpheline américaine au début du XXème siècle, de sa naissance à l\'age adulte. Élevée dans la maison de Pony où elle passe son enfance en compagnie de son amie Annie, Candy a un tempérament trop prononcé et ne parvient pas à trouver une famille d\'accueil',
    url: 'https://music.youtube.com/watch?v=wVcXDbRJ79w'
  },
  {
    image: Cobra,
    title: 'Cobra',
    description: 'Sortie en 1985. Dans un monde futuriste, au cours d\'une séance de rêve artificiel, un homme nommé Johnson retrouve la mémoire : il découvre qu\'il est en réalité le mythique aventurier de l\'espace supposé mort depuis cinq ans nommé Cobra.',
    url: 'https://music.youtube.com/watch?v=PQw1ogP-boo'
  },
  {
    image: Sawyer,
    title: 'Tom Sawyer',
    description: 'Sortie en 1982. A la mort de ses parents, le jeune Tom Sawyer part vivre chez sa tante Polly, dans le Mississippi. Avec son meilleur ami Huckleberry Finn, il fait les quatre cents coups, jusqu\'au jour où les deux garnements sont les témoins d\'un violent règlement de comptes.',
    url: 'https://music.youtube.com/watch?v=RNfXaszFfGU'
  },
  {
    image: Clementine,
    title: 'Clementine',
    description: 'Sortie en 1985. Clémentine est fille d\'un pilote d\'avion des année 20, qui aime lui montrer l\'aviation. Un jour, le méchant Malmotte veut voler Clémentine et provoque un accident d\'avion mais la d\'omnisciente Héméra la sauve du diable. Suite à cette accident, Clémentine doit rester et vivre dans un fauteuil roulant.',
    url: 'https://music.youtube.com/watch?v=smSsT6wJn18'
  },
  {
    image: TourduMonde,
    title: 'Le tour du monde en 80 jours',
    description: 'Sortie en 1982. Passepartout, un ouistiti naïf mais plein d\'entrain, rêve de partir à l\'aventure depuis toujours. L\'occasion se présente sous la forme de Phileas Frog, un explorateur vanneur et arnaqueur, et d\'un pari à plusieurs millions : établir le nouveau record du tour du monde en 80 jours.',
    url: 'https://music.youtube.com/watch?v=Ho-OFlzqTbg'
  },
];

const Home: React.FC = () => {
  const [selectedUrl, setSelectedUrl] = useState<string>('');

  return (
    <div className="contenaireHome">
      <div className="MusicPlayerWrapper">
      <div className="title">
        <h1>Les génériques de récré</h1>
        <img src={LogoA2} alt="logo" />

      </div>
      
      {selectedUrl && (
        <MusicPlayer 
          url={selectedUrl} 
          onStop={() => setSelectedUrl('')} 
        />
      )}
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


    </div>
  );
};

export default Home;
