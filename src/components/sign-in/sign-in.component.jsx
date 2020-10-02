import React,{Component} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
        handleSubmit=event=>{
            event.preventDefault()
            this.setState({email:'',password:''})
        }

        handleChange=event=>{
            const {name,value}=event.target;
            this.setState({[name]:value})
        }
        
    render(){
        return(
            <div className="sign-in">
                <h1 className='title'>I Already have an Account</h1>
                <span>Sign in with your Email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label='email' handleChange={this.handleChange} required />
                    <FormInput name="password" type="password" value={this.state.password} label='password' handleChange={this.handleChange}/>
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn;