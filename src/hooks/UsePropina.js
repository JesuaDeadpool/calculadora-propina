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
        } else if (selectPropina === "") {
            alerta("Debe seleccionar el porcentaje de la propina ");
        } else {
           let numSelecPropina = selectPropina === '10' ? .1 : selectPropina === '15' ? .15 : selectPropina === '20' ? .2 : 0;
            let propinaCa = Number(subCuenta) * numSelecPropina;
            setPropina(propinaCa.toFixed(2)); 
            let totalPago = propinaCa + Number(subCuenta); 
            setTotalPagar(totalPago.toFixed(2)); 
        }
    }

    const Limpiar = () => {
        setSubCuenta(''); 
        setSelectPropina(''); 
        setPropina(''); 
        setTotalPagar(''); 
    }

    const alerta = (mensaje) => {
        Swal.fire({
            title: mensaje,
            icon: "warning"
        });
    }

    return{
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
    }

}

export default UsePropina; 