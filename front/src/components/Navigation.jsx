import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex p-4 flex-wrap justify-between">
      
      <Link to='/tareas' className="max-sm:w-full text-center w-auto"><h1 className=" font-bold text-3xl mb-4">App de Tareas con React</h1></Link>
      
      <button className="max-sm:w-full w-auto bg-indigo-500 px-3 py-2 rounded-lg"><Link to="/tareas-crear" >Crea Una Tarea</Link></button>
    </div>
  )
}