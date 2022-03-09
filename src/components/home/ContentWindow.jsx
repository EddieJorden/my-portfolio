
import styled from 'styled-components';


const ContentWindowDiv = styled.div`
    background-color: yellow;
    width: 100%
`

const ContentWindow = (props) => {


    return (
        <ContentWindowDiv >
            {props.displayedContent}
        </ContentWindowDiv>
    )
}

export default ContentWindow;