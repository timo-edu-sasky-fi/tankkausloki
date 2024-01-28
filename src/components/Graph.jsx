import React from 'react';
import { //tuodaan graafiin tarvittavat kirjastot
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

export default function Graph(){
    // haetaan localstoragesta tallennettu data
    const data = JSON.parse(localStorage.getItem('fuelData')) || [];

    return(
        <div>
            <h1>Graafi</h1>
            <ResponsiveContainer width="100%" aspect={1}>
                <LineChart data={data}>
                    <CartesianGrid /> {/*näytetään graafi*/}
                    <XAxis dataKey="kilometers" interval={"preserveStartEnd"} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line
                        dataKey="litres"
                        stroke="yellow"
                        activeDot={{ r: 8 }}
                    />
                    <Line dataKey="price" stroke="green" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
