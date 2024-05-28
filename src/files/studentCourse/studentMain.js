import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'reactstrap';
import DataTable from 'react-data-table-component';
import { student } from '../Api';
import toast from 'react-hot-toast';
import axios from 'axios';




const StudentForm = () => {
    const [data, setdata] = useState('')
    const navigate = useNavigate();

    const handleCreateCourse = () => {
        navigate('/studentCreatePage');
    };
    const getCourse = async () => {
        try {
            const response = await axios.get(student)
            setdata(response?.data?.result)
            toast.success(response?.data?.msg)

        } catch (error) {
            toast.error(error?.response?.data?.msg)
        }
    }
    useEffect(() => {
        getCourse();
    }, [])

    const customStyles = {
        rows: {
            style: {
                backgroundColor: '#ffffff',
                color: 'black'
            }
        },
        headCells: {
            style: {
                backgroundColor: '#ebeff1'
            }
        },
        cells: {
            style: {
                color: 'black'
            }
        }
    };

    let dataTable = [
        {
            name: 'No',
            width: '50px',
            cell: (row, i) => i + 1
        },


        {
            name: 'firstName ',
            sortable: false,
            minWidth: '100px',
            cell: (row) => row?.firstName
        },
        {
            name: 'lastName',
            sortable: false,
            minWidth: '150px',
            cell: (row) => row?.lastName
        },
        {
            name: 'Email',
            sortable: false,
            minWidth: '100px',
            cell: (row) => row?.email
        },
        {
            name: 'Mobile',
            sortable: false,
            minWidth: '100px',
            cell: (row) => row?.mobile
        },
        {
            name: 'course',
            sortable: false,
            minWidth: '100px',
            cell: (row) => row?.course?.name
        },
        {
            name: 'gender',
            sortable: false,
            minWidth: '100px',
            cell: (row) => row?.gender
        },


    ];

    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: '40px' }}>
            <Button style={{ marginLeft: 'auto' }} color="primary" onClick={handleCreateCourse}>
                Create Students</Button>
            <Card style={{ marginTop: '50px' }}>
                <div className="mt-4" style={{ paddingBottom: '30px' }}>
                    <DataTable
                        noHeader
                        highlightOnHover
                        fixedHeader
                        fixedHeaderScrollHeight="450px"
                        data={data}
                        columns={dataTable}
                        customStyles={customStyles}
                        responsive={true}
                        // paginationDefaultPage={currentPage}
                        pagination
                        paginationServer
                    // paginationComponent={() => CustomPagination(getApplyScholarshipData?.data?.result?.pagination?.pages)}
                    // getApplyScholarshipData={getApplyScholarshipData.rows}
                    />
                </div>
            </Card>

        </div>

    );
};

export default StudentForm;
