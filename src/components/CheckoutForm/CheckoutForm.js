import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';


const CheckoutForm = ({ onConfirm }) => {
 
    console.log('onConfirm prop:', onConfirm);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");


    // const handleConfirmOrder = async (e) => {
    //     e.preventDefault();

    //     // Crear un nuevo documento con los datos del formulario
    //     const orderData = {
    //         name,
    //         phone,
    //         email,
    //         status: 'generada',
    //         timestamp: serverTimestamp(),
    //     };

    //     // onConfirm(orderData);

    //     // Obtener la instancia de la base de datos de Firebase
    //     const db = getFirestore();

    //     // Agregar el nuevo documento a la colección 'orders'
    //     try {
    //         const docRef = await addDoc(collection(db, 'orders'), orderData);
    //         console.log('Documento agregado con ID: ', docRef.id);
    //     } catch (error) {
    //         console.error('Error al agregar el documento: ', error);
    //     }

    //     // Limpiar los campos del formulario después de enviar
    //     setName('');
    //     setPhone('');
    //     setEmail('');
    // };

    const handleConfirmOrder = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div >
            <form onSubmit={handleConfirmOrder}>
                <label>Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>Phone Number
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label>Email
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <button type="submit">Create Order</button>
            </form>
        </div>
    )
}

export default CheckoutForm;
