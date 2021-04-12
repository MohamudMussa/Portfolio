import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {


    return (
        <section id="contact">
            <Container>
                <Title title="Skills" />
                <Fade bottom duration={1000} delay={800} distance="30px">
                    <div className="contact-wrapper">
                        <p className="contact-wrapper__text">
                            Here are my Skills
                        </p>
                        <a

                        >

                        </a>
                    </div>
                </Fade>
            </Container>
        </section>
    );
};

export default Skills;
