import React, { Component } from 'react';
import URLHelper from '../../Helper/URLHelper';
class TablePlanning extends Component {
    state = { 
        dept:[{
            iddept: "",
            nomdept: ""
        }],
        table:[{ 
            partage:[{
                idemploye: "",
                nom:"",
                prenom:"",
                iddept: ""
            }],
            daty:{
                debut:"",
                fin:""
            }
        }],
        iddept: "DE1",
        an:new Date().getFullYear(),
    } 
    
    constructor () {
        super();
        this.initialize();
    }

    initialize =()=> {
        this.askService(URLHelper.urlgen("listeDepartement.php"));
        // console.log("http://localhost/phpRH/listeDepartement.php");
    }
    askService = (url) => {
        fetch(url,{crossDomain:true,method:'GET', headers: {}})
        .then(res => { return res.json();})
        .then(data=>{
            // console.log(data);
            this.setState({dept:data.dept});
            // console.log(this.departement);
         })
    }
    updateTable = (url) => {
        fetch(url,{crossDomain:true,method:'GET', headers: {}})
        .then(res => { return res.json();})
        .then(data=>{
            console.log(data);
            this.setState({table:data});
            // console.log(this.departement);
         })
    }
    handleChangeDept=(event)=>{
        this.setState({iddept:event.target.value});
        this.updateTable(URLHelper.urlgen("generatePlan.php?idDept=" + event.target.value+"&&daty="+this.state.an));
    }
    handleChangeAn=(event)=>{
        this.setState({an:event.target.value});
        this.updateTable(URLHelper.urlgen("generatePlan.php?idDept=" + this.state.iddept+"&&daty="+event.target.value));
    }

    render() { 
        let annee=[];
        for (let index = new Date().getFullYear() ; index <= new Date().getFullYear()+5  ; index++) {
            annee.push(index);
            
        }
        console.log(annee);
        return (
            <React.Fragment>
                <table style={{width:"400px"}}>
                    <tbody>
                        <tr>
                            <td>Choisir departement</td>
                            <td>
                                <select name="test" id="sel" onChange={this.handleChangeDept}>
                            {this.state.dept.map(oneDept=>
                                    <option value={oneDept.iddept}>{oneDept.nomdept}</option>
                            )}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Choisir annee</td>
                            <td>
                                <select name="test" id="sel" onChange={this.handleChangeAn}>
                            
                            {annee.map(an=>
                                    <option value={an}>{an}</option>
                            )}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th>Employe</th>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Date Depart</th>
                            <th>Date Retour</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.table.map(uniqShare=>
                        <React.Fragment>
                        {uniqShare.partage.map(part=>
                        <tr>
                            <td>{part.idemploye}</td>
                            <td>{part.nom}</td>
                            <td>{part.prenom}</td>
                            <td>{uniqShare.daty.debut}</td>
                            <td>{uniqShare.daty.fin}</td>
                        </tr>
                        )}
                        </React.Fragment>
                            )}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default TablePlanning;