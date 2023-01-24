/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import ContactInfo from '../contactInfo/ContactInfo';

const ProfileComponentWrapper = styled.div`
	min-height: 100%;
	max-height: 100%;
`;

const ProfileDiv = styled.div`
	display: flex;
	flex-direction: row;
`;

const UserInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	min-height: 100%;
	min-width: 100%;
	text-align: left;
`;

const ProfileImageWrapper = styled.div`
	max-width: 50%;
	margin: 5%;
	border-right: 1px solid #dadde1;
	padding-right: 42px;
`;

const CallToActionButton = styled.button`
	background-color: orange;
	border-radius: 6px;
	border: 2px solid orange;
	color: #ffffff;
	font-weight: bold;
	padding: 0.5vw 1.5vw;
	margin: 4px;
	transition: 375ms;
	font-size: 18px;

	:hover {
		cursor: pointer;
		border: 4px solid orange;
		color: #ffffff;
		font-weight: bold;
		margin: 2px;
		transition: 375ms;
	}
`;
const GithubButton = styled.button`
	background-color: #1a77f2;
	border-radius: 6px;
	border: 2px solid #1a77f2;
	color: white;
	padding: 0.5vw 1.5vw;
	margin: 4px;
	transition: 375ms;
	font-weight: bold;
	:hover {
		cursor: pointer;
		border: 4px solid #1a77f2;
		color: white;
		font-weight: bold;
		margin: 2px;
		transition: 375ms;
	}
`;

const TechDiv = styled.div`
	margin: 5px
`;

const ProfileComponent = ({ updateDisplayedContent }) => {
	return (
		<ProfileComponentWrapper>
			<ProfileDiv>
				<ProfileImageWrapper>
					<img
						src="eddie_profile_pic.jpg"
						alt="eddie_moger_profile"
					/>
					<div>Technologies
						<div className='technoldogies-div' style={{display: 'flex', flexWrap: 'wrap', fontSize: '12px'}}>
							<TechDiv>Javascript</TechDiv>
							<TechDiv>React</TechDiv>
							<TechDiv>Typescript</TechDiv>
							<TechDiv>Redux</TechDiv>
							<TechDiv>Nodejs</TechDiv>
							<TechDiv>Express</TechDiv>
							<TechDiv>Postrgres</TechDiv>
							<TechDiv>Html</TechDiv>
							<TechDiv>CSS</TechDiv>
							<TechDiv>Ajax</TechDiv>
							<TechDiv></TechDiv>
							<TechDiv></TechDiv>
							<TechDiv></TechDiv>
						</div>
					</div>
				</ProfileImageWrapper>
				
				<span>
					<UserInfoDiv>
						<div
							style={{
								fontSize: '34px',
								fontWeight: 'bold',
								marginTop: '42px',
							}}>
							Eddie Moger
						</div>
						<div style={{ margin: '5px 0px' }}>
							Software Engineer
						</div>
						<div
							style={{
								width: '125px',
								margin: '10px 0',
							}}>
							<CallToActionButton
								onClick={() =>
									updateDisplayedContent(<ContactInfo />)
								}>
								Contact
							</CallToActionButton>
							<div style={{ margin: '25px 0px' }}>
								{' '}
								<a href="https://github.com/EddieJorden">
									<GithubButton>My Github</GithubButton>
								</a>
							</div>
						</div>
					</UserInfoDiv>
				</span>
			</ProfileDiv>
		</ProfileComponentWrapper>
	);
};

export default ProfileComponent;
