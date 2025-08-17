import UsePropina from "../hooks/UsePropina";

const Propina = () => {

    const {

        subCuenta,
        setSubCuenta,
        selectPropina,
        setSelectPropina,
        propina,
        setPropina,
        totalPagar,
        setTotalPagar,
        calcularPropina,
        Limpiar

    } = UsePropina();

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <label htmlFor="" className="fs-4">Total de la cuenta: </label>
                    <input type="text" className="form-control mt-3" value={subCuenta} onChange={(e) => setSubCuenta(e.target.value)} />
                </div>

                <div className="col-6">
                    <label htmlFor="" className="fs-4">Porcentaje de la Propina </label>
                    <select className="form-select mt-3" value={selectPropina} onChange={(e) => setSelectPropina(e.target.value)}>
                        <option value="">Seleccionar Porcentaje</option>
                        <option value="10">10%</option>
                        <option value="15">15%</option>
                        <option value="20">20%</option>
                    </select>
                </div>

                <div className="col-6 d-flex align-items-center mt-5">
                    <label htmlFor="" className="fs-4">Propina: </label>
                    <input type="text" className="form-control mt-3 mx-5" readOnly value={propina} />
                </div>

                <div className="col-12">
                    <div className="row">
                        <div className="col-8 d-flex align-items-center mt-5 ">
                            <h2 className="fs-4 fw-normal">Total Pagar:  </h2>
                            <h2 className="mx-3 fs-4 fw-normal">L.{totalPagar}</h2>
                        </div>
                    </div>
                </div>


                <div className="col-12 mt-5">
                    <button className="btn btn-success mx-4 fs-5" onClick={calcularPropina}>Calcular Propina</button>
                    <button className="btn btn-danger fs-5" onClick={Limpiar}>Limpiar</button>
                </div>
            </div>


        </div>
    );
}

export default Propina; 