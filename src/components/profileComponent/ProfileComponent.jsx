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
    color: white;
    border: none;
    border-radius: 5px;
    min-width: 100%;
    min-height: 34px;
    margin: 10px 0px;
    font-weight: bold;
    font-size: 18px;

    :hover {
        cursor: pointer;
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
						<h3>Eddie Moger</h3>
						<div>Software Developer</div>
						<CallToActionButton onClick={() => updateDisplayedContent(<ContactInfo />)}>
                                Contact
						</CallToActionButton>
					</UserInfoDiv>
				</span>
			</ProfileDiv>
		</ProfileComponentWrapper>
	);
};

export default ProfileComponent;
