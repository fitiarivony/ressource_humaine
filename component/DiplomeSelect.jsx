import { useState } from 'react';
import URLHelper from '../Helper/URLHelper';
export default function DiplomeSelect(props) 
{
   const getDiplome=() => {
        
        let url="inscription/selectdiplome.php"
        getURLDiplome(URLHelper.urlgen(url));
    }
    const [diplome,setDiplome]=useState([]);
  const  getURLDiplome=(url)=>{
        fetch(url,{crossDomain:true,method:'GET',headers:{}})
        .then(res=>{return res.json() ; })
        .then(data=>{ 
           setDiplome(data);
         });
        
    }
    getDiplome();
    return(
        <div className="row mb-3">
            <label className="form-label" for="address">
                <strong>Diplôme {props.numero}</strong>
            </label>
            <div className="col">
                <select name={props.nameSelect} id={props.nameSelect} className="form-control">
                    {diplome.map((dip)=>
                      <option value={dip.iddiplome}>{dip.nomdiplome}</option>
                    )}
                </select>
            </div>
            <div className="col">
                <input type="text" className="form-control" name={props.nameInput} id={props.nameInput} placeholder="Filiére" />
            </div>
        </div>
    );
}