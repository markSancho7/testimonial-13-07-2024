import Card from './components/card/Card';
import ContainerCards from './components/containerCards/ContainerCards';
import { CARDSINFO } from './constants/CARDSINFO';

const App = () => {
	return (
		<ContainerCards>
			{CARDSINFO.map(card => {
				return (
					<Card
						key={card.id}
						img={card.img}
						title={card.title}
						subtitle={card.subtitle}
						principalText={card.principalText}
						secondText={card.secondText}
						$cardWidth={card.$cardWidth}
						$cardHeight={card.$cardHeight}
						$backgroundColor={card.$backgroundColor}
						$textColor={card.$textColor}
						$gridColum={card.$gridColum}
						$gridRow={card.$gridRow}
					/>
				);
			})}
		</ContainerCards>
	);
};

export default App;
