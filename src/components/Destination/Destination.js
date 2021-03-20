import React from 'react';
import './Destination.css';
import googlemap from '../../images/Map.png';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const Destination = () => {
    const { title } = useParams();

    const ticket = [
        {
            title: 'Car',
            CarimgUrl: 'https://i.ibb.co/2qy6Kx8/Frame-2.png',
            Carcapacity: 4,
            avatar: 'S',
            Carprice: 67
        },
        {
            title: 'Bike',
            BikeimgUrl: 'https://i.ibb.co/7gpPwym/Frame.png',
            Bikecapacity: 2,
            avatar: 'S',
            Bikeprice: 30
        },
        {
            title: 'Bus',
            BusimgUrl: 'https://i.ibb.co/0m6CfZL/Frame-1.png',
            Buscapacity: 50,
            avatar: 'S',
            Busprice: 15
        },
        {
            title: 'Train',
            TrainimgUrl: 'https://i.ibb.co/gdPHCMm/Group.png',
            Traincapacity: 500,
            avatar: 'S',
            Trainprice: 10
        }
    ]

    console.log(title);
    let from = '';
    let to = '';
    let locationValue = true;
    const handleSearch = (event) => {
        if (event.target.name === 'fromName') {
            from = event.target.value;
        }
        if (event.target.name === 'toName') {
            to = event.target.value;

        }
    }
    const searchSubmit = (event) => {
        console.log(from);
        console.log(to);
        if (from != null && to != null) {
            locationValue = true;

        }
        event.preventDefault();
    }

    return (
        <div className='d-flex'>
            {
                <Form className='destination-search' onSubmit={searchSubmit}>
                    <div>
                        <Form.Group controlId="">
                            <Form.Label>From</Form.Label>
                            <Form.Control onBlur={handleSearch} type="text" name="fromName" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>To</Form.Label>
                            <Form.Control onBlur={handleSearch} type="text" name="toName" placeholder="" />
                        </Form.Group>

                        <div>
                            <label for="date">Date:</label>
                            <input type="date" id="birthday" name="birthday" />
                        </div>
                        <Button type="submit">Search</Button>
                    </div>
                </Form>
            }

            <div>
                <img className='map' src={googlemap} alt="" />
            </div>

        </div>
    );
};

export default Destination;