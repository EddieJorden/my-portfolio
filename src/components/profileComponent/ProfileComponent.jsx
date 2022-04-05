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
    transition: 375ms
} 
`;

const ProfileComponent = ({ updateDisplayedContent,  }) => {

	return (
		<ProfileComponentWrapper>
			<ProfileDiv>
				<ProfileImageWrapper>
					<img src="eddie_profile_pic.jpg" alt="eddie_moger_profile"/>
				</ProfileImageWrapper>
				<span>
					<UserInfoDiv>
						<div style={{fontSize: '22px', fontWeight: 'bold'}}>Eddie Moger</div>
						<div>Software Engineer</div>
						<div style={{width: '125px', height: '40px', margin: '10px 0'}}>
							<CallToActionButton onClick={() => updateDisplayedContent(<ContactInfo />)}>
                                Contact
							</CallToActionButton>
						</div>
					</UserInfoDiv>
				</span>
			</ProfileDiv>
		</ProfileComponentWrapper>
	);
};

export default ProfileComponent;
