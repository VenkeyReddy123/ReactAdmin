import React, { useState } from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import axios from 'axios';
import { useEffect } from 'react';

const PaymentStatusPieChart = () => {
    const [PaymentDone, SetPaymentDone] = useState(0)
    const [PaymentNotDone, SetPaymentNotDone] = useState(0)
    const [data, SetData] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/LCODetails/").then((d) => {
            const PayDone = []
            const PayNot = []
            const Data = d.data.filter((e) => {
                return e.Order_Id.username === Number(localStorage.getItem('id'));
            });
            const FilterData = Data.filter((e) => {
                return e.Order_Id.OrderCancel === 'No'
            })
            FilterData.forEach((e) => {
            
                if (e.Order_Id.Payment_Status.toLocaleLowerCase().includes('Compl'.toLocaleLowerCase())) {
                    PayDone.unshift(e)
                } else {
                    PayNot.unshift(e)
                }
            })
            if ((Math.trunc((PayDone.length / FilterData.length) * 100) + Math.trunc((PayNot.length / FilterData.length) * 100)) === 100) {
                const data = [
                    { x: `${Math.trunc((PayDone.length / FilterData.length) * 100)}% Complete`, y: 70, color: '#3182CE' }, // Blue color for 'Done' status
                    { x: `${Math.trunc((PayNot.length / FilterData.length) * 100)}% Pending`, y: 30, color: '#E53E3E' }, // Red color for 'Incomplete' status
                ];
                SetData(data)
            } else {
                const data = [
                    { x: `${Math.trunc((PayDone.length / FilterData.length) * 100)}% Complete`, y: 70, color: '#3182CE' }, // Blue color for 'Done' status
                    { x: `${Math.trunc((PayNot.length / FilterData.length) * 100) + 1}% Pending`, y: 30, color: '#E53E3E' }, // Red color for 'Incomplete' status
                ];
                SetData(data)
            }

        })
    },[])


    return (
        <>
            <div className='p-5 col-12 '>
            <small className='text-success p-2' style={{fontWeight:'bold',fontFamily:'initial'}}>Payment Status</small>
                {data && <>
                    <svg className='' viewBox="0 0 400 400">
                        <VictoryPie
                            standalone={false}
                            width={400} height={400}
                            data={data}
                            colorScale={data.map(d => d.color)}
                            labelRadius={({ innerRadius }) => innerRadius + 50}
                            style={{
                                labels: { fill: 'white', fontSize: 12, fontWeight: 'bold' }
                            }}
                        />

                    </svg>
                    
                </>}
                
            </div>
        </>
    );
};

export default PaymentStatusPieChart;
