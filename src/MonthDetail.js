import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const MonthDetail = () => {
    const { id } = useParams();
    const {data:month, isPending, error} = useFetch("https://json-server-host.vercel.app/mm_Months/"+id)
    return ( 

            <div className="py-5 container-fluid bg-white">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {month && 
                    (<div className="container text-center">
                        <div className="row mb-3"><h1>{`${month.MonthMm} (${month.MonthEn})`}</h1></div>
                        <div className="row mb-3"><h2>{`${month.FestivalMm} (${month.FestivalEn})`}</h2></div>
                        <div className="row mb-3 justify-content-center">
                            <Link to='/months' className="btn btn-outline-secondary col-auto">Back</Link>
                        </div>
                       <div className="row ">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card img-fluid mb-2">
                                            <img src={require(`./img/month${id}.jpg`)} 
                                                alt="monthly festivals" />
                                        </div>
                                        {month.Description}</div>
                                    <div className="col-md-6">{month.Detail}</div>
                                </div>
                            </div>
                        </div>

                    </div>)
            }
            </div>
 
    );
}
 
export default MonthDetail;
