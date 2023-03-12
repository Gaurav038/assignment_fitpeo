import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1>Overview</h1>
      </div>
      <div className="bottom">
        <p className="title">This month</p>
        <div className="charge">
          <p className="amount">$420</p>
          <p className="desc">  +4548   </p>
        </div>
        
        <div className="summary">
          <div className='item'>
                  <div className='info'>
                      <div>Orders</div>
                      <smalll className='text-muted'>$25</smalll>
                  </div>
                  <div className='info'>
                      <div>Sales</div>
                      <smalll className='text-muted'>$25</smalll>
                  </div>
          </div>
          <div className='item'>
                  <div className='info'>
                      <div>Orders</div>
                      <smalll className='text-muted'>$25</smalll>
                  </div>
                  <div className='info'>
                      <div>Sales</div>
                      <smalll className='text-muted'>$25</smalll>
                  </div>
          </div>
          <div className='item'>
                  <div className='info'>
                      <div>Orders</div>
                      <smalll className='text-muted'>$25</smalll>
                  </div>
                  <div className='info'>
                      <div>Sales</div>
                      <smalll className='text-muted'>$25</smalll>
                  </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;