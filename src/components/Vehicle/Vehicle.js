import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Vehicle = (props) => {
    const [user, setUser] = useState()
    const history = useHistory()
console.log(props);

    // console.log(props.vehicle);
    const{title,imgUrl}= props.vehicle;
    const handleOptionClick =(title) =>{
        history.push(`/destination/${ props.vehicle.title}`);
        console.log(title);
    }
    return (
        <div className='align-content-center p-2  col-md-6 col-sm-12 ' onClick= {handleOptionClick}>
            <Card style={{ width: '10rem' }} className='justify-content-center'>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    
                    <Button variant="primary">{title}</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Vehicle;