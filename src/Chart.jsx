import './styles/Chart.css'
import { Line } from 'react-chartjs-2';
import response from './test.json';
import axios from 'axios';
import { Chart as ChartJS, 
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { useEffect, useState } from 'react';
import { MdHeight } from 'react-icons/md';

ChartJS.register(
    CategoryScale, 
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function Chart(props) {
   
    const [dataList,setDatalist] = useState(props.response.data.list)
    const temps = dataList.map(entry => entry.main.temp); 
    const labels = dataList.map(entry => entry.dt_txt.split("-")[1]+"-"+entry.dt_txt.split("-")[2]); 
    const humidity = dataList.map(entry=> entry.main.humidity)
    const pressure = dataList.map(entry=> entry.main.pressure)
    useEffect(()=>{
        setDatalist(props.response.data.list);
    },[props.response])

    const tempoptions = {
        plugins:{
            title:{
                display: true,
                text:"Temperature",
                color:"Red",
                font:{
                    size:20
                }
            },
            legend:{
                display:false
            },
        },
        responsive:true,
        
    };

    const humoptions = {
        plugins:{
            title:{
                display: true,
                text:"Humidity",
                color:"Blue",
                font:{
                    size:20
                }
            },
            legend:{
                display:false
            }
        },
        responsive:true,
    };
    const pressureoptions = {
        plugins:{
            title:{
                display: true,
                text:"Pressure",
                color:"Green",
                font:{
                    size:20
                }
            },
            legend:{
                display:false
            },
        },
        responsive:true,
    };

    const tempdata = {
        labels: labels,
        datasets: [
            {
                label: "Temperature",
                data: temps,
                borderColor: "red",
            },
        ]
    };
    const humdata = {
        labels: labels,
        datasets: [
            {
                label:"Humidity",
                data:humidity,
                borderColor:"Blue"
            }
        ]
    }
    const pressureData = {
        labels: labels,
        datasets: [
            {
                label:"Pressure",
                data:pressure,
                borderColor:"green"
            }
        ]
    }

    return (
        <div className="Chart">
            <Line options={tempoptions} data={tempdata} />
            <Line options={humoptions} data={humdata}/>
            <Line options={pressureoptions} data={pressureData}/>
        </div>
    );
}
