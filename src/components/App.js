import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from '../css/style.css';
import logo from '../images/logo.png'


const App = () => {

   
        return(
            <div >
            <header>
            <BrowserRouter>
            <nav className="navbar navbar-expand-lgs">
                    <div>
                       <Link to="/" className="navbar-brand text-white">facebook</Link> 
                    {/* <img className="navbar-brand" src={logo} alt="Logo" />; */}
                    </div>
                    <form className="tab1">
                        <div className="form-inline my-2 my-lg-0">
                    <table>
                        <tr>
                            <td ><small className="text-white mr-sm-2">Email or Phone</small></td>
                            <td><small className="text-white">Password</small></td>
                        </tr>
                        <tr>    
                            <td>
                                <div id="ema" className="form-group input-group-sm">
                                <input className="form-control  mr-2" type="email" placeholder="type email"/>
                                </div>
                            </td>    
                            <td>
                                <div className="ema form-group input-group-sm">
                                <input className="form-control mr-sm-2" type="password" placeholder="password"/>
                                </div>
                            </td>    
                            <td><button className="btn my-btn btn-sm my-2 my-sm-0"  type="button">log in</button></td>

                        </tr>
                        <tr>
                             <BrowserRouter>
                             <td>&nbsp; </td>
                             <td><small><Link to="/forgot" className="text-white">Forget password?</Link></small> 
                   </td>
                             </BrowserRouter>
                        </tr>

                    </table>
                    </div>
                    </form>


                    {/* <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/Work">Work</Link></li>
                    </ul> */}
                </nav>
            </BrowserRouter> 
            </header>
            
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6 mycolumn">      
                    <h3>Connect with friends and the<br /> world around you on Facebook.</h3>
                    {/* <img src={require("../images/f1.jpg")} alt="connecting" /> */}
                </div>
                
                    
                
               
                   <div className="col-lg-6">
                <div className="signup float-right">
                    <form>
                        <div>
                            <h1 className="para1">Sign Up</h1><span>
                            <p  className="subpara2" style={{color: "#333"}}> It's quick and easy </p>
                            </span>
                        </div>
                        
                        
                        <div className="form-inline">
                        <div className="form-group mr-3">
                        <input className="form-control"   type="text" placeholder=" First name" />
                        </div>

                        <div className="form-group">
                        <input className="form-control"   type="text" placeholder=" Last name" />
                        </div>
                        </div>

                        <div className="form-group mt-3">
                        <input  className="form-control"   type="text" placeholder=" Mobile number or Phone number"/>
                        </div>
                        
                        <div  className="form-group">
                        <input className="form-control"   type="text" placeholder=" New password"></input>
                        </div>

                        <table>
                            <tr>
                                <td><p className="font-weight-bold" style={{color: "#90949c"}}>Birthday</p></td>
                            </tr>
                            <tr className="inline">
                                <td>
                                <select className="Dropdown">
                                    <option>Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>   
                                </select>
                                </td>
                                <td>
                                <select className="Dropdown ml-0">
                                    <option>Month</option>
                                    <option value="January">January</option>
                                    <option value="Febuary">Febuary</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                </td>
                                <td>
                                <select className="Dropdown ml-3">
                                    <option>Year</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                    <option value="2015">2015</option>
                                    <option value="2014">2014</option>
                                    <option value="2013">2013</option>
                                    <option value="2012">2012</option>
                                    <option value="2011">2011</option>
                                    <option value="2010">2010</option>
                                    <option value="2009">2009</option>
                                    <option value="2008">2008</option>
                                    <option value="2007">2007</option>
                                    <option value="2006">2006</option>
                                    <option value="2005">2005</option>
                                    <option value="2004">2004</option>
                                    <option value="2003">2003</option>
                                    <option value="2002">2002</option>
                                    <option value="2001">2001</option>
                                    <option value="2000">2000</option>
                                    <option value="1999">1999</option>
                                    <option value="1998">1998</option>
                                    <option value="1997">1997</option>
                                    <option value="1996">1996</option>
                                    <option value="1995">1995</option>
                                    <option value="1994">1994</option>
                                    <option value="1993">1993</option>
                                    <option value="1992">1992</option>
                                    <option value="1991">1991</option>
                                    <option value="1990">1990</option>
                                    <option value="1989">1989</option>
                                    <option value="1988">1988</option>
                                    <option value="1987">1987</option>
                                    <option value="1986">1986</option>
                                    <option value="1985">1985</option>
                                    <option value="1984">1984</option>
                                    <option value="1983">1983</option>
                                    <option value="1982">1982</option>
                                    <option value="1981">1981</option>
                                    <option value="1980">1980</option>
                                    <option value="1979">1979</option>
                                    <option value="1978">1978</option>
                                    <option value="1977">1977</option>
                                    <option value="1976">1976</option>
                                    <option value="1975">1975</option>
                                    <option value="1974">1974</option>
                                    <option value="1973">1973</option>
                                    <option value="1972">1972</option>
                                    <option value="1971">1971</option>
                                    <option value="1970">1970</option>
                                    <option value="1969">1969</option>
                                    <option value="1968">1968</option>
                                    <option value="1967">1967</option>
                                    <option value="1966">1966</option>
                                    <option value="1965">1965</option>
                                </select>
                                </td>
                            </tr>
                            </table>
                            
                              <p className="font-weight-bold mt-3 mb-2" style={{color: "#90949c"}}>Gender</p>                
                              <label><input type="checkbox" />Female</label> 
                              
                              <label className="ml-3"><input type="checkbox" />Male</label> 
                             
                              <label className="ml-3"><input type="checkbox" />Custom</label> 
                            
                              <br />
             
                              <BrowserRouter>
                              <p className="bloc">
                              By clicking Sign Up, you agree to our <Link to="/tems">Terms, Data Policy and Cookies Policy</Link>.
                               You may receive SMS Notifications from us and can opt out any time.
                                </p>
                                </BrowserRouter>
                            
                            <div className="mt-3">
                            <button type="submit" class="btn btn-success btn-lg">Sign Up</button>
                            </div> 
                       </form>

                       <hr />

                </div>
                </div>
                </div>
                </div>
                </div>
           

            


            

        );
    

};

export default App;