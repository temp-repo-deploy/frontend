import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';

type UserData = {
    Petitioner: string;
    DateofCauseofAction: string;
    Responder: string;
    NatureofCase: string;
    CaseType: string;
    Mobileno: string;
};

const MultipleTables = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Multiple Tables'));
    }, [dispatch]);

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState<UserData[]>([]);
    const [recordsData, setRecordsData] = useState<UserData[]>([]);

    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'Petitioner',
        direction: 'asc',
    });

    const formatDate = (date: string | number | Date) => {
        if (date) {
            const dt = new Date(date);
            const month = (dt.getMonth() + 1 < 10 ? '0' : '') + (dt.getMonth() + 1);
            const day = (dt.getDate() < 10 ? '0' : '') + dt.getDate();
            return `${day}/${month}/${dt.getFullYear()}`;
        }
        return '';
    };

    // Function to fetch data from the backend
    const fetchData = async () => {
        try {
            const response = await fetch('YOUR_BACKEND_API_URL'); // Replace with your API URL
            if (response.ok) {
                const data: UserData[] = await response.json();
                setInitialRecords(sortBy(data, 'Petitioner')); // Assuming 'Petitioner' is a valid key in UserData
            } else {
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors (e.g., show an error message)
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
    }, []);

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
    }, [sortStatus]);
    return (
        <div>
            <div className="panel mt-6">
                <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Table 1</h5>
                </div>
                <div className="datatables">
                    <DataTable
                        className="whitespace-nowrap table-hover"
                        records={recordsData}
                        columns={[
                            {
                                accessor: 'Petitioner',
                                title: 'Petitioner',
                                sortable: true,
                                render: ({ Petitioner }) => (
                                    <div className="flex items-center w-max">
                                        {/* Assuming 'id' is accessible or passed as a prop */}
                                        <img
                                            className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover"
                                            src={`/assets/images/profile-${Petitioner}.jpeg`}
                                            alt={`Profile of ${Petitioner}`}
                                        />
                                        <div>{Petitioner}</div>
                                    </div>
                                ),
                            },
                            { accessor: 'DateofCauseofAction', title: 'Date of Cause of Action' },
                            { accessor: 'Responder', title: 'Responder' },
                            { accessor: 'NatureofCase', title: 'Nature of Case' },
                            { accessor: 'CaseType', title: 'Case Type', sortable: true },
                            { accessor: 'Mobileno', title: 'Petitioner Mobile no.', sortable: true },
                        ]}
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) =>
                            `Showing ${from} to ${to} of ${totalRecords} entries`
                        }
                    />
                </div>
            </div>
        </div>
    );
    }

export default MultipleTables;