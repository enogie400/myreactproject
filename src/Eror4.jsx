
import Error404 from './assets/404.jpg'
import { Link } from 'react-router-dom';
const Error = () => {
return<section>
<div className="error">
<img src={Error404} alt='Request Note Found' width={'100%'}/>
</div>
<Link to="/">
<button className='btn btn-large' type='none'>Go Back Home</button>
</Link>

</section>

}


export default Error;