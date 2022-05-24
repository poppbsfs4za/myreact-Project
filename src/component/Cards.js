import React from 'react'
import Card from 'react-bootstrap/Card'
const Cards = ({ data }) => {
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
    
                            <Card className='cd g-3 '  >
                                <div className='card_body'>
                                    <span>
                                        <Card.Img className='profileimage' variant="top" src={element.profile_image_url} />
                                    </span>
                                    <span className='name_time'>
                                        <div className='upper_data'>
                                            <h4>{element.name}</h4>
                                        </div>
                                        <div className='lower_data d-flex justify-content-between '>
                                            <span className='time mt-2'>{element.operation_time[0].time_open} AM-{element.operation_time[0].time_close} PM</span>
                                            <span className='dot'>•</span>
                                            <span className='ratting'>{element.rating}</span>
                                        </div>
                                    </span>
                                </div>
                                <div >
                                    <span>
                                        <Card.Img className='imgs' variant="top" src={element.images[0]} />
                                    </span>
                                    <span>
                                        <Card.Img className='imgs' variant="top" src={element.images[1]} />
                                    </span>
                                    <span>
                                        <Card.Img className='imgs' variant="top" src={element.images[2]} />
                                    </span>
                                </div>
                            </Card>
                        </>
                    )
                })
            }

        </>
    )
}
export default Cards