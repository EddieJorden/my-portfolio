import styled from 'styled-components';

const ProfileComponentWrapper = styled.div`

    min-height: 100%;
    max-height: 100%;
    color: blue;

    img {
        max-width: 27%;
        margin: 15px;
    }
`

const ImageDiv = styled.div`
    display: flex;
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

const ProfileComponent = () => {

    return (
        <ProfileComponentWrapper>
            <ImageDiv>
                <img src="eddie_profile_pic.jpg" alt="eddie_moger_profile"/>
                    <span>
                        <UserInfoDiv>
                            <h3>Eddie Moger</h3>
                            <div>Software Developer</div>
                            <div>Out of Silicon Valley CA</div>
                            <div>Profile</div>
                        </UserInfoDiv>
                    </span>
            </ImageDiv>
        </ProfileComponentWrapper>
    )
};

export default ProfileComponent;
