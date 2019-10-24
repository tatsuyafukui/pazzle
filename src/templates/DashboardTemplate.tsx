import React, { useEffect } from 'react';
import Main from '../organisms/main/main';
import ImageList from '../organisms/ImageList';
import Section from '../molecules/Section';
import { getCategorys } from '../modules/collection';
import { useDispatch, useSelector } from 'react-redux';
const categorysSelector = (state: any) => state.collectionReducer.categorys;

const DashboardTemplate: React.FC = () => {
  const categorys = useSelector(categorysSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorys());

  }, [])

  const categoryList = categorys.map((item: any, index: number) => {
    return (
      <div key={index}>
        <span>{item.id}</span>
      </div>
    )
  });

  return (
    <div>
      <Main>
        <Section>
          {categoryList}
          <div>
            <ImageList />
          </div>
        </Section>
      </Main>
    </div>
  );
};

export default DashboardTemplate;
