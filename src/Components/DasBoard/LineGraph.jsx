// import React from 'react';
// import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

// const LineGraph = ({data10,data11}) => {
//   console.log(data10)
  
//   return (
//     <div className='col-12' style={{height:'400px'}}>
//       <VictoryChart theme={VictoryTheme.material}>
//         <VictoryLine
//           style={{
//             data: { stroke: 'red' },
//           }}
//           data={data10}
//         />
//         <VictoryLine
//           style={{
//             data: { stroke: 'blue' },
//           }}
//           data={data11}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default LineGraph;

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = ({ data10, data11 }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data10.map(item => item.x), // Assuming both data10 and data11 have the same x labels
          datasets: [
            {
              label: 'Data 1',
              data: data10.map(item => item.y),
              borderColor: 'blue',
              borderWidth: 2,
              fill: false
            },
            {
              label: 'Data 2',
              data: data11.map(item => item.y),
              borderColor: 'red',
              borderWidth: 2,
              fill: false
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'time' // If x values are dates
            }
          }
        }
      });
    }
  }, [data10, data11]);

  return <canvas ref={chartRef} />;
};

export default LineGraph;


// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const LineGraph = ({ data10, data11 }) => {
//   return (
//     <div className='col-12' style={{ height: '400px' }}>
//       <ResponsiveContainer>
//         <div>
//           <LineChart data={data10}>
//             <XAxis dataKey="x" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="y" stroke="blue" name="Data 1" />
//           </LineChart>
//         </div>
//         <div>
//           <LineChart data={data11}>
//             <XAxis dataKey="x" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="y" stroke="red" name="Data 2" />
//           </LineChart>
//         </div>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default LineGraph;


