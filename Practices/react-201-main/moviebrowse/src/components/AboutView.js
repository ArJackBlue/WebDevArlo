
import Hero from './Hero';

const AboutView = () => {
  return (
    <>

      <Hero text="About Us" />
      <div className='container'>
        <div className='row'>
          <div className="col-lg-8 offset-lg-2 my-5">

            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra mollis est eget dapibus. Pellentesque mattis aliquet sem vel facilisis. Aenean vitae cursus urna, ut vulputate lorem. Aenean consectetur euismod aliquam. Nam fringilla turpis diam, quis sagittis sem cursus vel. Vestibulum congue lectus et metus dictum, eget scelerisque nibh hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default AboutView;