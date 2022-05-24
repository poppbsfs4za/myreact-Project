import React, { useEffect, useState } from 'react'
import "./style.css"
import Resdata from './Resdata'
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'


const Search = () => {

    const [rdata, setRdata] = useState(Resdata);

    const [copydata,setCoppyData]= useState([]);
    //console.log(rdata);
    //console.log(copydata);
    const changeData = (e)=>{
        let getchangedata = e.toLowerCase();

        if(getchangedata == ""){
            setCoppyData(rdata);
        }else{
            let storedata = copydata.filter((ele,k)=>{
            return ele.name.toLowerCase().match(getchangedata)
            });
             setCoppyData(storedata);
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            setCoppyData(Resdata);
        },2000);
        
    },[])

    return (
        <>
           
            <div className='xBar'>
            <Form className='d-flex justify-content-center align-items-center mt-3'>
            <div className='PlaceList'>Place List</div>
                <select className='selectop'>
                    <option>Restaurant</option>
                    <option>Cafe</option>
                    <option>Bakery</option>
                </select>
                <input className='search' type="text" onChange={(e)=>changeData(e.target.value)} placeholder="Search Restaurant">
                </input>

                
            </Form>
            <section className='item_section mt-3 container'>
                    <div className='row mt-3 d-flex justify-content-around align-item-center'>
                        {copydata && copydata.length ?<Cards data={copydata}/>:<Set sdata={rdata}/>}
                    </div>

                </section>
                <div className='yBar'>
            </div>
            </div>
            
            
        </>


    )
}

export default Search