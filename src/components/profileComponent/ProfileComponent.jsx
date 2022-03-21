import styled from 'styled-components';

const ProfileComponentWrapper = styled.div`

    min-height: 100%;
    max-height: 100%;
`

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const UserInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    min-height: 100%;
    min-width: 100%;
    text-align: left;
`

const ProfileImageWrapper = styled.div`
    max-width: 50%;
    margin: 5%;
`

const ProfileComponent = () => {

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
                            <div>Out of Silicon Valley CA</div>
                            <div>Profile</div>
                        </UserInfoDiv>
                    </span>
            </ProfileDiv>
        </ProfileComponentWrapper>
    )
};

export default ProfileComponent;
