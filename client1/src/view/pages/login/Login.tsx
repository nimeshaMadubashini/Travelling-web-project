import {Component} from "react";
import login from "../../../images/loginPage.png"
export class Login extends Component {
    render() {
        return (
            <div className='flex  w-[50rem] border-2 border-black h-[25rem] ml-[20rem] mt-20'>
<div className="w-1/2 flex ">
<img src={login} alt=''/>

</div>
                <div className='flex-col w-1/2 bg-amber-500'>
                    <h1 className='text-white text-center font-semibold text-2xl mt-20'>Login</h1>
<form className='flex flex-col ml-24 mt-10'>
    <input type='email' placeholder='Email' className='outline-none rounded h-8 w-60'/>

    <input type='password' placeholder='Password' className='outline-none mt-3 rounded h-8 w-60'/>

</form>
                    <button type='button' className='bg-black text-white ml-24 h-7 w-60 rounded mt-3'>Login</button>
                </div>
            </div>
        );
    }
}