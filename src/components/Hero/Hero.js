import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to showcase some of my projects, studies and skills in the web development field, as it is easier to just show rather than telling.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/caio-bueno-de-oliveira-a681a11b7'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;