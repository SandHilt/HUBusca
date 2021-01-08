import './style.css';

function DetailsUser({ user, isDetailsShow }) {
  return (
    <section className='detailsScreen' hidden={!isDetailsShow}>
      <div className='wrapper'>
        <button className='detailsClose'>X</button>
        <section className='detailsBody'>info</section>
      </div>
    </section>
  );
}

export default DetailsUser;
