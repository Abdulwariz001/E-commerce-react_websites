import React, { useState } from 'react';
function Registration(){
    const allForm ={
        width: '40%',
        margin:'auto',
     }

     const formDiv ={
         marginTop: '5%'
        
     }


     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [phone, setPhone] =useState('');
     const [password, setPassword] = useState('');

     return(
        <div>
             <form  style={allForm } >
                    <div style={formDiv}> 
                        <input type="text" onChange={(e)=>{setName (e.target.value)}}
                        name='name' placeholder='Enter your Name' 
                        style={{width: '100%', height:'30px', border:'none', borderBottom: '2px solid dodgerblue',borderLeft:'1px solid dodgerblue', outline: 'none'}}/>
                        {name}
                    </div>
                    <div style={formDiv}>
                        <input type="email" onChange={(e)=>{setEmail (e.target.value)}} name='email' placeholder='Enter your Email'  style={{width: '100%', height:'30px', border:'none', borderLeft:'1px solid dodgerblue', borderBottom: '2px solid dodgerblue ',outline: 'none'}} />
                        {email}
                    </div>
                    <div style={formDiv}>
                        <input type="tel" onChange={(e)=>{setPhone (e.target.value)}} name='phone' placeholder='Enter your Phone' style={{width: '100%', height:'30px', border:'none',  outline: 'none', borderLeft:'1px solid dodgerblue', borderBottom: '2px solid dodgerblue'}} />
                        {phone}
                    </div>
                    <div style={formDiv}>
                        <input type="password" onChange={(e)=>{setPassword (e.target.value)}} name='password' placeholder='Enter your Password' style={{width: '100%', height:'30px',  outline: 'none', borderLeft:'1px solid dodgerblue', border:'none', borderBottom: '2px solid dodgerblue'}} />
                        {password}
                    </div>
            </form>
        </div>
     )
    
}

export default Registration;