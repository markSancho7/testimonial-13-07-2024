import Card from './components/card/Card';
import { CARDSINFO } from './constants/CARDSINFO';

const App = () => {
	return CARDSINFO.map(card => {
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
			/>
		);
	});
};

export default App;
