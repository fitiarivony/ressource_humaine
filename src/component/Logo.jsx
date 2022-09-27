import './../assets/dist/css/bootstrap.min.css'
import '../assets/css/Logo.css'
export default function Logo(props){

    return (
        <div class="card mb-3">
            <div class="card-body text-center shadow">
                <img className=" mb-3 mt-4" src={props.source} width="300" height="300" />
            </div>
        </div>
    );
} 