import StyledContainer from './styles';

const Card = props => {
	return (
		<StyledContainer
			$backgroundColor={props.$backgroundColor}
			$textColor={props.$textColor}
			$cardHeight={props.$cardHeight}
		>
			<img src='' alt='' />
			<span>{props.title}</span>
			<span>{props.subtitle}</span>
			<div>
				<p>{props.principalText}</p>
				<p>{props.secondText}</p>
			</div>
		</StyledContainer>
	);
};
export default Card;
