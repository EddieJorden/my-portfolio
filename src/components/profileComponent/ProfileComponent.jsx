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
	max-width: 30%;
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
	font-size: 18px;
	transform: scale(1);
  transition: transform 0.2s ease-in-out;

	:hover {
		cursor: pointer;
		color: #ffffff;
		font-weight: bold;
		transition: 375ms;
		transform: scale(1.05);

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

	transform: scale(1);
  transition: transform 0.2s ease-in-out;

	:hover {
		cursor: pointer;
		color: white;
		font-weight: bold;
		transition: 375ms;
		transform: scale(1.05);
	}
`;

const TechDiv = styled.div`
	margin: 2px 5px
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
					<div >
						<div style={{fontWeight: 'bold'}}>Services</div>
						<div className='technoldogies-div' style={{fontSize: '12px', color: 'black'}}>
							<TechDiv>Full Stack Web Development</TechDiv>
							<TechDiv>SEO</TechDiv>
							<TechDiv>Dynamic Programming</TechDiv>
							<TechDiv>Problem Solving</TechDiv>
							<TechDiv>Consulting</TechDiv>
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
						<div style={{ margin: '5px 0px', color: 'black' }}>
							Full Stack Developer
						</div>
						<div
							style={{
								width: '125px',
								margin: '10px 0'
							}}>
							<CallToActionButton
								onClick={() =>
									updateDisplayedContent(<ContactInfo />)
								}>
								Contact
							</CallToActionButton>
							<div style={{ margin: '5px 0px' }}>
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
