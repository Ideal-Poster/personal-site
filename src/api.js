const projectsAPI = {
  projects: [
    { 
      title: 'Alex Brindis',
      img: 'alex.gif' ,
      description: 
        `A Gallery Site created to display the work of Alex Brindis.The site features 
        a preview window that appears when the cursor hover over a selection. The site
        currently contiains filler art.`,
      linkText: 'It can currently be found here.',
      link: 'https://dry-dusk-45182.herokuapp.com/'
    },
    { 
      title: 'Unslpash Search',
      img: 'unsplash.gif',
      description:
        `A simple site created to search the Unsplash photo api. It uses css grid
        attributes to create and artistic grid pattern. It also features some slick
        animations.`,
      linkText: 'Click here to see it.',
      link: 'https://peaceful-wildwood-31115.herokuapp.com/'

    },
    { 
      title: 'Rebel Shop',
      img: 'rebel.gif',
      description:
        `Rebel Shop is a online store I created to test my ability to create a
        user authentication system using Javascript web tokens. The site uses a Postgres database and
        GraphQL. It is currently being configured to go live on web servers.`,
    }

  ]
};

export default projectsAPI;