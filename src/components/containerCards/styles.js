import styled from 'styled-components';

const StyledContainerCards = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 270px);
	grid-template-rows: repeat(2, 320px);
	gap: 10px;
	width: 1300px;
	justify-content: center;
	margin-inline: auto;
	margin-top: 50px;
`;

export { StyledContainerCards };
