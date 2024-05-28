import React, { useEffect, useState } from 'react';
import { Button, Card } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';


import DataTable from 'react-data-table-component';
import { course } from '../Api';



const CourseCurd = () => {
    const navigate = useNavigate();
    const [data, setdata] = useState('')

    const handleCreateCourse = () => {
        navigate('/CourseCreatePage');
    };

    const getCourse = async () => {
        try {
            const response = await axios.get(course)
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
            name: 'Name',
            sortable: false,
            minWidth: '100px',
            cell: (row) => row?.name
        },
        {
            name: 'Full Name',
            sortable: false,
            minWidth: '150px',
            cell: (row) => row?.fullName
        },
        {
            name: 'Description',
            sortable: false,
            minWidth: '100px',
            cell: (row) => row?.description
        },


    ];
    return (
        <div style={{ backgroundColor: '#f2f2f2', padding: '40px' }}>
            <Button style={{ marginLeft: 'auto' }} color="primary" onClick={handleCreateCourse}>
                Create Course
            </Button>
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

export default CourseCurd;
