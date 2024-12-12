import React from 'react';

const Solutions = () => {
  return (
    <>
    <div className='sollutionText'>
        {/* circle &solutions */}
         <div className='caption'>
            <div className='ellipse'></div>
            <p>Future</p>
        </div>

        <h1 className='Services'>Resources</h1>

        <p className='captiontext'>Stay informed with the latest insights, trends, and case studies shaping the future of your industry.</p>
    </div>

    <div class="input-container">
        <input type='text' placeholder='Search'/>
    </div>
  

  <div className='searchByCategory'>
        <h6>Search by category</h6>

        <div className='categories'>
            <div className='category'>
                <div className='imgdiv'>
                    <img src="./illustrations/book1.png"/>
                </div>               
                <p className='catName'>Articles</p>


            </div>
            <div className='category'>
                <div className='imgdiv'>
                    <img src="./illustrations/book2.png"/>
                </div>               
                <p className='catName'>Books</p>


            </div>
            <div className='category'>
                <div className='imgdiv'>
                    <img src="./illustrations/book-3.png"/>
                </div>               
                <p className='catName'>Case Studies</p>


            </div>
            <div className='category'>
                <div className='imgdiv'>
                    <img src="./illustrations/book4.png"/>
                </div>               
                <p className='catName'>Events</p>


            </div>
            <div className='category'>
                <div className='imgdiv'>
                    <img src="./illustrations/book5.png"/>
                </div>               
                <p className='catName'>Press</p>


            </div>
            <div className='category'>
                <div className='imgdiv'>
                    <img src="./illustrations/book6.png"/>
                </div>               
                <p className='catName'>Webinars</p>


            </div>

        </div>

  </div>

    </>
  );
};

export default Solutions;
