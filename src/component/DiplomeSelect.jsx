export default function DiplomeSelect(props) 
{
    return(
        <div className="row mb-3">
            <label className="form-label" for="address">
                <strong>Diplôme {props.numero}</strong>
            </label>
            <div className="col">
                <select name={props.nameSelect} id="diplomeSelect" className="form-control">
                    <option value="">Choix ...</option>
                    <option value="l">Licence</option>
                    <option value="m">Master</option>
                    <option value="d">Dotocra</option>
                </select>
            </div>
            <div className="col">
                <input type="text" className="form-control" name={props.nameInput} placeholder="Filiére" />
            </div>
        </div>
    );
}