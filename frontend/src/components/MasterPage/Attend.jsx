import {Doughnut} from 'react-chartjs-2'
import { Chart as ChartJS,defaults } from 'chart.js/auto';
import { ArcElement } from 'chart.js';
import source from './source.json';
ChartJS.register(ArcElement);
defaults.plugins.title.color="white";
defaults.plugins.title.font.size=20;
defaults.plugins.title.font.weight="bold";
defaults.plugins.title.display=true;

export default function Attend(){
  return(<>
  <Doughnut className="text-white "
        data={{
          labels:source.map((data)=>data.label),

          datasets: [
            {
              label: "Attendance",
              data: source.map((data)=>data.value),
              backgroundColor: [
                "rgba(0,255,128,1)",
                "rgba(255,51,51,1)"
              ],

            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Attendance Chart'
            },
            datalabels:{
              color:'white',

            formatter: (value, context) => {
              return context.chart.data.labels[context.dataIndex];
          }}
        }}
      } /></>)
}
