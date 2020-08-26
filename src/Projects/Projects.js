import React, { Component } from 'react';
import Projectform from '../Components/ProjectForm';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Components/Projects.css';
// import Simpell from '../Texts/Simpell';
import Bruger from '../Texts/Bruger';
import Moblrn from '../Texts/Moblrn';
import LeaderIsland from '../Texts/LeaderIsland';

class projects extends Component {
  state = {
    projects: [
      {
        ...Moblrn,
        id: 'project 4',
      },
      {
        ...Bruger,
        id: 'project 3',
      },
      {
        ...LeaderIsland,
        id: 'project 1',
      },
      // { 
      //   ...Simpell,
      //   id: 'project 2',
      // }
    ]
  };
  
  render() {

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      }
    };
    return (
        <Carousel 
          className="ProjectWrapper" 
          responsive={responsive}
          infinite={true}
          showDots={false}
          draggable={false}
          swipeable={false}
          ssr={true}
           >
          {this.state.projects.map((project, index) => {
            return <Projectform
            role={project.role}
            company={project.company}
            year={project.year}
            description={project.description}
            roleDescription={project.roleDescription}
            result={project.result}
            heroImage={project.heroImage}
            heroImage1k={project.heroImage1k}
            heroImage2k={project.heroImage2k}
            heroImage4k={project.heroImage4k}
            heroImageAlt={project.heroImageAlt}
            image1={project.image1}
            image11k={project.image11k}
            image12k={project.image12k}
            image14k={project.image14k}
            descImage1={project.descImage1}
            altImage1={project.altImage1}
            image2={project.image2}
            image21k={project.image21k}
            image22k={project.image22k}
            image24k={project.image24k}
            descImage2={project.descImage2}
            altImage2={project.altImage2}
            image3={project.image3}
            image31k={project.image31k}
            image32k={project.image32k}
            image34k={project.image34k}        
            descImage3={project.descImage3}
            altImage3={project.altImage3}
            key={index}
            id={project.id}
            />
            })
          }
          </Carousel>
        );
      };

     
    }

export default projects