import { Link } from 'react-router-dom'
import './LandingPage.css'
export const LangingPage  = () =>{
    return(
        <div className='container-section'>
            <div className='text-container'>
                <h1 className='text-title'>Airave Notes</h1>
                <h4 className='text-subtitle'>Meet your modern note taking app</h4>
                <p className='mt-1 mb-2'>Manage you daily task and workflow in a modern way and boost your efficiency without any effort</p>
                <div className='button-container'>
                    <Link to="/signup">
                        <button className='btn btn-primary mb-1'>Join Now</button>
                    </Link>
                    <Link to="/login">
                        <button className='btn btn-link-primary'>Already have an account ?</button>
                    </Link>
                </div>
            </div>
            <div>
                <img src='/Images/undraw_note_list_re_r4u9.svg' className='image' alt='hero-image'/>
            </div>
        </div>
    )
}