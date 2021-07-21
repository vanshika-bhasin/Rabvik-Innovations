import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './Questionnaire.css';

function Questionnaire() {
    const [sectorOptions] = useState([
        '3d printing','Accounting','AdTech','Advisory','Agri-Tech','Agricultural Chemicals',
        'Agriculture','Animal Husbandry','Apparel','Apparel & Accessories','Application Development',
        'Art','Auto & Truck Manufacturers','Auto Vehicles', 'Parts & Service Retailers',
        'Auto, Truck & Motorcycle Parts','Aviation & Others','Baby Care','Big Data','Billing and Invoicing',
        'Biotechnology','Bitcoin and Blockchain','BPO','Branding','Business Finance','Business Intelligence',
        'Business Support Services','Business Support Supplies','Clean Tech','Clean Technology','Cloud',
        'Coaching','Collaboration','Commercial Printing Services','Commodity Chemicals','Comparison Shopping',
        'Computer & Electronics','Retailers','Construction & Engineering','Construction Materials',
        'Construction Supplies & Fixtures','Consulting','Consumer Products','Consumer Services',
        'Corporate Social','Responsibility','Coworking Spaces','Crowdfunding','Customer Support','CXM',
        'Cyber Security','Dairy Farming','Data Science','Defence Equipment','Digital Marketing',
        'Digital Marketing (SEO Automation)','Digital Media','Digital Media Blogging',
        'Digital Media NewsDigital Media','Publishing','Digital Media Video','Discovery',
        'Diversified Chemicals','Drones','E-Commerce','E-learning','Education','Education Technology',
        'Electric Vehicles','Electronics','Electronics / Instrumentation','Embedded','Employment Services',
        'Enterprise Mobility','Entertainment','Environmental Services & Equipment','ERP','Event Management',
        'Experiential Travel','Facility Management','Fan Merchandise','Fantasy Sports','Fashion',
        'Fashion Technology','Fintech','Fisheries','Food and Beverage','Food Processing','Food Processing',
        'Food Technology/Food Delivery','Foreign Exchange','Freight & Logistics Services','Handicraft',
        'Health & Wellness','Healthcare IT','Healthcare Services','Healthcare Technology','Holiday Rentals',
        'Home Care','Home Furnishings Retailers','Home Improvement Products & Services','Retailers',
        'Home Security solutions','Homebuilding','Horticulture','Hospitality','Hotel','Housing',
        'Industrial Design','Industrial/Energy','Insurance','Integrated communication services',
        'Internet / Web Services','Internships','IT Consulting','IT Management','IT Services','JewelleryKPO',
        'Laundry','Leather Footwear','Leather Textiles Goods','Legal','Lifestyle','Location-Based','Loyalty',
        'Machine Learning','Manufacture of Electrical','Equipment','Manufacture of Machinery and Equipment',
        'Manufacturing','Manufacturing & Warehouse','Market Research','Marketing / Advertising',
        'Media and Entertainment','Medical Devices and Equipment','Medical Devices Biomedical','Microbrewery',
        'Microfinance','Mobile wallets Payments','Movies','Natural Language Processing',
        'Network Technology Solutions','New-age Construction','Technologies','NGO','NLP','Non-Leather Footwear',
        'Non-Leather Textiles Goods','Oil & Gas Drilling','Oil & Gas Exploration and Production',
        'Oil & Gas Transportation Services','Oil Related Services and','Equipment','Online Classified',
        'OOH Media','Organic Agriculture','Others','P2P Lending','Passenger Transportation Services',
        'Payment Platforms','Personal Care','Personal Finance','Personal Security','Pharmaceutical',
        'Photography','Physical Toys and Games','Point of Sales','Product Development',
        'Professional Information Services','Project Management','Public Citizen Security Solutions',
        'Recruitment Jobs','Renewable Energy Solutions','Renewable Nuclear Energy','Renewable Solar Energy',
        'Renewable Wind Energy','Restaurants','Retail Technology','Robotics Application','Robotics Technology',
        'Sales','SCM','Semiconductor','Skill Development','Skills Assessment','Smart Home','Social Commerce',
        'Social Media','Social Media','Space Technology','Specialty Chemicals','Sports Promotion and Networking',
        'Talent Management','Testing','Textile','Ticketing','Tires & Rubber Products','Trading',
        'Traffic Management','Training','Transport Infrastructure','Transportation','Travel','Utility Services',
        'Virtual Games','Waste Management','Wayside Amenities','Wearables','Web Design','Web Development',
        'Weddings','Wireless','Other'
    ]);
    const [businessActivity]=useState([
        'e-Shop','e-Mall','e-Auction','Virtual community','Collaborative platform','Marketplace',
        'Added value service','Infrastructure portal','Infrastructure producer','Infomediary',
        'Affiliate','Direct sales','Other'

    ]);
    const [marketCategory] = useState([
       'B2C','B2B','B2B2C','Other'
    ]);
    const [stageOfDev] = useState([
        'Ideation','Concept','Validation','Early Traction','Scaling','Growth',
    ]);
    const [services]=useState([
        'IaaS platform','SaaS software','IoT','PaaS platform','Business Process as a Service (BPaaS)',
        'Hardware','Software On-Premises','Intellectual services','Other'
    ]);
    const [sectorInput,setSectorInput] = useState('');
    const [businessInput,setBusinessInput] = useState('');
    const [categoryInput,setCategoryInput]=useState('');
    const [devStageInput,setDevStageInput]=useState('');
    const [serviceInput,setServiceInput]=useState('');
    const [missionInput,setMissionInput]=useState('');
    const [founderNum,setFounderNum]=useState('');
    const [founderBg,setFounderBg]=useState([]);
    const [founderInput,setFounderInput]=useState('');
    const [empNum,setEmpNum]=useState('');
    const [empInput,setEmpInput]=useState('');
    const [empBg,setEmpBg]=useState([]);
    const [capitalInput,setCapitalInput]=useState('');
    const [funding,setFunding]=useState('');
    const [currentOwn,setCurrentOwn]=useState('');
    const [currentPer,setCurrentPer]=useState('');
    const [pastOwn,setPastOwn]=useState('');
    const [pastPer,setPastPer]=useState('');
    const addFounderHandler = ()=>{
        setFounderBg([...founderBg,founderInput]);
        setFounderInput('');
    };
    const addEmployeeHandler = ()=>{
        setEmpBg([...empBg,empInput]);
        setEmpInput('');
    };
    
    return (
        <div className="container" >
            <form onSubmit={(e)=>e.preventDefault()} className="questionnaire">
               
                <div className="each-question">
                    <p className="question-text">
                        <strong>1.</strong> Which sector or industry does your business belong to?
                    </p>
                    <select onChange={(e)=>setSectorInput(e.target.value)}>
                        <option value="" >{sectorInput ? sectorInput : 'Choose an option'}</option>
                        {
                            sectorOptions.map(sector=>(
                                <option key={uuid()} value={sector}>{sector}</option>
                            ))
                        }
                        
                    </select>
                </div>
                <div className="each-question">
                    <p className="question-text">
                    <strong>2.</strong> What type of business activity does your start-up engage in?
                    </p>
                    <select onChange={(e)=>setBusinessInput(e.target.value)}>
                        <option value="" >{businessInput ? businessInput : 'Choose an option'}</option>
                        {
                            businessActivity.map(activity=>(
                                <option key={uuid()} value={activity}>{activity}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="each-question">
                    <p className="question-text">
                    <strong>3.</strong> Which market category does your business target?
                    </p>
                    <select onChange={(e)=>setCategoryInput(e.target.value)}>
                        <option value="">{categoryInput ? categoryInput :'Choose an option'}</option>
                       {
                           marketCategory.map(market=>(
                               <option key={uuid()} value={market} >{market}</option>
                           ))
                       }
                    </select>
                </div>
                <div className="each-question">
                    <p className="question-text">
                    <strong>4.</strong> What is your current Stage of Development?
                    </p>
                    <select onChange={(e)=>setDevStageInput(e.target.value)} >
                        <option value="" >{ devStageInput ? devStageInput : 'Choose an option'}</option>
                        {
                            stageOfDev.map(sd=>(
                                <option key={uuid()} value={sd}>{sd}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="each-question">
                    <p className="question-text">
                    <strong>5.</strong> What type of products/services do you manufacture/provide?
                    </p>
                    <select onChange={(e)=>setServiceInput(e.target.value)}>
                        <option value="" >{ serviceInput ? serviceInput : 'Choose an option'}</option>
                        {
                            services.map(ser=>(
                                <option key={uuid()} value={ser}>{ser}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="each-question">
                    <p><strong>6.</strong> What is the mission of your start-up?</p>
                    <textarea onChange={(e)=>setMissionInput(e.target.value)} rows="3" placeholder="Describe your start-up's mission" ></textarea>
                </div>
                <div className="each-question">
                    <p><strong>7.</strong> What is the number of founders?</p>
                    <div className="input-container" >
                        <input type="number" min="0" placeholder="Num. of founders" value={founderNum} onChange={(e)=>setFounderNum(e.target.value)} />
                    </div>
                </div>
                <div className="each-question">
                    <p><strong>8.</strong> Give us some background on them. </p>
                    <ol>
                        {
                            founderBg.map(founder=>(
                                <li key={uuid()} >{founder}</li>
                            ))
                        }
                    </ol>
                    <div className="input-container" >
                        <input type="text" placeholder="LinkedIn Link" value={founderInput} onChange={e=>setFounderInput(e.target.value)} />
                    </div>
                    <button onClick={addFounderHandler} className="add-btn" >Add Link</button>
                </div>
                <div className="each-question">
                    <p><strong>9.</strong> What is the number of permanent employees?</p>
                    <div className="input-container" >
                        <input type="number" min="0" placeholder="Num. of employee" value={empNum} onChange={e=>setEmpNum(e.target.value)}/>
                    </div>
                </div>
                <div className="each-question">
                    <p><strong>10.</strong> Give us some background on them. </p>
                    <ol>
                        {
                            empBg.map(emp=>(
                                <li key={uuid()} >{emp}</li>
                            ))
                        }
                    </ol>
                    <div className="input-container" >
                        <input type="text" placeholder="LinkedIn Link" value={empInput} onChange={e=>setEmpInput(e.target.value)} />
                    </div>
                    <button onClick={addEmployeeHandler} className="add-btn" >Add Link</button>
                </div>
                <div className="each-question">
                    <p><strong>11.</strong> Committed Capital, <span>if any</span></p>
                    <div className="input-container" >
                        <input type="number" min="0" placeholder="Number (INR)" value={capitalInput} onChange={e=>setCapitalInput(e.target.value)} />
                    </div>
                </div>
                <div className="each-question">
                    <p><strong>12.</strong> Which type of funding are you targeting?</p>
                    <div className="input-container" >
                        <input type="number" min="0" placeholder="Number (INR)" value={funding} onChange={e=>setFunding(e.target.value)}  />
                    </div>
                </div>
                <div className="each-question">
                    <p><strong>13.</strong> What is the current ownership status of your start-up?</p>
                    <div className="input-container" >
                        <input type="text" placeholder="Name of the owner" value={currentOwn} onChange={e=>setCurrentOwn(e.target.value)} /> 
                        <input type="number" min="0" placeholder="Percentage" value={currentPer} onChange={e=>setCurrentPer(e.target.value)} />
                    </div>
                </div>
                <div className="each-question">
                    <p><strong>14.</strong> Give us some background on the past funding rounds of your start-up?</p>
                    <div className="input-container" >
                        <input type="text" placeholder="Name of the owner" value={pastOwn} onChange={e=>setPastOwn(e.target.value)}/> 
                        <input type="number" min="0" placeholder="Percentage" value={pastPer} onChange={e=>setPastPer(e.target.value)}/>
                    </div>
                </div>
                <div className="btn-container" >
                    <button className="submit-btn" type="submit" >Submit Your Answers</button>
                </div>
            </form>
        </div>
    )
}

export default Questionnaire
