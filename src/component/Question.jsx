import './../assets/dist/css/bootstrap.min.css'
export default function Question(props) 
{

    

    return(
        <div className="mb-3">
            <label className="form-label" for="nom">
                <strong>Question n {props.numero}:</strong>
            </label>
            <input required  className="form-control" type="text"/>
        </div>
    );    
}