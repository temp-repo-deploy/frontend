import { useState, useEffect } from 'react';
import axios from 'axios';
import IconUser from '../../components/Icon/IconUser';

type ContactData = {
    id: number;
    name: string;
    email: string;
    location: string;
    phone: string;
    path?: string;
};

const Contacts = () => {
    const [datalist, setDatalist] = useState<ContactData[]>([]);

    // Function to fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await axios.get('YOUR_BACKEND_ENDPOINT');
            const data: ContactData[] = response.data;
            setDatalist(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchData();
    }, []);


    // Define editUser and deleteUser functions
    const editUser = async (contact: ContactData) => {
        try {
            const editEndpoint = `YOUR_BACKEND_ENDPOINT/${contact.id}`;
            const response = await axios.put(editEndpoint, contact);
            console.log('User updated:', response.data);
            fetchData();
        } catch (error) {
            console.error('Error editing user:', error);
        }
    };

    const finalSubmit = async (contact: ContactData) => {
        try {
            const editEndpoint = `YOUR_BACKEND_ENDPOINT/${contact.id}`;
            const response = await axios.put(editEndpoint, contact);
            console.log('User updated:', response.data);
            fetchData();
        } catch (error) {
            console.error('Error editing user:', error);
        }
    };

    // Rendering your component
    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl">Drafted Cases</h2>
                {/* Additional components or elements */}
            </div>
            <div className="mt-5 panel p-0 border-0 overflow-hidden">
                <div className="table-responsive">
                    <table className="table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Phone</th>
                                <th className="!text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datalist.map((contact) => (
                                <tr key={contact.id}>
                                    <td>
                                        <div className="flex items-center w-max">
                                            {contact.path ? (
                                                <div className="w-max">
                                                    <img src={`/assets/images/${contact.path}`} className="h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2" alt="avatar" />
                                                </div>
                                            ) : !contact.name ? (
                                                <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                                    <IconUser className="w-4.5 h-4.5" />
                                                </div>
                                            ) : (
                                                <div className="grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"></div>
                                            )}
                                            <div>{contact.name}</div>
                                        </div>
                                    </td>
                                    <td>{contact.email}</td>
                                    <td className="whitespace-nowrap">{contact.location}</td>
                                    <td className="whitespace-nowrap">{contact.phone}</td>
                                    <td>
                                        <div className="flex gap-4 items-center justify-center">
                                            <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => editUser(contact)}>
                                                Edit
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => finalSubmit(contact)}>
                                            Final Submit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
