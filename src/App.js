import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [colleges, setColleges] = useState([]);
  const [sortBy, setSortBy] = useState('collegeduniaRating');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleColleges, setVisibleColleges] = useState(10);

  const dummyColleges = [
    {
       "id": 1,
       "name": "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
       "collegeduniaRating": 1,
       "fees": 209550,
       "userReviewRating": 4.7,
       "placement":2148000,
       "placementH":198000000,
       "featured": false,
       "ranking":"#3th/131 in India",
       "logo": "https://images.collegedunia.com/public/college_data/images/logos/1434977143jpjpjpjpj.jpg?h=43&w=43&mode=stretch" 
     
      },
     {
       "id": 2,
       "name": "IIT Delhi - Indian Institute of Technology [IITD], New Delhi",
       "collegeduniaRating": 2,
       "fees": 190300,
       "placement":2582000,
       "placementH":200000000,
       "userReviewRating": 4.6,
       "featured": false,
       "ranking":"#1th/35 in India",
       "logo": "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=43&w=43&mode=stretch"
     },
     {
       "id": 3,
       "name": "Parul University, Vadodara",
       // "collegeduniaRating": 3,
       "fees": 149000,
       "placement":400000,
       "placementH":3000000,
       "userReviewRating": 4.8,
       "featured": true,
       "ranking":"#99th/147 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1705923383ParulUniversity11.png?h=43&w=43&mode=stretch"
     },
     {
       "id": 4,
       "name": "IIT Bombay - Indian Institute of Technology - [IITB], Mumbai",
       "collegeduniaRating":3,
       "fees": 230550,
       "placement":2182000,
       "placementH":36700000,
       "userReviewRating": 4.6,
       "featured": false,
       "ranking":"#2th/35 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=43&w=43&mode=stretch"
     },
     {
       "id": 5,
       "name": "MIT World Peace University - [MIT-WPU], Pune",
       // "collegeduniaRating": 3,
       "fees": 315000,
       "placement":700000,
       "placementH":5100000,
       "userReviewRating": 4.7,
       "featured": true,
       "ranking":"#52th/200 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1705479788MITWPUshortformlogoredandblue1.png?h=43&w=43&mode=stretch"
     },
     {
       "id": 6,
       "name": "IIT Kharagpur - Indian Institute of Technology - [IITKGP], Kharagpur",
       "collegeduniaRating": 4,
       "fees": 51000,
       "placement":282000,
       "placementH":2000000,
       "userReviewRating": 4.5,
       "featured": false,
       "ranking":"#4th/35 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1489041138e2.jpg?h=43&w=43&mode=stretch"
     },
     {
       "id": 7,
       "name": "HKBK Group of Institutions, Bangalore",
       // "collegeduniaRating": 4.8,
       "fees": 54000,
       "placement":800000,
       "placementH":3000000,
       "userReviewRating": 4.7,
       "featured": true,
       "ranking":"#91th/150 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1631939223HKBKLogoSmall.jpg?h=43&w=43&mode=stretch"
     },
     {
       "id": 8,
       "name": "IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur",
       "collegeduniaRating": 5,
       "fees": 49000,
       "placement":1200000,
       "placementH":130000000,
       "userReviewRating": 4.5,
       "featured": false,
       "ranking":"#80th/150 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1408554560logo.png?h=43&w=43&mode=stretch"
     },
     {
       "id": 9,
       "name": " B. N. M. Institute of Technology - [BNMIT], Bangalore",
       "fees": 53000,
       "placement":400000,
       "placementH":1800000,
       "userReviewRating": 4.6,
       "featured": true,
       "ranking":"#9th/150 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1590648688678298281120869068037852530040662842146816n.jpg?h=43&w=43&mode=stretch"
     },
     {
       "id": 10,
       "name": "IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee",
       "collegeduniaRating": 6,
       "fees": 152000,
       "placement":600000,
       "placementH":1200000,
       "userReviewRating": 4.6,
       "featured": false,
       "ranking":"#100th/150 in India",
       "logo":"https://images.collegedunia.com/public/college_data/images/logos/1431775682rajiv.jpg?h=43&w=43&mode=stretch"

     }
 ];
  
  const handleSort = (sortByField) => {
    if (sortByField === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(sortByField);
      setSortOrder('asc');
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setVisibleColleges(prev => prev + 10); 
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setColleges(dummyColleges);
    }, 1000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <h1>Colleges</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by college name"
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="sort-container">
          <span>Sort By:</span>
          <label>
          <input
            type="radio"
            value="collegeduniaRating"
            checked={sortBy === 'collegeduniaRating'}
            onChange={() => handleSort('collegeduniaRating')}
          />
          Collegedunia Rating
        </label>
        <label>
          <input
            type="radio"
            value="fees"
            checked={sortBy === 'fees'}
            onChange={() => handleSort('fees')}
          />
          Fees
        </label>
        <label>
          <input
            type="radio"
            value="userReviewRating"
            checked={sortBy === 'userReviewRating'}
            onChange={() => handleSort('userReviewRating')}
          />
          User Review Rating
        </label>
        <label>
          <input
            type="radio"
            value="asc"
            checked={sortOrder === 'asc'}
            onChange={() => setSortOrder('asc')}
          />
          Ascending
        </label>
        <label>
          <input
            type="radio"
            value="desc"
            checked={sortOrder === 'desc'}
            onChange={() => setSortOrder('desc')}
          />
          Descending
        </label>
        </div>
      </div>

      <table>
        <thead>
          <tr>
          <th onClick={() => handleSort('collegeduniaRating')}>Collegedunia Rating</th>
            <th onClick={() => handleSort('name')}>College Name</th>  
            <th onClick={() => handleSort('fees')}>Fees</th>
            <th>Placement</th>
            <th onClick={() => handleSort('userReviewRating')}>User Review Rating</th>
            
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {colleges
            .filter(college => college.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
              const order = sortOrder === 'asc' ? 1 : -1;
              return order * (a[sortBy] - b[sortBy]);
            })
            .slice(0, visibleColleges)
            .map(college => (
              <tr key={college.id} className={college.featured ? 'featured-row' : ''}>
                        <td>{college.collegeduniaRating}</td>
                        <td>
                  {college.featured && (
                    <button title="Featured" className='featured'>Featured</button>
                  )}
                  <div className="college-info">
                    <img src={college.logo} alt="College Logo" className="college-logo" />
                    <h4 style={{color:"#4fb8dd" ,paddingLeft:"20"}}>{college.name}</h4>
                  </div>
                  <p className='gray'>
                    <div style={{marginLeft:"12%"}}> AICTE, COA, PCI, INC, GNC Approved </div></p>
                  <div className="actions-container">
                    <button className="apply-now-button">Apply Now</button>
                    <button className="download-brochure-button">Download Brochure</button>
                    <div style={{display:"flex"}}>
                      <input type="checkbox" className="comparison-checkbox" />
                      <p>Add to compare</p>
                    </div>
                  </div>
                </td>
        
                <td>
                  
                   <h4 className='rupees'>₹{college.fees}
                   </h4>
                   <p className='gray'>BE/B.Tech</p>
                   <p className='gray'>- 1st Year Fees</p>
                   <p className='orange'>Compare Fees</p>
                   </td>
                <td>
                  
                 <h4 className='rupees'>₹{college.placement}</h4>
                  <p className='gray'>Average Package</p>
                  <h4 className='rupees'>₹{college.placementH}</h4>
                  <p className='gray'>Highest Package</p>
                  <p className='orange'>Compare Placement</p>
                  </td>
                <td>
                  <h4 style={{color:"gray"}}>{college.userReviewRating}</h4>
                <p className='gray'>Based on 626 User Reviews</p>
                </td>
                <td>
                  {college.ranking}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
