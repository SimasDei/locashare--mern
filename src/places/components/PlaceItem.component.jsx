import React, { useState } from 'react';

import './PlaceItem.styles.scss';

import Card from '../../shared/components/UIElements/Card/Card.component';
import Button from '../../shared/components/FormElements/Button/Button.component';
import Modal from '../../shared/components/UIElements/Modal/Modal.component';

const PlaceItem = ({ place: { imageUrl, title, address, description, id } }) => {
  const [showMap, setShowMap] = useState(false);

  const handleOpenMap = () => setShowMap(true);
  const handleCloseMap = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={handleCloseMap}
        header={address}
        contentClass='place-item__modal-content'
        footerClass='place-item__modal-actions'
        footer={<Button onClick={handleCloseMap}></Button>}>
        <div className='map-container'>
          <h2>Map place here</h2>
        </div>
      </Modal>
      <li className='place-item'>
        <Card>
          <div className='place-item__image'>
            <img src={imageUrl} alt={title} />
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <Button onClick={handleOpenMap} inverse>
              View on Map
            </Button>
            <Button to={`/${id}/places`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
