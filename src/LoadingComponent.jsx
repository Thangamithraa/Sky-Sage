import logo from './assets/SkySage_logo_light.png'
import './styles/LoadingComponent.css'
function LoadingComponent(){
    return(
        <div className='loading-container'>
            <img className='image' src={logo} alt="" />
        </div>
    )
}
export default LoadingComponent