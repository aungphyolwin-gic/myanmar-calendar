import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ImArrowLeft, ImParagraphLeft } from "react-icons/im";

const Month = ({month}) => {
    
    return ( 
        <>

            <div className="col">
                <Link to={`/months/${month.id}`}>
                    <div className="card ratio mb-4" style={{'--bs-aspect-ratio': '150%'}}>
                        <img src={require(`./img/${month.id}.jpg`)} alt="Month flower" 
                            className=" img-fluid img-thumbnail " />

                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <div className="text-white shadow h3 "> { month.MonthMm} </div> 
                            <div className="text-white h4">
                                <ImParagraphLeft />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>

        </>
     );
}
 
export default Month;