import './../assets/dist/css/bootstrap.min.css'
import './../assets/css/TableList.css'
import { useState } from 'react';
export default class TableList {
    tr =useState([
        {valeur1: "aa",valeur2:"bb",valeur3:"55"},
        {valeur1: "aa",valeur2:"bb",valeur3:"55"}
    ]); 

render() {
    return(
        <div className="card shadow mb-3">
                                        
                <div className="title-card card-header py-3">
                    <p className="text m-0 fw-bold">{this.props.title}</p>
                </div>
        
                <div className="card-body">
                    <div className="d-flex flex-column flex-shrink-0">
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prenom</th>
                                    <th scope="col">{this.props.list}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.tr.map((td => 
                                        <tr>
                                            <td>{td.valeur1}</td>
                                            <td>{td.valeur2}</td>
                                            <td>{td.valeur3}</td>
                                        </tr>    
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
        
        </div>
    );
}
}