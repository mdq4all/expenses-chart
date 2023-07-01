import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import info from '../API/data.json';

//import externalTooltipHandler from '../tools/tooltip';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const days = info.map(element => element.day);
const spends = info.map(element => element.amount);

const data = {
    labels: days,
    datasets: [
        {
            data: spends,
            fill: true,
            borderColor: 'rgb(255, 90, 32)',
            backgroundColor:(context) => {
                const values = context.dataset.data;
                const maxIndex = values.indexOf(Math.max(...values));
                const defaultColor = 'hsl(10, 79%, 65%)';
                const colors = Array(values.length).fill(defaultColor);
                colors[maxIndex] = 'hsl(186, 34%, 60%)';
                return colors;
                },
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
            borderRadius: 3,
            borderSkipped: false
        }
    ]
};

const options = {
    responsive: true,
    animation: true,
    height: 50,
    plugins: {
        legend : {
            display: false
        },
        tooltip: {
            // enabled: false,
            // position: 'nearest',
            // external: externalTooltipHandler,
            callbacks: {
                label: (context) => {
                  const value = context.parsed.y;
                  return `$ ${value}`;
                },
              },
          },
    },

    scales: {
        y: {
            min: 0,
            max: 55,
            display: false,
        },
        x: {
            border:{
                display: false
            },
            grid: {
               drawOnChartArea: false
            },
            ticks: {
                color: 'hsl(28, 10%, 53%)',
            },
        }
    },

    onHover: (event, chartElement) => {

            const element = document.getElementById('myChart');
    
            if (chartElement.length === 0) {
                element.style.cursor = 'default';
                element.title = '';
                return;
              }
            element.style.cursor = 'pointer';
    },
};

export default function BarChart() {
    return <Bar id={'myChart'} options={options} data={data} />;
  }
  