import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const studentsData = [
        {
          id: 1,
          name: "John",
          math: 85,
          economics: 76,
          english: 82,
        },
        {
          id: 2,
          name: "Emily",
          math: 78,
          economics: 92,
          english: 88,
        },
        {
          id: 3,
          name: "David",
          math: 91,
          economics: 85,
          english: 77,
        },
        {
          id: 4,
          name: "Sophie",
          math: 63,
          economics: 70,
          english: 82,
        },
        {
          id: 5,
          name: "Michael",
          math: 72,
          economics: 79,
          english: 90,
        },
        {
          id: 6,
          name: "Alice",
          math: 84,
          economics: 81,
          english: 77,
        },
        {
          id: 7,
          name: "Jacob",
          math: 90,
          economics: 88,
          english: 94,
        },
        {
          id: 8,
          name: "Olivia",
          math: 68,
          economics: 73,
          english: 81,
        },
        {
          id: 9,
          name: "Daniel",
          math: 77,
          economics: 85,
          english: 73,
        },
        {
          id: 10,
          name: "Isabella",
          math: 79,
          economics: 81,
          english: 87,
        },
      ];
      
    return (
        <div className='flex justify-center p-20'>
            <div>
            <LineChart
             width={1000}
             height={700}
             data={studentsData}
             >
                <Line dataKey={'math'} stroke='#000000'></Line>
                <Line dataKey={'economics'}></Line>
                <Line dataKey={'english'} stroke='#8884d8'></Line>
                <XAxis dataKey='name' />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
             </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;