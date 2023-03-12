/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { CallToActionButton } from '../../utils';
import { ShadowedImg } from '../../utils';

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
	padding-right: 25px;
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

const TechIcon = styled.img`
	width: 30px;
	height: 30px;
`;

const ProfileComponent = ({ updateDisplayedContent }) => {
	return (
		<ProfileComponentWrapper>
			<ProfileDiv>
				<ProfileImageWrapper>
					<ShadowedImg
						src="eddie_profile_pic.jpg"
						alt="eddie_moger_profile"
					/>
					<div >
						<div style={{fontWeight: 'bold'}}>Tech Stack</div>
						<div style={{fontSize: '12px', color: 'black', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
							<TechDiv><span><TechIcon src="javascript-icon.png"/></span></TechDiv>
							<TechDiv><span><TechIcon src="react.js-icon.png"/></span></TechDiv>
							<TechDiv><span><TechIcon src="redux.js-icon.png"/></span></TechDiv>
							<TechDiv><span><TechIcon src="express.js-icon.png"/></span></TechDiv>
							<TechDiv><span><TechIcon src="node.js-icon.png"/></span></TechDiv>
							<TechDiv><span><TechIcon src="SQL-icon.png"/></span></TechDiv>
						</div>
					</div>
				</ProfileImageWrapper>
				
				<span>
					<UserInfoDiv>
						<h1 style={{margin: '10px 0px 5px 0px'}}>
							Eddie Moger
						</h1>
						<h2 style={{margin: '0px'}}>
							Full Stack Developer
						</h2>
						<div
							style={{
								width: '125px',
								margin: '10px 0'
							}}>
							<CallToActionButton
								onClick={() =>
									updateDisplayedContent('contactinfo')
								}
								href="#contactinfo"
							>
								Contact
							</CallToActionButton>
							<div style={{ margin: '5px 0px' }}>
								{' '}
								<a href="https://github.com/EddieJorden" target="_blank" rel="noreferrer" title="Eddie Moger's Github">
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
