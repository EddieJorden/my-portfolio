import ListTile from "./ListTile";

const ListRenderer = ({ myProjectsArray }) => {

    let keyGenerator = 1

    return (
        <div>
            {myProjectsArray.map((each, i) => {
                keyGenerator = keyGenerator + 1
                return <ListTile project={each} key={i}/>
            })}
        </div>
    )
};

export default ListRenderer;
