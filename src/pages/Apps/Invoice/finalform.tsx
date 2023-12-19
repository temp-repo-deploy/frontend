import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const FinalForm = () => {
  const [formData, setFormData] = useState({
    courtType: '',
    isScheduled: false,
    courtID: '',
    caseDetails: {
      caseDescription: '',
      mainDistrict: '',
      establishment: '',
      natureOfCase: '',
      reliefSought: '',
      caseType: '',
      plaintiff: '',
      contactNumber: 0,
    },
    petitioner: {
      name: '',
      gender: '',
      relation: '',
      dateOfBirth: '',
      age: 0,
      caseDetails: '',
      extraName: '',
      email: '',
      occupation: '',
      mobileNumber: 0,
      pinCode: 0,
      address: '',
      state: '',
      district: '',
      taluka: '',
      village: '',
    },
    responder: {
      name: '',
      gender: '',
      relation: '',
      dateOfBirth: '',
      age: 0,
      caseDetails: '',
      extraName: '',
      email: '',
      occupation: '',
      mobileNumber: 0,
      pinCode: 0,
      address: '',
      state: '',
      district: '',
      taluka: '',
      village: '',
    },
    causeOfAction: '',
    causeOfActionDate: '',
    importantInformation: '',
    prayer: '',
    valuation: 0,
    location: {
      state: '',
      district: '',
      taluka: '',
      village: '',
    },
    legalDetails: [{ act: '', section: '' }],
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    console.log(formData);
  };


  return (
    <div>
      <div className="p-5">
      <Tab.Group>
        <Tab.List className="flex gap-4">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Initial Input
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Petitioner Details
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Responder Details
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Case Details
              </button>
            )}
          </Tab>
        </Tab.List>



        <Tab.Panels>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            {/* <div className=" bg-cyan-50 textcolo">
                <h1>District/Establishment</h1>
            </div> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
      <label htmlFor="mainDistrict">district</label>
      <select
        id="mainDistrict"
        className="form-select text-white-dark"
        value={formData.caseDetails.mainDistrict}
         onChange={handleInputChange}
      >
        <option>Choose...</option>
        <option>State1</option>
        <option>State2</option>
      </select>
    </div>
                <div>
                    <label htmlFor="gridState">Establishment</label>
                    <select
                    id="district"
                    className="form-select text-white-dark"
                    value={formData.caseDetails.mainDistrict}
                    onChange={handleInputChange}
                  >
                    <option>Choose...</option>
                    <option>State1</option>
                    <option>State2</option>
                  </select>
                </div>
                <div>
                    <label htmlFor="gridState">Nature of Case</label>
                    <select
                    id="district"
                    className="form-select text-white-dark"
                    value={formData.caseDetails.natureOfCase}
                    onChange={handleInputChange}
                    >
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="gridEmail">Relief Sought</label>
                <input id="gridEmail" type="text" placeholder="Relief Sought" className="form-input" value={formData.caseDetails.reliefSought}  onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="gridPassword">Case Type</label>
                <input id="gridPassword" type="text" placeholder="Case Type" className="form-input" value={formData.caseDetails.caseType}  onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="gridEmail">Plaintiff</label>
                <input id="gridEmail" type="text" placeholder="Plaintiff" className="form-input" value={formData.caseDetails.plaintiff}  onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="gridPassword">Contact No.</label>
                <input id="gridPassword" type="text" placeholder="Contact No." className="form-input" value={formData.caseDetails.contactNumber}  onChange={handleInputChange}/>
            </div>
        </form>




            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name">Petitioner:</label>
                    <input id="name" type="text" placeholder="Petitioner Name" className="form-input" value={formData.petitioner.name}  onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">Gender:</label>
                    <input id="gridEmail" type="text" placeholder="Petitioner Name" className="form-input" value={formData.petitioner.gender}  onChange={handleInputChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Relation</label>
                <input id="gridAddress1" type="text" placeholder="Relation" className="form-input" value={formData.petitioner.relation} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="gridAddress2">Date of Birth</label>
                <input id="gridAddress2" type="date" className="form-input" value={formData.petitioner.dateOfBirth}  onChange={handleInputChange}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <label htmlFor="gridCity">Age:</label>
                    <input id="gridCity" type="number" placeholder="Enter Age" className="form-input" value={formData.petitioner.age}  onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridState">Case</label>
                    <input id="gridCity" type="text" placeholder="Enter case" className="form-input" value={formData.petitioner.caseDetails}  onChange={handleInputChange}/>
                </div>

            </div>

            <div>
                <label htmlFor="gridEmail">Email:</label>
                <input id="gridEmail" type="email" placeholder="Email Name" className="form-input"  value={formData.petitioner.email}  onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Occupation:</label>
                <input id="gridEmail" type="text" placeholder="Occupation" className="form-input"  value={formData.petitioner.occupation}  onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Mobile no:</label>
                <input id="gridEmail" type="number" placeholder="Mobile no" className="form-input"  value={formData.petitioner.mobileNumber}  onChange={handleInputChange}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Pin Code:</label>
                    <input id="gridEmail" type="text" placeholder="Pin Code" className="form-input"  value={formData.petitioner.pinCode} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridState">Address</label>
                    <input id="gridCity" placeholder="Address" className="form-input"  value={formData.petitioner.address}  onChange={handleInputChange}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">State:</label>
                    <input id="gridEmail" type="text" placeholder="State" className="form-input"  value={formData.petitioner.state} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">District:</label>
                    <input id="gridEmail" type="text" placeholder="District" className="form-input"  value={formData.petitioner.district} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Taluka:</label>
                    <input id="gridEmail" type="text" placeholder="Taluka" className="form-input"  value={formData.petitioner.taluka} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">Village:</label>
                    <input id="gridEmail" type="text" placeholder="Village" className="form-input"  value={formData.petitioner.village}  onChange={handleInputChange}/>
                </div>
            </div>
        </form>
            </div>




          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Responder:</label>
                    <input id="gridEmail" type="text" placeholder="Responder Name" className="form-input"  value={formData.responder.name}  onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">Gender:</label>
                    <input id="gridEmail" type="text" placeholder="Responder Name" className="form-input"  value={formData.responder.gender}  onChange={handleInputChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Relation</label>
                <input id="gridAddress1" type="text" placeholder="Relation" className="form-input" value={formData.responder.relation}  onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="gridAddress2">Date of Birth</label>
                <input id="gridAddress2" type="date" className="form-input" value={formData.responder.dateOfBirth}  onChange={handleInputChange}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                    <label htmlFor="gridCity">Age:</label>
                    <input id="gridCity" type="number" placeholder="Enter Age" className="form-input" value={formData.responder.age}  onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridState">Case</label>
                    <input id="gridCity" type="text" placeholder="Enter case" className="form-input" value={formData.responder.caseDetails}  onChange={handleInputChange}/>
                </div>

            </div>

            <div>
                <label htmlFor="gridEmail">Email:</label>
                <input id="gridEmail" type="email" placeholder="Email Name" className="form-input" value={formData.responder.email} onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Occupation:</label>
                <input id="gridEmail" type="text" placeholder="Occupation" className="form-input" value={formData.responder.occupation} onChange={handleInputChange}/>
            </div>

            <div>
                <label htmlFor="gridEmail">Mobile no:</label>
                <input id="gridEmail" type="number" placeholder="Mobile no" className="form-input" value={formData.responder.mobileNumber} onChange={handleInputChange}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Pin Code:</label>
                    <input id="gridEmail" type="text" placeholder="Pin Code" className="form-input" value={formData.responder.pinCode} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridState">Address</label>
                    <input id="gridCity" placeholder="Address" className="form-input" value={formData.responder.address} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">State:</label>
                    <input id="gridEmail" type="text" placeholder="State" className="form-input" value={formData.responder.state} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">District:</label>
                    <input id="gridEmail" type="text" placeholder="District" className="form-input" value={formData.responder.district} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="gridEmail">Taluka:</label>
                    <input id="gridEmail" type="text" placeholder="Taluka" className="form-input" value={formData.responder.taluka} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="gridEmail">Village:</label>
                    <input id="gridEmail" type="text" placeholder="Village" className="form-input" value={formData.responder.village} onChange={handleInputChange}/>
                </div>
            </div>
        </form>
            </div>
          </Tab.Panel>






          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">
            <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Cause of Action</label>
                    <input id="gridEmail" type="text" placeholder="Enter Cause of Action" className="form-input" value={formData.causeOfAction} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="gridPassword">Date of Cause of Action</label>
                    <input id="gridPassword" type="date" placeholder="Enter Date of Cause of Action" className="form-input" value={formData.causeOfActionDate} onChange={handleInputChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="gridAddress1">Important Information</label>
                <input id="gridAddress1" type="text" placeholder="Enter Important Information / Subject / Reason" defaultValue="" className="form-input" value={formData.importantInformation} onChange={handleInputChange}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridEmail">Prayer</label>
                    <input id="gridEmail" type="text" placeholder="Enter Prayer" className="form-input" value={formData.prayer} onChange={handleInputChange}/>
                </div>
                <div>
                    <label htmlFor="gridPassword">Valuation</label>
                    <input id="gridPassword" type="number" placeholder="Enter Valuation" className="form-input" value={formData.valuation} onChange={handleInputChange}/>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="gridState">State</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.location.state} onChange={handleInputChange}>
                        <option>Choose...</option>
                        <option>State1</option>
                        <option>State2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">District</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.location.district} onChange={handleInputChange}>
                        <option>Choose...</option>
                        <option>District1</option>
                        <option>District2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Taluka</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.location.district} onChange={handleInputChange}>
                        <option>Choose...</option>
                        <option>Taluka1</option>
                        <option>Taluka2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="gridState">Village</label>
                    <select id="gridState" className="form-select text-white-dark" value={formData.location.village} onChange={handleInputChange}>
                        <option>Choose...</option>
                        <option>Village1</option>
                        <option>Village2</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="gridPassword">Act</label>
                <input id="gridPassword" type="text" placeholder="Enter Act" className="form-input" value={formData.legalDetails[0].act} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="gridPassword">Section</label>
                <input id="gridPassword" type="text" placeholder="Enter Section" className="form-input" value={formData.legalDetails[0].section} onChange={handleInputChange}/>
            </div>
        </form>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
  );
}

export default FinalForm;
