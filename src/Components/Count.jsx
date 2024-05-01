import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ResponsiveBar } from '@nivo/bar';
import { style } from 'd3';
import { Border } from 'victory';
import './Dash.css'
import App1 from './DasBoard/data1';
import Ord from '../assets/o1.webp'
import pay from '../assets/pay.png'
import nopay from '../assets/nopay.webp'


const Count = () => {
    const [data, setData] = useState(null);
    const [Smdata, setSmdata] = useState([])
    const [ThisMonthCount, setThisMonthCount] = useState([])
    const [TodayDate, setTodayDate] = useState(null)
    const [Last30thDay, setLast30thDay] = useState(null)
    const [From30ThDayCount, SetFrom30ThDayCount] = useState(null)
    const [Last30DaysAmount, SetAmount] = useState(0)
    const [From30DaysAmount, SetAmount2] = useState(0)
    const [CountPer, SetPerCount] = useState('')
    const [PricePer, SetPerPrice] = useState('')
    const [Last30DaysPaidCount, SetLastPaidCount] = useState(0)
    const [From30DaysPaidCount, SetFromPaidCount] = useState(0)
    const [Last30DaysUnPaidCount, SetLastUnPaidCount] = useState(0)
    const [From30DaysUnPaidCount, SetFromUnPaidCount] = useState(0)
    const [PaidPer, SetPerPaid] = useState('')
    const [UnPaidPer, SetUnPerPaid] = useState('')
    const [Last30DaysCustamerCount, SetLastCustamerCount] = useState(0)
    const [From30DaysCustamerCount, SetFromCustamerCount] = useState(0)
    const [TotalCustamerCount, SetTotalCustamerCount] = useState(0)
    const [CustamerPer, SetCustamerPer] = useState(null)
    const [TodayMoney, SetTodayMoney] = useState(0)
    const [TotalMoney, SetTotalMoney] = useState(0)
    const [DateMoney, SetDateMoney] = useState([])
    const [DateMoney2, SetDateMoney2] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/LCODetails/");
                const FilterData = response.data.filter((e) => {
                    return e.Order_Id.username === Number(localStorage.getItem('id'));
                });

                const thirtyDaysAgo = new Date();
                setTodayDate(thirtyDaysAgo.toDateString().slice(3, 10))
                thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 7);
                const daysCount = {};
                let Count = 0
                let SellingPrice = 0
                let Paid = 0
                let UnPaid = 0

                const Normaldata = []
                for (let i = 0; i < 6; i++) {
                    const currentDate = new Date();
                    currentDate.setDate(currentDate.getDate() - i);
                    daysCount[currentDate.toLocaleDateString()] = 0;
                }
                FilterData.forEach((e) => {

                    const orderDate = new Date(e.Order_Id.Date);
                    const currentDate = new Date();
                    if (
                        orderDate > thirtyDaysAgo &&
                        orderDate <= currentDate &&
                        e.Order_Id.OrderCancel === 'No'
                    ) {
                        Normaldata.push({
                            'date': orderDate.toLocaleDateString(),
                            "SellingPrice": e.Order_Id.Selling_Price
                        })
                        daysCount[orderDate.toLocaleDateString()]++;
                        Count += 1
                        SellingPrice += Number(e.Order_Id.Selling_Price)
                        if (e.Order_Id.Payment_Status.toLowerCase().includes('Comp'.toLowerCase())) {

                            Paid += 1
                        } else {
                            UnPaid += 1
                        }

                    }
                });

                SetDateMoney(Normaldata)



                setData(Count)
                SetAmount(SellingPrice)
                setLast30thDay(thirtyDaysAgo.toDateString().slice(3, 10))

                const sixtyDaysAgo = new Date();
                sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 14)
                let Count2 = 0
                let SellingPrice2 = 0
                let Paid2 = 0
                let UnPaid2 = 0
                let MoneyData2 = []



                FilterData.forEach((e) => {
                    const orderDate = new Date(e.Order_Id.Date)
                    if (orderDate.toDateString() <= thirtyDaysAgo.toDateString() && orderDate.toDateString() > sixtyDaysAgo.toDateString() && e.Order_Id.OrderCancel === 'No') {
                        Count2 += 1
                        MoneyData2.push({
                            'date': orderDate.toLocaleDateString(),
                            "SellingPrice": e.Order_Id.Selling_Price
                        })

                        SellingPrice2 += Number(e.Order_Id.Selling_Price)
                        if (e.Order_Id.Payment_Status.toLowerCase().includes('Comp'.toLowerCase())) {
                            Paid2 += 1
                        } else {
                            UnPaid2 += 1
                        }
                    }
                })


                SetDateMoney2(MoneyData2)
                SetFrom30ThDayCount(Count2)
                SetAmount2(SellingPrice2)

                if (Count2 == 0 && Count > 0) {

                    SetPerCount('100%')
                } else if (Count2 == 0 && Count == 0) {
                    SetPerCount('0%')
                } else {
                    if (Count == 0 && Count2 > 0) {
                        SetPerCount('-100%')
                    }
                    else {
                        const Diff = Count - Count2
                        const Per = Math.trunc((Diff / Count2) * 100)
                        SetPerCount(`${String(Per)}%`)


                    }
                }

                if (SellingPrice2 == 0 && SellingPrice > 0) {
                    SetPerPrice('100%')
                }
                else if (SellingPrice == 0 && SellingPrice2 == 0) {
                    SetPerPrice('0%')
                }
                else {
                    if (SellingPrice == 0 > 0 && SellingPrice2 > 0) {
                        SetPerPrice('-100%')
                    } else {
                        const Diff = SellingPrice - SellingPrice2
                        const Per = Math.trunc((Diff / SellingPrice2) * 100)
                        SetPerPrice(`${String(Per)}%`)
                    }
                }

                SetLastPaidCount(Paid)
                SetFromPaidCount(Paid2)
                SetLastUnPaidCount(UnPaid)
                SetFromUnPaidCount(UnPaid2)

                if (Paid2 == 0 && Paid > 0) {
                    SetPerPaid('100%')
                } else if (Paid2 == 0 && Paid == 0 || Paid2 === Paid) {
                    SetPerPaid(String('0%'))

                } else {
                    if (Paid2 > 0 && Paid == 0) {
                        SetPerPaid('-100%')
                    } else {
                        const Diff = Paid - Paid2


                        const Per = Math.trunc((Diff / Paid2) * 100)
                        SetPerPaid(`${String(Per)}%`)



                    }
                }
                if (UnPaid2 == 0 && UnPaid > 0) {
                    SetUnPerPaid('100%')
                } else if (UnPaid2 == 0 && UnPaid == 0) {
                    SetUnPerPaid('0%')
                } else {
                    if (UnPaid2 > 0 && UnPaid == 0) {
                        SetUnPerPaid('-100%')
                    } else {
                        const Diff = UnPaid - UnPaid2
                        const Per = Math.trunc((Diff / UnPaid2) * 100)
                        SetUnPerPaid(`${String(Per)}%`)
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        MoneyCount();
        fetchData();
        CustamerCount();

    }, []);
    const CustamerCount = () => {
        axios.get('http://127.0.0.1:8000/LoginDetails/').then((d) => {
            SetTotalCustamerCount(d.data.length)
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
            const sixtyDaysAgo = new Date();
            sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60)
            let Count = 0
            let Count2 = 0
            const FilterData = d.data
            FilterData.forEach((e) => {
                const jondate = new Date(e.JoinDate)
                const currentDate = new Date()
                if (jondate >= thirtyDaysAgo &&
                    jondate <= currentDate) {
                    Count += 1
                } else if (jondate <= thirtyDaysAgo && jondate >= sixtyDaysAgo) {
                    Count2 += 1
                }

            })
            SetLastCustamerCount(Count)
            SetFromCustamerCount(Count2)
            if (Count2 == 0 && Count > 0) {

                SetCustamerPer('100%')
            } else if (Count2 == 0 && Count == 0) {

                SetCustamerPer('0%')
            } else {
                if (Count == 0 && Count2 > 0) {

                    SetCustamerPer('-100%')
                }
                else {

                    const Diff = Count - Count2
                    const Per = Math.trunc((Diff / Count2) * 100)
                    SetCustamerPer(`${Per >= 100 ? '+' : ''} ${String(Per)}%`)
                }
            }


        })
    }
    const MoneyCount = () => {
        axios.get("http://127.0.0.1:8000/LCODetails/")
            .then((response) => {
                let TodayMoney = 0;
                let TotalMoney = 0;
                const TDate = new Date().toDateString();

                response.data.forEach((e) => {
                    const ODate = new Date(e.Order_Id.Date).toDateString();
                    if (ODate === TDate && e.Order_Id.OrderCancel === 'No') {
                        TodayMoney += Number(e.Order_Id.Selling_Price);
                    }

                    if (e.Order_Id.OrderCancel === 'No') {
                        TotalMoney += Number(e.Order_Id.Selling_Price);
                    }
                });

                SetTodayMoney(TodayMoney);
                SetTotalMoney(TotalMoney)

            })
            .catch((error) => {

                console.error('Error fetching data:', error);
            });
    };





    return (
        <>

            <div className='mt-2   d-flex flex-column d-md-flex flex-md-row   ' style={{ background: '', boxShadow: '0px 0px 10px 10px lightgray' }}>
                <div className=' col-md-6'>
                    {DateMoney && DateMoney2 && <>
                        <App1 data={DateMoney} data2={DateMoney2} />
                    </>}
                </div>
                <div className='col-md-6 row p-4 mt-2 ' >
                    <div className='col-sm-6 mb-2 card p-2 ' style={{ height: '150px', background: '#F0896F', position: 'relative' }} >
                        <span className='text-primary h6'>Last 7 Day's Orders</span>
                        <h6 className='text-white'>{data && data}</h6>
                        <div class="progress" style={{ height: '10px' }}>
                            {CountPer.includes('-') ? <><div class="progress-bar bg-danger" role="progressbar" style={{ width: `${CountPer.slice(1, CountPer.length)}` }} aria-valuenow="10" aria-valuemin="20" aria-valuemax="100"></div></> : <>
                                <div class="progress-bar" role="progressbar" style={{ width: `${CountPer}` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></>}
                        </div>
                        <small className='text-white'>{CountPer} {CountPer.includes('-') ? 'decrease' : 'increase'}</small>
                        <small className='text-white'>Compare to last week</small>
                        <img className='p-2' src="" alt="" style={{ position: 'absolute', bottom: '10px', right: '0px' }} width={80} height={70} srcset={Ord} />

                    </div>
                    <div className='col-sm-6 mb-2 card p-2  ' style={{ height: '150px', background: '#8E4FF5', position: 'relative' }} >
                        <span className='text-light h6'>Last 7 Day's paid Orders</span>
                        <h6 className='text-white'>{Last30DaysPaidCount && Last30DaysPaidCount}</h6>
                        <div class="progress" style={{ height: '10px' }}>
                            {PaidPer && PaidPer.includes('-') ? <><div class="progress-bar bg-danger" role="progressbar" style={{ width: `${PaidPer.slice(1, PaidPer.length)}` }} aria-valuenow="10" aria-valuemin="20" aria-valuemax="100"></div></> : <>
                                <div class="progress-bar" role="progressbar" style={{ width: `${UnPaidPer}` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></>}
                        </div>
                        <small className='text-white'>{PaidPer} {PaidPer.includes('-') ? 'decrease' : 'increase'}</small>
                        <small className='text-white'>Compare to last week</small>
                        <img className='p-2' src="" alt="" style={{ position: 'absolute', bottom: '10px', right: '0px' }} width={80} height={70} srcset={pay} />
                    </div>
                    <div className='col-sm-6 mb-2 card p-2  ' style={{ height: '150px', background: '#1CB185', position: 'relative' }} >
                        <span className='text-light h6'>Last 7 Day's Unpaid Orders</span>
                        <h6 className='text-white'>{Last30DaysUnPaidCount && Last30DaysUnPaidCount}</h6>
                        <div class="progress" style={{ height: '10px' }}>
                            {UnPaidPer && UnPaidPer.includes('-') ? <><div class="progress-bar bg-danger" role="progressbar" style={{ width: `${UnPaidPer.slice(1, UnPaidPer.length)}` }} aria-valuenow="10" aria-valuemin="20" aria-valuemax="100"></div></> : <>
                                <div class="progress-bar" role="progressbar" style={{ width: `${UnPaidPer}` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></>}
                        </div>
                        <small className='text-white'>{UnPaidPer} {UnPaidPer.includes('-') ? 'decrease' : 'increase'}</small>
                        <small className='text-white'>Compare to last week</small>
                        <img className='p-2' src="" alt="" style={{ position: 'absolute', bottom: '-7px', right: '0px', }} width={80} height={70} srcset={nopay} />
                    </div>
                    <div className='col-sm-6 col-xl-6 mb-2 card p-2  ' style={{ height: '150px', background: '#47277A', position: 'relative' }} >
                        <span className='text-light h6'>Last 7 Day's Revenue</span>
                        <h6 className='text-white'><i class="fa-solid fa-indian-rupee-sign text-dark mr-1 "></i>{Last30DaysAmount && Last30DaysAmount}</h6>
                        <div class="progress" style={{ height: '10px' }}>
                            {PricePer && PricePer.includes('-') ? <><div class="progress-bar bg-danger" role="progressbar" style={{ width: `${PricePer.slice(1, PricePer.length)}` }} aria-valuenow="10" aria-valuemin="20" aria-valuemax="100"></div></> : <>
                                <div class="progress-bar" role="progressbar" style={{ width: `${PricePer}` }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></>}
                        </div>
                        <small className='text-white'>{PricePer} {PricePer.includes('-') ? 'decrease' : 'increase'}</small>
                        <small className='text-white'>Compare to last week</small>
                        <img className='p-2' src="" alt="" style={{ position: 'absolute', bottom: '-7px', right: '0px', }} width={80} height={70} srcset={nopay} />
                    </div>
                </div>

            </div>
            {/*  */}
            <div className='card col-12 d-flex flex-column d-sm-flex flex-sm-row justify-content-around p-2' >
                <div className='col-sm-6 col-md-5 col-lg-3 mb-2 card p-2  ' style={{ height: '150px', position: 'relative', }} >
                    <span className='text-dark h6'>Today Revenue</span>
                    <h6 className='text-dark'><i class="fa-solid fa-indian-rupee-sign text-dark mr-1 "></i>{TodayMoney && TodayMoney}</h6>
                   
                    <div className='d-flex flex-row justify-content-end'>
                        <div className='p-3 card rounded-circle' style={{ fontSize: '30px', boxShadow: '0px 0px 10px 2px #1CB185 '}}>
                        <i class="fa-solid fa-coins"></i>
                        </div>

                    </div>

                </div>
                <div className='col-sm-6 col-md-5 col-lg-3 mb-2 card p-2  ' style={{ height: '150px', position: 'relative' }} >
                    <span className='text-dark h6'>Total Revenuve</span>
                    <h6 className='text-dark'><i class="fa-solid fa-indian-rupee-sign text-dark mr-1 "></i>{TotalMoney && TotalMoney}</h6>

                    <div className='d-flex flex-row justify-content-end'>
                        <div className='p-3 card rounded-circle' style={{ fontSize: '30px', boxShadow: '0px 0px 10px 0px #8E4FF5 ',backgroundColor: '#e0f7fa' }}>
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                        </div>

                    </div>

                </div>
                <div className='d-none d-lg-block col-sm-6 col-md-5 col-lg-3 mb-2 card p-2  ' style={{ height: '150px', position: 'relative', }} >
                    <span className='text-dark h6'>Total Customers</span>
                    <h6 className='text-dark'>{TotalCustamerCount && TotalCustamerCount}</h6>
                    <div className='d-flex flex-row justify-content-end'>
                        <div className='p-3 card rounded-circle' style={{ fontSize: '30px', boxShadow: '0px 0px 10px 0px #47277A ', }}>
                            <i class="fa-solid fa-users"></i>
                        </div>

                    </div>
                </div>
                <div className='d-none d-lg-block col-sm-6 col-md-5 col-lg-3 mb-2 card p-2  ' style={{ height: '150px', position: 'relative' }} >
                    <span className='text-dark h6'>Last 30 Day's New Custamers </span>
                    <h6 className='text-dark'>{Last30DaysCustamerCount && Last30DaysCustamerCount}</h6>
                    <div className='d-flex flex-row justify-content-end'>
                        <div className='p-3 card rounded-circle' style={{ fontSize: '30px', boxShadow: '0px 0px 10px 0px #F0896F' }}>
                            <i class="fa-regular fa-user"></i>
                        </div>

                    </div>

                </div>
            </div>
            <div className='card col-12  d-sm-flex flex-sm-row justify-content-around p-2 d-lg-none' >
                <div className='d-block d-lg-none col-sm-6 col-md-5 col-lg-3 mb-2 card p-2  ' style={{ height: '150px', position: 'relative' }} >
                    <span className='text-dark h6'>Total Customers</span>
                    <h6 className='text-dark'>{TotalCustamerCount && TotalCustamerCount}</h6>
                    <div className='d-flex flex-row justify-content-end'>
                        <div className='p-3 card rounded-circle' style={{ fontSize: '30px', boxShadow: '0px 0px 10px 0px #47277A ' }}>
                            <i class="fa-solid fa-users"></i>
                        </div>

                    </div>
                </div>
                <div className='d-block d-lg-none col-sm-6 col-md-5 col-lg-3 mb-2 card p-2  ' style={{ height: '150px', position: 'relative' }} >
                    <span className='text-dark h6'>Last 30 Day's New Custamers </span>
                    <h6 className='text-dark'>{Last30DaysCustamerCount && Last30DaysCustamerCount}</h6>
                    <div className='d-flex flex-row justify-content-end'>
                        <div className='p-3 card rounded-circle' style={{ fontSize: '30px', boxShadow: '0px 0px 10px 0px #F0896F' }}>
                            <i class="fa-regular fa-user"></i>
                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}
export default Count
