import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
class StatEmploye extends Component {
    state = { 
        listeRepart:[
            {
                isa:"",
                genre:""
            }
        ],
        listeEmpCat:[
            {
                isa:0,
                nomcategorie:""
            }
        ],
        listeEmpDept:[
            {
                isa:0,
                nomdept:""
            }
        ]
    }
    constructor () {
        super();
        this.initialize();
    }

    initialize =()=> {
        this.askService(URLHelper.urlgen("getPercentEmp.php"));
        console.log(URLHelper.urlgen("getPercentEmp.php"));
    } 
    askService = (url) => {
        fetch(url,{crossDomain:true,method:'GET', headers: {}})
        .then(res => { return res.json();})
        .then(data=>{
            console.log(data);
            this.setState(data);
         })
    }
    render() { 
        return (
            <React.Fragment>
                <h3>Repartition des genres</h3>
                <table style={{width: "300px"}}>
                    <thead>
                        <tr>
                            <th>genre</th>
                            <th>isa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listeRepart.map(repart=>
                        <tr>
                            <td>{repart.genre}</td>
                            <td>{repart.isa}</td>
                        </tr>
                        )}
                        
                    </tbody>
                </table>
                <h3>Repartition selon les catégories</h3>
                <table style={{width:"300px"}}>
                    <thead>
                        <tr>
                            <th>Nom Categorie</th>
                            <th>nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listeEmpCat.map(empcat=>
                        <tr>
                            <td>{empcat.nomcategorie}</td>
                            <td>{empcat.isa}</td>
                        </tr>
                            )}
                        
                    </tbody>
                </table>
                <h3>Repartition selon les déplacements</h3>
                <table style={{width:"300px"}}>
                    <thead>
                        <tr>
                            <th>Nom Departement</th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.listeEmpDept.map(empDept=>
                        <tr>
                            <td>{empDept.nomdept}</td>
                            <td>{empDept.isa}</td>
                        </tr>
                            )}
                        
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default StatEmploye;