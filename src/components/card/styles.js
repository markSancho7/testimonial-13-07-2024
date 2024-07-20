import styled from 'styled-components';

const StyledContainer = styled.div`
	padding: 30px;
	border-radius: 10px;
	background-color: ${props => props.$backgroundColor};
	width: ${props => props.$cardWidth};
	height: ${props => props.$cardHeight};
	color: ${props => props.$textColor};
`;
const StyledImgAndName = styled.div`
	display: flex;
`;
const StyledImg = styled.img`
	border-radius: 50%;
	width: 40px;
	height: 40px;
	border: solid 2px grey;
`;
const StyledNameAndVerified = styled.div`
	width: 100px;
	display: flex;
	margin-left: 15px;
	flex-direction: column;
`;
const StyledName = styled.span`
	font-size: 13px;
	font-weight: 600;
	margin-top: 5px;
`;
const StyledVerified = styled.span`
	font-size: 10px;
	font-weight: 200px;
	margin-top: 2px;
`;

const StyledContainerText = styled.div`
	margin-top: 15px;
`;
const StyledPrincipalText = styled.p`
	font-size: 20px;
	font-weight: 500;
`;
const StyledSecondText = styled.p`
	font-size: 12px;
	margin-top: 15px;
	font-weight: 400;
	line-height: 1.5;
`;
export {
	StyledContainer,
	StyledImgAndName,
	StyledNameAndVerified,
	StyledName,
	StyledVerified,
	StyledImg,
	StyledContainerText,
	StyledPrincipalText,
	StyledSecondText
};
