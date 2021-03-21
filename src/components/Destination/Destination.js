import React, { useState } from 'react';
import './Destination.css';
import googlemap from '../../images/Map.png';
import { Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

const Destination = () => {
    const { title } = useParams();

    const [destination, setDestination] = useState({
        from: "",
        to: ""
    })
    const handleBlur = (e) => {
        if (e.target.name === "pickFrom") {
            const data = { ...destination };
            data.from = e.target.value;
            console.log(data);

            setDestination(data);
        }
        if (e.target.name === "pickTo") {
            const data = { ...destination };
            data.to = e.target.value;
            console.log(data);

            setDestination(data);
        }
    }
    
    const handleSearch = () => {
        document.getElementById("searchForm").style.display = "none";
        document.getElementById("resultForm").style.display = "block";
    }
    return (
        <div className='d-flex'>
            {
                <div className='w-25'>
                    <form id="searchForm" style={{ backgroundColor: "whitesmoke", borderRadius: "10px", padding: "20px" }}>
                        <label htmlFor="">Pick From</label> <br />
                        <input onBlur={handleBlur} className="w-100" type="text" name="pickFrom" id="pickFrom" /><br /><br />
                        <label htmlFor="">Pick To</label> <br />
                        <input onBlur={handleBlur} className="w-100" type="text" name="pickTo" id="pickTo" /> <br /><br />
                        <p onClick={handleSearch} style={{ width: "100%", fontSize: "25px", height: "40px", borderRadius: "5px", backgroundColor: "tomato", color: "white", textAlign: "center", cursor: "pointer" }}>
                            Search
                    </p>
                    </form>
                    <form id="resultForm" style={{ backgroundColor: "whitesmoke", borderRadius: "10px", padding: "20px", display: "none" }}>
                        <div style={{ backgroundColor: 'tomato', margin: '5px', color: 'white', padding: '10px', borderRadius: '10px' }}>
                            <h2>{destination.from}</h2><br /><br /><p>To </p><br /><br />

                            <h2>{destination.to}</h2>

                        </div>
                        <div style={{ backgroundColor: 'tomato', margin: '5px', color: 'white', padding: '10px', borderRadius: '10px' }}>
                            <p>{title}
                            {/* <img src={ticket.CarimgUrl} alt=""/> */}
                            </p>
                        </div>
                    </form>
                </div>
            }

            <div>
                <img className='map w-75' src={googlemap} alt="" />
            </div>

        </div>
    );
};

export default Destination;