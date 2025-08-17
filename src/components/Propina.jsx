

const Propina = () => {


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <label htmlFor="" className="fs-4">Total de la cuenta: </label>
                    <input type="text" className="form-control mt-3" id="total-cuenta"/>
                </div>

                <div className="col-6">
                    <label htmlFor="" className="fs-4">Porcentaje de la Propina </label>
                    <select className="form-select mt-3">
                        <option selected>Seleccionar Porcentaje</option>
                        <option value="1">10%</option>
                        <option value="2">15%</option>
                        <option value="3">20%</option>
                    </select>
                </div>

                <div className="col-6 d-flex align-items-center mt-5">
                    <label htmlFor="" className="fs-4">Propina: </label>
                    <input type="text" className="form-control mt-3 mx-5"  readOnly />
                </div>

                <div className="col-12">
                    <div className="row">
                        <div className="col-8 d-flex align-items-center mt-5">
                            <h2>Total Pagar: </h2>
                            <h2 className=""></h2>
                        </div>
                    </div>
                </div>


                <div className="col-12 mt-5">
                    <button className="btn btn-success mx-4 fs-5">Calcular Propina</button>
                    <button className="btn btn-danger fs-5">Limpiar</button>
                </div>
            </div>


        </div>
    );
}

export default Propina; 