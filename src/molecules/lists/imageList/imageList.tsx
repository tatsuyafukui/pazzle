import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../../../config/firebase';

const userSelector = (state: any) => state.user;
const imagesSelector = (state: any) => state.images;

const ImageList: React.FC = () => {
  const user = useSelector(userSelector);
  const [images, setImages]: any = useState(null);

  useEffect(() => {
    console.log(user);
    db.collection('users')
      .doc(user.uid)
      .collection('images')
      .get()
      .then(snapshot => {
        if (snapshot.empty) return;
        let arr: any = [];
        snapshot.forEach(d => {
          arr.push(d.data());
        });
        setImages(arr);
      });
  }, [user]);

  let imageArr = null;
  if (images !== null) {
    imageArr = images.map((image: any, i: number) => {
      return (
        <li key={i} className={'imageCollection'}>
          <img src={image.path} alt={image.name} />
        </li>
      );
    });
  }

  return (
    <div>
      <ul>{imageArr}</ul>
    </div>
  );
};

export default ImageList;
