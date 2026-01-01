import {Link} from 'react-router-dom';

function Navbar() {
  
  return (
    <div>
          <div className="nav flex items-center justify-between h-16 px-4 sm:px-6 lg:px-10 border-b border-gray-700">
            <div className="logo ">
                <h3 className="text-[25px] sp-text font-bold">CRUD Operation Task</h3>
            </div>
            <div className="icons flex items-center text-2xl font-bold gap-3.75">
                <div className="icon"><Link to="/login" >LOGIN</Link></div>
                <div className="icon"><Link to="/register" >REGISTER</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar