import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
    {month: "Jan", revenue: 20000, units: 300},
    {month: "Feb", revenue: 25000, units: 330},
    {month: "Mar", revenue: 22000, units: 270},
]

function ChartDiv() {
    return (
        <div>
            <h1>Recharts</h1>
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="4 4"></CartesianGrid>
                    <XAxis dataKey="month"></XAxis>
                    <YAxis yAxisId="left" orientation='left'></YAxis>
                    <YAxis yAxisId="right" orientation='right'></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line dataKey="revenue" name="Revenue (₹)" stroke='red' type="monotone" yAxisId="left"></Line>
                    <Line dataKey="units" name="Units Sold" stroke='black' type="linear" yAxisId="right"></Line>
            </LineChart>
            </ResponsiveContainer>
            </div>
    );
};

export default ChartDiv;