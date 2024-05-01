import React, { useEffect, useState } from 'react';
import MoneyLineChart from './LineGraph';
import LineGraph from './LineGraph';


const App1 = ({ data,data2 }) => {
   const[Data,SetData]=useState([])
   const[Data2,SetData2]=useState([])
   
    
    useEffect(() => {
      
        let td = 0
        let td2 = 0
        let td3 = 0
        let td4 = 0
        let td5 = 0
        let td6 = 0
        let td7 = 0
        let td8 = 0
        let td9 = 0
        let td10 = 0
        let td11 = 0
        let td12 = 0
        let td13 = 0
        let td14 = 0
      
        
        data2.map((e) => {
            if (new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td8 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (8 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td9 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (9 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td10 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (10 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td11 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (11 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td12 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (12 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td13 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (13 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td14 +=  Number(e.SellingPrice)
                
            }
        })
    

        data.map((e) => {
            if (new Date().getFullYear() === new Date(e.date).getFullYear() && new Date(e.date).getDate() == new Date().getDate() && new Date(e.date).getMonth() === new Date().getMonth()) {
                td += Number(e.SellingPrice)
               
            }
            else if (new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td2 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td3 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td4 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td5 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td6 +=  Number(e.SellingPrice)
                
            }
            else if (new Date(new Date().getTime() - (6 * 24 * 60 * 60 * 1000)).toLocaleDateString()=== new Date(e.date).toLocaleDateString()) {
                td7 +=  Number(e.SellingPrice)
              
                
            }
        })
        
   
       
       
        const data10=[
            {
                x:`${new Date().toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td
            },
            {
                x:`${new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (8 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td2
            },
            {
                x:`${new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (9 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td3
            },
            {
                x:`${new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (10 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td4
            },
            {
                x:`${new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (11 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td5
            },
            {
                x:`${new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (12 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td6
            },
            {
                x:`${new Date(new Date().getTime() - (6 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (13 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td7
            },
        ]
    
        const data11=[
            {
               x:`${new Date().toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td8
            },
            {
                x:`${new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (8 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td9
            },
            {
                x:`${new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (9 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td10
            },
            {
                x:`${new Date(new Date().getTime() - (3 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (10 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td11
            },
            {
                x:`${new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (11 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td12
            },
            {
                x:`${new Date(new Date().getTime() - (5 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (12 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td13
            },
            {
                x:`${new Date(new Date().getTime() - (6 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)} \n ${new Date(new Date().getTime() - (13 * 24 * 60 * 60 * 1000)).toDateString().slice(3,10)}`,
                y:td14
            },
        ]
   

        SetData(data10)
        SetData2(data11)
        console.log(data10)
       
    
       
       
    },[])



    return (
        <div className=' p-2 mt-' style={{overflow:'hidden'}}>
           <span className=' mb-2  col-12  '>Last 7Day's Earnings</span>
           <div className='card ' style={{height:'400px',width:'100%'}}>
              {Data&&Data2&&<>
                <LineGraph data10={Data} data11={Data2}/>
              </>}
           </div>
          
        </div>
    );
};

export default App1;

