import { useState } from "react";
import Notaslis from "./notaslis";

const Notas = () => {
  const [title, setTitle] = useState("");
  const [notas, setNotas] = useState([]);
  const [editItem, setEditItem] = useState(null);

  function handleInputChange(e) {
    set.Title(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newNotaslis = {
      id: Date.now(),
      //id: crypto.randomUUID(),
      title: title,
      complete:false
    };

    const oldNotas = [... notas];
    oldNotas.unshift(newNotaslis);

    setNotas(oldNotas);
    setTitle("");
  }

  function handleDelete(id) {
    const tempNotas = notas.filter((item) => item.id !== id);

    setNOtas([...tempNotas]);
  }

  function handleUpdate(id, value) {
    const temp = [... notas];
    const item = temp.find((item) => item.id === id); 
    item.title = value;
    setNotas(...temp);
  }

  function handleCheckboxChange(id, status) {
    const temp = [... notas];
    const item = temp.find((item) => item.id === id); 
    item.complete = status;

    console.log("Holis");
    setNotas([...temp]);
  }

  return (
      <>
     <div className="text-3xl text-center">
          <form className="" onSubmit={handleSubmit}>
            <input
             onChange={handleInputChange}
             value={title}
             className="notaslisInput"
             />

            <input
             type={"submit"}
             value="Boton"
             className="buttonBoton"
             />            
          </form>  

     <div className="text-5xl text-center">
        {notas.map((item) => (
          <Notaslis
           key={item.id} 
           item={item} 
           onUpdate={handleUpdate}
           onDelete={handleDelete} 
           onComplete={handleCheckboxChange}
           />
          ))}
     </div>  
    </div>    
    </>
    );
}

export default Notas;