import Dropdown from '../lib/components/Dropdown';
import DROPDOWN_DATA from './data/DROPDOWN_DATA.json';
import '../lib/components/dropdown.css';

export default function Exemple(){
    return (
        <>
        <form action="" className="form-newEmployee">
        {DROPDOWN_DATA.map((data, index) => (
            <Dropdown
              key={index}
              type={data.type}
              className={data.className}
              htmlFor={data.id}
              label={data.label}
              id={data.id}
              select={data.select}
             // handleChange={handleChange}
            />
          ))}
          </form>
        </>  
    )
}