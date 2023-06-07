import React from 'react';
import IMG1 from '../../assets/bookstore.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Volstory application',
      img: IMG1,
      description:
        'Volstory application allow user to host events and to find correct volunteers for the same.',
      technologies: 'Angular | IONIC | NodeJS',
      link: 'https://play.google.com/store/apps/details?id=io.ionic.Volstory',
    },
    {
      id: 2,
      title: 'Reciept Information Extraction ',
      img: IMG4,
      description:
        'Reciept Inforamtion Extraction app provides information and details present in the Reciept',
      technologies: 'Flask | Python',
      /* link: 'https://fakestore-metrics.netlify.app/' */
      link: 'https://github.com/Akshadmishra/Reciept_information_extraction.git',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      /* link: 'https://meri-mg.github.io/To-Do-List/dist/' */
      link: 'https://github.com/Akshadmishra/To-do-list.git',
    },
    {
      id: 4,
      title: 'AAROHAN WEBSITE 2021',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'REACT | Firebase',
      /* link: 'https://meri-mg.github.io/shelter/pages/main/index.html', */
      link: 'https://github.com/Akshadmishra/AAROHAN-CODE.git',
    },
    {
      id: 5,
      title: 'Vehicle detection system',
      img: IMG5,
      description:
        'Fully responsive interactive project built to detect no of vehicles in and given video',
      technologies: 'python',
      /* link: 'https://meri-mg.github.io/Unilab-world-news/', */
      link: 'https://github.com/Akshadmishra/vehicle-detection.git',
    },
   /*  {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    }, */
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                link
              </a>
             {/*  <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
