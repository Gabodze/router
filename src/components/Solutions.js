import React from 'react';

const Solutions = () => {
  return (
    <>
    <div className='sollutionText'>
        {/* circle &solutions */}
         <div className='caption'>
            <div className='ellipse'></div>
            <p>Solutions</p>
        </div>

        <h1 className='Services'>Services</h1>

        <p className='captiontext'>Our services are designed to help you succeed in a rapidly evolving landscape. Whether you need reliable Managed Services to streamline operations, expert Advisory Services for strategic guidance, advanced Data & Analytics solutions to unlock the power of your data, or Industry Solutions tailored to your specific sector, NeoGroup delivers the expertise and innovation you need. We are committed to providing customized, high-quality solutions that drive results and foster long-term success.
        </p>
    </div>

    {/* propositions */}
    <div className='propositions'>

        <div className='titlebtn'>

            <h2>Our <span>Unique</span> Value Proposition</h2>
            <div className='caption'>
                <div className='ellipse'></div>
                <p>Solutions</p>
            </div>

        </div>

        {/* products we offer */}
        <div className='products'>

            {/* offered products list 1 */}
            <div className='offeredProduct'>
                {/* items */}
                <div className='item'>
                    <img src="./illustrations/1.png"/>
                    <h5>Proven Governance Methodologies and Playbook</h5>

                </div>

                <div className='item'>
                    <img src="./illustrations/2.png"/>
                    <h5>Enhanced Oversight and Reporting</h5>

                </div>

                <div className='item'>
                    <img src="./illustrations/3.png"/>
                    <h5>Clear Focus on Innovation</h5>

                </div>

            </div>

            {/* offered products 2 */}
            <div className='offeredProduct'>
                {/* items */}
                <div className='item'>
                    <img src="./illustrations/4.png"/>
                    <h5>Reduce Costs by {'>'}25% with Hybrid Delivery</h5>

                </div>

                <div className='item'>
                    <img src="./illustrations/5.png"/>
                    <h5>Flexible Engagement Models</h5>

                </div>

                <div className='item'>
                    <img src="./illustrations/6.png"/>
                    <h5>Tool and Platform Agnostic Solutions</h5>

                </div>

            </div>

              {/* offered products 3 */}
              <div className='offeredProduct'>
                {/* items */}
                <div className='item'>
                    <img src="./illustrations/7.png"/>
                    <h5>Increase Use of Intelligent Automation</h5>

                </div>

                <div className='item'>
                    <img src="./illustrations/8.png"/>
                    <h5>20 Years’ Expertise in Managed Governance</h5>

                </div>

                <div className='item'>
                    <img src="./illustrations/9.png"/>
                    <h5>Actionable Analytics</h5>

                </div>

            </div>

        </div>



    </div>

    </>
  );
};

export default Solutions;
