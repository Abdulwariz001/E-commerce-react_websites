import React, { useState } from 'react';
function Validation(){
    const mainForm = {
        width: '40%',
        margin:'auto',
     }
     const formDiv ={
         marginTop: '2%'
     }
     
     const [user, setuser] = useState({
        name: '',
        email : '',
        phone: '',
        password : '',
        confirm : ''
      });
      const [errors, setErrors] = useState({
        nameErr: '',
        emailErr: '',
        phoneErr: '',
        passwordErr: '',
        confirmErr: '',
      })
      const handleForm = (e)=>{
         let name= e.target.name;
         let value = e.target.value;
         setuser({
          ...user,
          [name]: value,
         })
      }
      const submitData = (e)=>{
        e.preventDefault()
  
        if(user.name == "" || user.name == 0 ||user.name == null || user.name.trim() == ""){
          setErrors((err)=>{
          return  {
              ...err,
              nameErr: `Name is required`,
            }
          })
        }
        if(user.email == "" || user.email == 0 ||user.email == null || user.email.trim() == "" || user.email.indexOf('@', 3)== -1 || user.email.indexOf('.') == -1){
          setErrors((err)=>{
          return  {
              ...err,
              emailErr: `Email is required`,
          }
          })
        }
        if(user.phone.startsWith('080') == false && user.phone.startsWith('081') == false && user.phone.startsWith('090') == false && user.phone.startsWith('091')== false && user.phone.length != 11){
          setErrors((err)=>{
          return  {
              ...err,
              phoneErr: `Phone is required`,
            }
            
          })
        }
        if(user.password == "" || user.password == 0 ||user.password == null || user.password.trim() == ""){
          setErrors((err)=>{
          return  {
              ...err,
              passwordErr: `Password is required`,
            }
          })
        }
        if(user.confirm != user.confirm){
          setErrors((err)=>{
          return  {
              ...err,
              confirmErr: `Password is not matched`,
            }
          })
        }
  
        console.log(user)
      }
      return(
        <div>
            <form onSubmit={submitData} style={mainForm }>
                    <div style={formDiv}> 
                       
                            <input type="text" onChange={handleForm}
                            name='name' placeholder='Your Name' 
                            style={{width: '100%', height:'40px', border:'none', outline:'none', borderBottom: '2px inset orange'}}/>
                             {user.name} <br/>
                            <strong style={{color:'red',fontFamily:'arial',fontSize:'13px'}}>{errors.nameErr}</strong>
                    </div>
                    <div style={formDiv}>
                       
                        <input type="email" name='email'
                        onChange={handleForm}
                        placeholder='Your Email' 
                        style={{width: '100%', height:'40px', border:'none', outline:'none', borderBottom: '2px inset orange'}} />
                         {user.email} <br/>
                        <strong style={{color:'red',fontFamily:'arial',fontSize:'13px'}}>{errors.emailErr}</strong>
                    </div>
                    <div style={formDiv}>
                      
                            <input type="tel"
                            name='phone' onChange={handleForm}
                            placeholder='Your Phone'
                            style={{width: '100%',
                            height:'40px', border:'none',  outline:'none',
                            borderBottom: '2px inset orange'}} />
                              {user.phone} <br/>
                            <strong style={{color:'red',fontFamily:'arial',fontSize:'13px'}}>{errors.phoneErr}</strong>
                    </div>
                    <div style={formDiv}>
                       
                            <input type="password"
                            name='password'
                            onChange={handleForm}
                            placeholder='Your Password'
                            style={{width: '100%', height:'40px', border:'none',  outline:'none', borderBottom: '2px inset orange'}} />
                             {user.password} <br/>
                            <strong style={{color:'red',fontFamily:'arial',fontSize:'13px'}}>{errors.passwordErr}</strong>
                    </div>
                    <div style={formDiv}>
                        
                            <input type="password"
                            name='confirm'
                            onChange={handleForm}
                            placeholder='Confirm your password'
                            style={{width: '100%', height:'40px', border:'none',  outline:'none', borderBottom: '2px inset orange'}} />
                            {user.confirm} <br/>
                            <strong style={{color:'red',fontFamily:'arial',fontSize:'13px'}}>{errors.confirmErr}</strong>
                    </div> <br/>
                    <button style={{border:'2px solid orange', color:'red', padding:'5px', borderRadius:'8px',background:'white',boxShadow:'2px 2px 4px'}} type='submit'>Register</button>
            </form>
      </div>
  )

}
export default Validation