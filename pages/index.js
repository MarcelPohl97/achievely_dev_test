import Link from 'next/link'
import Button from '@material-ui/core/Button';
import Lottie from 'react-lottie';
import CarAnimation from '../assets/lottie_files/car.json';

const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: CarAnimation,
  };
  return (
    <>
      <h1>Landing</h1>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              />
      <Link href="/authentication/login">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </Link>
      <Link href="/authentication/register">
        <Button variant="contained" color="secondary">
          Register
        </Button>
      </Link>
    </>
  )
}

export default Landing;