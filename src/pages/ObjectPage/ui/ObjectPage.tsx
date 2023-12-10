import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { getObjectsData } from 'entities/Object/model/selectors/object';
import { fetchObjectById } from 'entities/Object/api/fetchObjectById';
import { Spin } from 'antd';

const ObjectPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, object } = useAppSelector(getObjectsData);

  useEffect(() => {
    dispatch(fetchObjectById(id));
  }, [id, dispatch]);

  return (
    <div style={{ maxWidth: '100%', maxHeight: '100%' }}>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <p style={{ fontWeight: '700' }}>{object?.title}</p>
          <p>{object?.description}</p>
          {/* <img src={'src/pages/ObjectPage/ui/schema.png'} /> */}
          <img src="https://picsum.photos/1000?grayscale" alt="picture" />
        </>
      )}
    </div>
  );
};

export default ObjectPage;
