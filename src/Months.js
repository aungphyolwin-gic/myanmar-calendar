import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import useFetch from './useFetch';
import Month from './Month';

export const Months = () => {
    const {data: months, isPending, error} = useFetch("https://json-server-host.vercel.app/mm_Months");
    
  return (
    <>
        <div className="month-session bg-black text-white">
            <div className="container mt-5 ">
                <div className="row row-cols-2 lh-lg justify-content-between mb-3 ">
                    <div className="col text-white fs-1 ">
                        <IoMdArrowBack />
                    </div>
                    <div className="col">
                        <h2 className='d-inline-flex bg-white text-black h1 p-3'>မြန်မာလ အသေးစိတ်များ</h2>
                    </div>
                </div>

                <div className='row row-cols-lg-4  row-cols-md-3 row-cols-sm-2 row-cols-1 align-items-stretch '>

                    { isPending && <div>Loading ... </div> }
                    { error && <div> {error} </div> }
                    {
                        (months && months.map((month)=>(

                                <Month month={month} />

                        ))
                        )
                    }

                </div>

            </div>
        </div>
    </>
  )
}
