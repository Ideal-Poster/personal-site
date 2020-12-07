const herokuMessage = '* Heroku server may be sleeping. If Error please refresh page.';

const projectsAPI = {
  projects: [
    { 
      title: 'Local Language',
      img: 'giphy.gif' ,
      description: 
        `Local Language is an app designed to help friends share places in their 
        area where hey can speak and practice languages. It is also my Flatiron 
        School final project, revisited and improved.`,
      linkText: 'It can currently be found here.',
      link: 'https://dry-dusk-45182.herokuapp.com/',
      // herokuMessage 
    },
    { 
      title: 'Unslpash Portal',
      img: 'unsplash.gif',
      description:
        `A simple site created to search the Unsplash photo api. It uses css grid
        attributes to create and artistic grid pattern. It also features some slick
        animations.`,
      linkText: 'Click here to see it.',
      link: 'https://peaceful-wildwood-31115.herokuapp.com/',
      // herokuMessage
    },
    { 
      title: 'Rebel Shop',
      img: 'rebel.gif',
      description:
        `Rebel Shop is a online store I created to test my ability to create a
        user authentication system using Javascript web tokens. The site uses a Postgres database and
        GraphQL.`,
    }

  ]
};

export default projectsAPI;