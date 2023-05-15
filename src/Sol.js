function Sol(props) {


    return (
        <>
        <center>
        <div className="bg-dark text-white rounded mx-3 border border-black p-5" style={{height:"30em"}}>
            <div className="row">
                <div className="col-12">
                    <h1>{props.baslik}</h1>
                </div>
            </div>
            <hr/>
            <div className="row px-5">
                <div className="col-12">
                    <p className="fs-5">{props.icerik}</p>
                </div>
            </div>
        </div></center>
        </>
        );
}
export default Sol;