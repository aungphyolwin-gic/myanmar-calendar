import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import useFetch from "./useFetch";
import { Carousel } from "react-bootstrap";
import Month from "./Month";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export const Months = () => {
  const { data: months, isPending, error } = useFetch(
    "https://json-server-host.vercel.app/mm_Months"
  );

  const [monthCount, setmonthCount] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 959) {
        setmonthCount(4);
      } 
      else if (window.innerWidth >759) {
        setmonthCount(3);
      } 
      else if (window.innerWidth > 559) {
        setmonthCount(2);
      }
      else {
        setmonthCount(1);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const numSlides = months && Math.ceil(months.length / monthCount);
  const slideIndices = Array.from({ length: numSlides }, (_, index) => index);

  return (
    <>
      <div className="month-session bg-black text-white">
        <div className="container mt-5 ">
          <div className="d-flex row-cols-2 lh-lg justify-content-between mb-3 ">
            <div className="col fs-1 text-decoration-none text-white">
              <Link to='/' className='text-white'><IoMdArrowBack /></Link>
            </div>
            <div className="col-auto">
              <h2 className="d-inline-flex bg-white text-black h1 p-3">
                မြန်မာလ အသေးစိတ်များ
              </h2>
            </div>
          </div>

          {isPending && <div>Loading ... </div>}
          {error && <div> {error} </div>}

          {/* months cards  */}
          {months && (
            <>  
              <Carousel>
                {slideIndices.map((slideIndex) => (
                  <Carousel.Item key={slideIndex}>
                      <div className="row row-cols-lg-4  row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center align-items-stretch ">
                    {months
                      .slice(slideIndex * monthCount, slideIndex * monthCount + monthCount)
                      .map((month) => (
                            <Month month={month} key={month.id} />
                          ))}
                          </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </>
          )}
        </div>
      </div>
    </>
  );
};
