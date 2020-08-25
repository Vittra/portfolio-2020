import React from 'react';
import '../Components/Projects.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import LazyLoad from 'react-lazyload';
import Splitter from '../Images/Misc/Splitter.svg'
import LoadSpinner from '../Images/Misc/load-spinner.svg'


const projectform = (props) => {
    return(
        <div className="Project">
            <LazyLoad height={'100vh'} >
                <div className="HeroCard">
                    <img className="HeroImg" 
                        src={props.heroImage} 
                        srcSet={`${props.heroImage1k} 960w, ${props.heroImage2k} 1920w, ${props.heroImage4k} 3840w `} sizes="50vw" alt={props.heroImageAlt} 
                        style={{
                            background: 
                                `url(${props.heroImage}), url(${LoadSpinner})`,
                            backgroundSize: 'contain, 50px 50px',
                            }}/>
                    <div className="ImageCover"></div>
                </div>
            </LazyLoad>

            <div className="HeroCardTitleWrapper">
                <h1 className="company">   {props.company} </h1>
                <h2 className="role">  {props.year} - {props.role} </h2>
            </div>
            <LazyLoad>
            <div className="ProjectDetailsWrapper">
                <p className="ProjectTitle">Client intro:</p>
                <p className="Description ProjectDescription">  {props.description} </p>
                <p className="ProjectTitle">My role:</p>
                <p className="Description ProjectDescription">  {props.roleDescription} </p>
                <p className="ProjectTitle">Result:</p>
                <p className="Description ResultDescription">  {props.result} </p>
                <img className="splitter" src={Splitter} alt="Splitter"/> 
                <Zoom>
                    <LazyLoad height={'50vh'} offset={100} >
                        <img 
                            className="projectImages" 
                            src={props.image1} 
                            srcSet={`${props.image1} 480w, ${props.image11k} 960w, ${props.image12k} 1920w, ${props.image14k} 3840w `}  
                            alt={props.altImage1} 
                            style={{
                                background: 
                                    `url(${props.image1}), url(${LoadSpinner})`,
                                backgroundSize: 'contain, 50px 50px',
                                }}
                            />
                    </LazyLoad>
                </Zoom>
                <LazyLoad>
                <p className="projectImagesDescription">  {props.descImage1} </p>
                <img className="splitter" src={Splitter} alt="Splitter"/>
                </LazyLoad>
                <Zoom>
                    <LazyLoad height={'50vh'} offset={100} >
                        <img 
                            className="projectImages"  
                            src={props.image2} srcSet={`${props.image2} 480w, ${props.image21k} 960w, ${props.image22k} 1920w, ${props.image24k} 3840w `} 
                            alt={props.altImage2} 
                            style={{
                                background: 
                                    `url(${props.image2}), url(${LoadSpinner})`,
                                backgroundSize: 'contain, 50px 50px',
                                }}
                        />
                    </LazyLoad>
                </Zoom>
                <LazyLoad>
                <p className="projectImagesDescription">  {props.descImage2} </p>
                <img className="splitter" src={Splitter} alt="Splitter"/>
                </LazyLoad>
                <Zoom>
                    <LazyLoad height={'50vh'} offset={100} >
                       <img 
                            className="projectImages"  
                            src={props.image3} 
                            srcSet={`${props.image3} 480w, ${props.image31k} 960w, ${props.image32k} 1920w, ${props.image34k} 3840w `} 
                            alt={props.altImage3} 
                            style={{
                                background: 
                                    `url(${props.image3}), url(${LoadSpinner})`,
                                backgroundSize: 'contain, 50px 50px',
                                }}
                            />
                    </LazyLoad>
                </Zoom>

                <p className="projectImagesDescription">  {props.descImage3} </p>

            </div>
            </LazyLoad>

           
        </div>
    )
}

export default projectform