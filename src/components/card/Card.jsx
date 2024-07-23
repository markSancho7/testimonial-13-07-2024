import {
	StyledContainer,
	StyledContainerText,
	StyledImg,
	StyledImgAndName,
	StyledName,
	StyledNameAndVerified,
	StyledPrincipalText,
	StyledSecondText,
	StyledVerified
} from './styles';

const Card = props => {
	return (
		<StyledContainer
			$backgroundColor={props.$backgroundColor}
			$textColor={props.$textColor}
			$cardHeight={props.$cardHeight}
			$cardWidth={props.$cardWidth}
			$gridColum={props.$gridColum}
			$gridRow={props.$gridRow}
		>
			<StyledImgAndName>
				<StyledImg src={props.img} alt='' />
				<StyledNameAndVerified>
					<StyledName>{props.title}</StyledName>
					<StyledVerified>{props.subtitle}</StyledVerified>
				</StyledNameAndVerified>
			</StyledImgAndName>
			<StyledContainerText>
				<StyledPrincipalText>{props.principalText}</StyledPrincipalText>
				<StyledSecondText>{props.secondText}</StyledSecondText>
			</StyledContainerText>
		</StyledContainer>
	);
};
export default Card;
