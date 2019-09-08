import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Main from '../organisms/main/main';
import Section from '../molecules/Section';
import UploadForm from '../molecules/forms/uploadForm/uploadForm';

const UploadTemplate: React.FC = (props) => {
  return (
      <div>
        <Header />
        <Main>
          <Section>
            <div>
              <UploadForm {...props} />
            </div>
          </Section>
        </Main>>
      <Footer />
    </div>
  );
};

export default UploadTemplate;
