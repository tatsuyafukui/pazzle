import React from 'react';
import UploadTemplate from '../templates/UploadTemplate';

const UploadPage: React.FC<any> = props => {
  return (
    <div>
      <UploadTemplate {...props} />
    </div>
  );
};

export default UploadPage;
