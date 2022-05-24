import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Set = ({ sdata }) => {
    return (
        <>
            {
                sdata.map((ele, k) => {
                    return (
                        <>
                            <Stack spacing={1}>
                                <Skeleton variant="rectangular" animation="wave" width={"400px"} height={"225px"} className='rounded' />
                                <div className='d-flex justify-content-between'>
                                </div>
                            </Stack>
                        </>
                    )
                })
            }

        </>
    )
}
export default Set