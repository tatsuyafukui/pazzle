import React from 'react';
import Header from '../organisms/Header';
import Main from '../organisms/main/main';
import ImageList from '../organisms/ImageList';
import Section from '../molecules/Section';
import Ranking from '../organisms/Ranking';

const DashboardTemplate: React.FC = props => {

  return (
    <div>
      <Header />
      <Main>
        <Section>
          <div>
            <ImageList />
          </div>
        </Section>
      </Main>
    </div>
  );
};

export default DashboardTemplate;
