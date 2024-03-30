import React, { useState } from 'react';

function Filters() {
     const [selectedFilters, setSelectedFilters] = useState([]);
     const [showCategories, setShowCategories] = useState({
          idealFor: false,
          occasion: false,
          fabric: false,
          segment: false,
          suitableFor: false,
          rawMaterials: false,
          pattern: false,
     });

     const handleFilterSelection = (filter) => {
          setSelectedFilters((prevFilters) =>
               prevFilters.includes(filter)
                    ? prevFilters.filter((item) => item !== filter)
                    : [...prevFilters, filter]
          );
     };

     const toggleCategories = (category) => {
          setShowCategories((prevShowCategories) => ({
               ...prevShowCategories,
               [category]: !prevShowCategories[category],
          }));
     };

     const handleUnselectAll = () => {
          setSelectedFilters([]);
     };

     return (
          <div className='filter-container'>
               <MenuItem
                    label="IDEA FOR"
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.idealFor}
                    toggle={() => toggleCategories('idealFor')}
               >
                    <IdealForCategory selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>

               <MenuItem
                    label="OCCASION"
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.occasion}
                    toggle={() => toggleCategories('occasion')}
               >
                    <OccasionCategory selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>

               <MenuItem
                    label="WORK"
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.work}
                    toggle={() => toggleCategories('work')}
               >
                    <WorkCategory selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>

               <MenuItem
                    label="FABRIC"
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.fabric}
                    toggle={() => toggleCategories('fabric')}
               >
                    <FabricCategory  selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>
               <MenuItem
                    label="SEGMENT"
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.segment}
                    toggle={() => toggleCategories('segment')}
               >
                    <SegmentCategory    selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>

               <MenuItem
                    label="SUITABLE FOR"
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.suitableFor}
                    toggle={() => toggleCategories('suitableFor')}
               >
                    <SuitableForCategory  selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>

               <MenuItem
                    label="RAW MATERIAL"
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.rawMaterials}
                    toggle={() => toggleCategories('rawMaterials')}
               >
                    <RawMaterialsCategory  selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>

               <MenuItem
                    label="PatternCategory "
                    selectedFilters={selectedFilters}
                    handleFilterSelection={handleFilterSelection}
                    show={showCategories.pattern}
                    toggle={() => toggleCategories('pattern')}
               >
                    <OccasionCategory selectedFilters={selectedFilters} handleFilterSelection={handleFilterSelection} />
               </MenuItem>

          </div>
     );
}

const MenuItem = ({ label, selectedFilters, handleFilterSelection, show, toggle, children }) => {
     return (
          <div className='filter-catlog1'>
               <div className='filter-catlog'>
                    <p onClick={toggle}>{label}</p>
                    {show ? <img src="/assets/down-arrow.png" alt="Right arrow" width={16} height={16} />:<img src="/assets/Right arrow.png" alt="Right arrow" width={16} height={16} />}
               </div>
               <span className='all'>All</span>
               {show && children}

               <hr className='line2' />

          </div>
     );
};

const IdealForCategory = ({ selectedFilters, handleFilterSelection }) => {
     const idealForOptions = ['Men', 'Women', 'Baby & Kids'];
     
     
     return (
          <div className='filter-category-option'>
               <p>Unselect all</p>
               {idealForOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};


const OccasionCategory = ({ selectedFilters, handleFilterSelection }) => {
     const occasionOptions = ['Work', 'Casual', 'Wedding', 'Party'];

     return (
          <div className='filter-category-option'>
               <p
               checked={selectedFilters.length === occasionOptions.length}
               >   
                    Unselect all
               </p>
               {occasionOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};

const FabricCategory = ({ selectedFilters, handleFilterSelection }) => {
     const fabricOptions = ['French Knot', 'Zardosi', 'Muslin', 'Satin Blend'];

     return (
          <div className='filter-category-option'>
               <p>Unselect all</p>
               {fabricOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};

const SegmentCategory = ({ selectedFilters, handleFilterSelection }) => {
     const segmentOptions = ['Regular', 'Fancy'];

     return (
          <div className='filter-category-option'>
               <p>Unselect all</p>
               {segmentOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};

const SuitableForCategory = ({ selectedFilters, handleFilterSelection }) => {
     const suitableForOptions = ['Formal Wear', 'Western Wear', 'Ethnic'];

     return (
          <div className='filter-category-option'>
               <p>Unselect all</p>
               {suitableForOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};

const RawMaterialsCategory = ({ selectedFilters, handleFilterSelection }) => {
     const rawMaterialsOptions = ['Linen', 'Contemporary', 'Raw Silk', 'Cotton'];

     return (
          <div className='filter-category-option'>
               <p>Unselect all</p>
               {rawMaterialsOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};

const PatternCategory = ({ selectedFilters, handleFilterSelection }) => {
     const patternOptions = ['Casual Wear', 'Formal Wear', 'Western Wear'];

     return (
          <div className='filter-category-option'>
          <p>Unselect all</p>
               {patternOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};

const WorkCategory = ({ selectedFilters, handleFilterSelection }) => {
     const jacketMaterialOptions = ['Office', 'Party', 'Casual', 'Business','Formal'];

     return (
          <div className='filter-category-option'>
               <p className='Unselect'>Unselect all</p>
               {jacketMaterialOptions.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              value={option}
                              checked={selectedFilters.includes(option)}
                              onChange={() => handleFilterSelection(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};


export default Filters;
