
import React from 'react';
import bg from '../../images/Bg.png'

import Vehicle from '../Vehicle/Vehicle';


const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between',
        backgroundImage: `url(${bg})`,
        backgroundSize: ' 100% 100%',
        height: '500px'
    }

    const vehicles = [
        {
            title: 'Car',
            imgUrl: 'https://i.ibb.co/2qy6Kx8/Frame-2.png',
            capacity: 4,
            avatar: 'S',
            price: 67
        },
        {
            title: 'Bike',
            imgUrl: 'https://i.ibb.co/7gpPwym/Frame.png',
            capacity: 2,
            avatar: 'S',
            price: 30
        },
        {
            title: 'Bus',
            imgUrl: 'https://i.ibb.co/0m6CfZL/Frame-1.png',
            capacity: 50,
            avatar: 'S',
            price: 15
        },
        {
            title: 'Train',
            imgUrl: 'https://i.ibb.co/gdPHCMm/Group.png',
            capacity: 500,
            avatar: 'S',
            price: 10
        }
    ]

    return (
        <div style={style} className=" row container ">
            {
                vehicles.map(vehicle => <Vehicle key={vehicle.title} vehicle={vehicle} ></Vehicle>)
            }
            

        </div>
    );
};

export default Home;