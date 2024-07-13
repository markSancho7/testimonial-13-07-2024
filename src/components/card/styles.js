import styled from 'styled-components';

const StyledContainer = styled.div`
	background-color: ${props => props.$backgroundColor};
	width: ${props => props.$cardWidth};
	height: ${props => props.$cardHeight};
	color: ${props => props.$textColor};
`;

export default StyledContainer;
