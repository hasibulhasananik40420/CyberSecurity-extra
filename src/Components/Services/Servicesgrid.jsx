import React from 'react'
import ServiceCard from './ServiceCard'
import icon1 from "../../assets/services/icon1.svg";
import icon2 from "../../assets/services/icon2.svg";
import icon3 from "../../assets/services/icon3.svg";
import icon4 from "../../assets/services/icon4.svg";
import icon5 from "../../assets/services/icon5.svg";
import icon6 from "../../assets/services/icon6.svg";
import icon7 from "../../assets/services/icon7.svg";
import icon8 from "../../assets/services/icon8.svg";
import icon9 from "../../assets/services/icon9.svg";
import icon10 from "../../assets/services/icon10.svg";
import icon11 from "../../assets/services/icon11.svg";
import icon12 from "../../assets/services/icon12.svg";
import icon13 from "../../assets/services/icon13.svg";
import icon14 from "../../assets/services/icon14.svg";
import icon15 from "../../assets/services/icon15.png";
import { data } from 'autoprefixer';

function Servicesgrid() {
const datas = [
    {
        _id: 1,
        icon : icon1,
        title: 'Spyware Protection',
    },
    {
        _id: 2,
        icon : icon2,
        title: 'Fast Cloud Backup',
    },
    {
        _id: 3,
        icon : icon3,
        title: 'Database Security',
    },
    {
        _id: 4,
        icon : icon4,
        title: 'Transaction Security',
    },
    {
        _id: 5,
        icon : icon5,
        title: 'Spambot Shield',
    },
    {
        _id: 6,
        icon : icon6,
        title: 'A.I. Threat Learning',
    },
    {
        _id: 7,
        icon : icon7,
        title: 'Client Protection',
    },
    {
        _id: 8,
        icon : icon8,
        title: 'Scheduled Backups',
    },
    {
        _id: 9,
        icon : icon9,
        title: 'Network Scanning',
    },
    {
        _id: 10,
        icon : icon10,
        title: 'CPU Threats Safety',
    },
    {
        _id: 11,
        icon : icon11,
        title: 'Disaster Recovery',
    },
    {
        _id: 12,
        icon : icon12 ,
        title: 'Face Recognition',
    },
    {
        _id: 13,
        icon : icon13 ,
        title: 'Location Tracking',
    },
    {
        _id: 14,
        icon : icon14 ,
        title: 'Terminal Protection',
    },
    {
        _id: 15,
        icon : icon15 ,
        title: 'Logistic Security',
    },
]

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  max-w-6xl mx-auto content-center items-center my-6 py-12'>
            {
                datas?.map(data => <ServiceCard  key={data._id} data={data} /> )
            }
            
        </div>
    )
}

export default Servicesgrid