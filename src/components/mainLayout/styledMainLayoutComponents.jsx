import styled from 'styled-components';

export const MainLayoutDiv = styled.div`
		max-height: 100vh;
    max-width: 100vw;
		height: 83vh;
    display: flex;
		justify-content: space-between;
    align-items: center;
		background-image: url(EddieMoger.com-background.png);
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;

    @media only screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }
`;

export const SideBarProfileDivContainer = styled.div`
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const ProjectLinksDiv = styled.div`
	flex-grow: 1;
`;

export const SideBarFooterDiv = styled.div`
	flex-grow: 1;
	min-width: 100%;
`;

export const SideBarFooterContainer = styled.div`

`;

export const ProfileDiv = styled.div``;

export const NavigationDiv = styled.nav`
@media only screen and (max-width: 1015px) {
	display: none;
}
`;

export const HamburgerMenuDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 10px;

	@media only screen and (min-width: 1016px) {
		display: none;

	}`;

export const SideBarLinksContainer = styled.div`
	@media only screen and (max-width: 900px) {
		display: none;
	}
`;

export const ProjectLinksListDiv = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: none;
	justif-content: center;
	align-items: flex-start;
`;

export const SideBarDivContainer = styled.div`
	max-width: 95%;
	max-height: 95%;
	min-width: 95%;
	min-height: 95%;
	display: flex;
	flex-direction: column;
	alight-items: center;
	justify-content: center;
`;

export const SideBarDiv = styled.div`
	color: #1a77f2;
	width: 38%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 900px) {
		min-width: 100%;
	}
`;

export const ContentDiv = styled.div`
	color: white;
	width: 61.8vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const ContentWindowDiv = styled.div`
	color: black;
	overflow: scroll;
	setScrollPosition: 0;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	text-align: -webkit-center;
	max-width: 100%;
	height: 80vh;
`;

export const ContentWindowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 100%;
	min-width: 100%;
`;

export const ButtonContainer = styled.div`
	padding: 10px
`;

export const TitleDiv = styled.div`
color: #ffffff;
font-weight: bold;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;

img {
	margin: 5px 20px;
	width: 50px;
	border-radius: 5px;
}
`;