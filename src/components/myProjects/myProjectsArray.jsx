const myProjectsArray = [
    {
        name: 'Flash Cards',
        thumbnail: 'flashcards-thumbnail.png',
        altText: 'alt text for thumbnail here',
        link: 'https://eddiejorden.github.io/flashcards/',
        linkText: 'Flash Cards',
        notes: {
            notes: 'This custom Flash Cards app was built using React.js with Redux. It allows you to make flashcard quizzes for topics you decied,  you can name the quizzes and add custom created flashcards.'
        },
        github: 'https://github.com/EddieJorden/flashcards',
  
    },
    {
        name: 'Fotomatic',
        thumbnail: 'fotomatic-thumbnail.png',
        altText: 'fotomatic-thumbnail',
        link: 'https://eddiejorden.github.io/fotomatic/',
        linkText: 'Fotomatic',
        notes: {
            notes: `Here I was tasked with creating the CSS according to exact specifications outlined by the designer.`
        },
        github: 'https://github.com/EddieJorden/fotomatic',
    },
        {
        name: 'My Planner',
        thumbnail: 'appointment-planner-thumbnail.png',
        altText: 'appointment-planner-thumbnail',
        link: 'https://eddiejorden.github.io/react_challenge/',
        linkText: 'My Planner',
        notes: {
            notes: 'Here is a fully built and conceptualized contacts and appointments app built using React.js.'
        },
        github: 'https://github.com/EddieJorden/react_challenge/settings/pages',
    },
    {
        name: "Food Near Me",
        thumbnail: 'food_near_me_thumbnail.png',
        altText: 'food-near-me-thumbnail',
        link: 'https://eddiejorden.github.io/food.near.me/',
        linkText: 'Food Near Me',
        notes: {
            notes: 'This is a Reactjs app built using the Yelp api, since it is in developent you must first enable cors anywhere before using this app,  click the link below and click "request temporary access to the demo server" then return to the app.',
            notesLink:  <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="blank" rel="noopener noreferer">cors anywhere</a>
        },
        github: 'https://github.com/EddieJorden/food.near.me',
    },
    {
        name: 'My Jams',
        thumbnail: 'myJams-thumbnail.png',
        altText: 'my-jams-thumbnail',
        link: 'https://eddiejorden.github.io/my-jams',
        linkText: 'My Jams',
        notes: {
            notes: 'Using the Spotify api I have built this React.js app to allow me to create playlists, and add tracks to esisting playslists. Please login with spotify username: "test@eddiemoger.com" password: "testpassword" to use this app.',
            
        },
        github: 'https://github.com/EddieJorden/my-jams',
    },
    {
        name: 'This Portfolio',
        thumbnail: 'My_Portfolio_thumbnail.png',
        altText: 'My_Portfolio_thumbnail',
        link: 'https://eddiemoger.com',
        linkText: 'This Portfolio',
        notes: 'This portfolio was built using react, stylized components and react-router',
        github: 'https://github.com/EddieJorden/my-portfolio',
    },
    // {
    //     name: 'name of app here',
    //     thumbnail: 'thumbnail link here',
    //     altText: 'alt text for thumbnail here',
    //     link: 'link to project here',
    //     linkText: 'project link text here',
    //     notes: 'notes here',
    //     github: 'link to this projects github here',
    // }
];

export default myProjectsArray;