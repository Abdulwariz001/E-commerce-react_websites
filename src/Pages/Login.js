import React, { useState } from 'react';
function Login(){
     const allForm ={
        width: '40%',
        paddingTop:'20px',
        paddingBottom:'50px',
        margin:'auto',
     }

     const formDiv ={
        color:'black',
        marginTop: '5%'

     }

     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] =useState('');
     const [password, setPassword] = useState('');
     const [confirm, setConfirm] = useState('');
     const [address, setAddress] = useState('');
     const [gender1, setGender1] = useState('');
     const [gender2, setGender2] = useState('');
     const [gender3, setGender3] = useState('');
     const [gender4, setGender4] = useState('');
     const [status1, setStatus1] =useState('');
     const [status2, setStatus2] =useState('');
     const [status3, setStatus3] =useState('');
     const [status4, setStatus4] =useState('');
    

     return(
        <div>
             <form style={allForm} >
                <div style={formDiv}> 
                    <input type="text" onChange={(e)=>{setName (e.target.value)}}
                    name='name' placeholder='Enter your Name' 
                    style={{width: '100%', height:'38px', border:'none', borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px', outline: 'none'}}/>
                    {name}
                </div>
                <div style={formDiv}>
                    <input type="email" onChange={(e)=>{setEmail (e.target.value)}} name='email' placeholder='Enter your Email'  style={{width: '100%', height:'38px', border:'none', borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px' ,outline: 'none'}} />
                    {email}
                </div>
                <div style={formDiv}>
                    <input type="tel" onChange={(e)=>{setPhone (e.target.value)}} name='phone' placeholder='Enter your Phone' style={{width: '100%', height:'38px', border:'none',  borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px', outline:'none'}} />
                    {phone}
                </div>
                <div style={formDiv}>
                    <input type="password" onChange={(e)=>{setPassword (e.target.value)}} name='password' placeholder='Password' style={{width: '100%', height:'38px',  outline: 'none', borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px',}} />
                    {password}
                </div>
                <div style={formDiv}>
                    <input type="password" onChange={(e)=>{setConfirm (e.target.value)}} name='confirm' placeholder='Confirm Password' style={{width: '100%', height:'38px', border:'none',  outline: 'none', borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px',}} />
                    {confirm}
                </div>
                <div style={formDiv}>
                {/* <textarea name="message" rows="7" cols="40"onChange={(e)=>{setAddress (e.target.value)}} placeholder='Enter your Address'></textarea><br/>  */}
                    <input type="text" onChange={(e)=>{setAddress (e.target.value)}} name='address' placeholder='Enter your Address' style={{width: '100%', height:'38px',  outline: 'none', border:'none',  borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px',}} />
                    {address}
                </div>
                <div style={formDiv}>
                   <span style={{fontFamily:'Arial'}}> Gender</span>: <br/> 
                    <input type="radio"  onChange={(e)=>{setGender1 (e.target.value)}} name="gender1" checked='male' value="male"/> Male<br/> 
                    <input type="radio"  onChange={(e)=>{setGender2 (e.target.value)}} name="gender2" value="female"/> Female<br/>
                    <input type="radio"  onChange={(e)=>{setGender3 (e.target.value)}} name="gender3" value="other"/> Others
                    {<input type="text" onChange={(e)=>{setGender4 (e.target.value)}} name='gender4' placeholder='Gender' style={{width: '100%', height:'38px',  outline: 'none',  borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px',}} />}
                    {gender1} <br/>
                    {gender2}   <br/>
                    {gender3}
                </div>
                <div style={formDiv}>
                <span style={{fontFamily:'Arial'}}> Marital Status</span>: <br/> 
                   <input type="checkbox"  onChange={(e)=>{setStatus1 (e.target.value)}} name="status1" checked='single' value="single"/>Single<br/> 
                    <input type="checkbox"  onChange={(e)=>{setStatus2 (e.target.value)}} name="status2" value="married"/>Married<br/>
                    <input type="checkbox"  onChange={(e)=>{setStatus3 (e.target.value)}} name="status3" value="other"/> Others
                    <input type="text" onChange={(e)=>{setStatus4 (e.target.value)}} name='status' placeholder='Marital Status' style={{width: '100%', height:'38px', border:'none',  outline: 'none',  borderBottom: '2px solid orange',borderTop: '2px solid orangered',borderLeft:'2px solid orange', borderRight:'2px solid orangered', borderRadius:'8px',}} />
                    {status1} <br/>
                    {status2} <br/>
                    {status3}
                </div>
            </form>
        </div>
     )
}
export default Login