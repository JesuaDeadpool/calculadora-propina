import { useState } from "react"
import Swal from "sweetalert2";

const UsePropina = () => {

    const [subCuenta, setSubCuenta] = useState('');
    const [selectPropina, setSelectPropina] = useState('');
    const [propina, setPropina] = useState('');
    const [totalPagar, setTotalPagar] = useState('');

    const calcularPropina = () => {
        if (subCuenta === "") {
            alerta("Debe ingresar el total de la cuenta ");
        } else if (selectPropina === '0') {
            alerta("Debe seleccionar el porcentaje de la propina ");
        } else {
            let numSelecPropina = selectPropina === '1' ? .1 : selectPropina === '2' ? .15 : selectPropina === '3' ? .2 : 0;
            let propinaCa = Number(subCuenta) * Number(numSelecPropina);
            setPropina(propinaCa); 
            let totalPago = propinaCa + numSelecPropina; 
            setTotalPagar(totalPago); 
            
        }
    }

    const limpiar = () => {

    }

    const alerta = (mensaje) => {
        Swal.fire({
            title: mensaje,
            icon: "warning"
        });
    }

}

export default UsePropina; 