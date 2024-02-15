import React from 'react'

const Model = () => {
    return (
        <>
           <div className='container-fluid p-2' style={{background:'#F5F7FA'}}>
                <div className='row mb-2 '>
                    <div className='model col-md-11 col-lg-5 shadow-lg ml-3 mr-5'>
                        <div className='model-header d-flex flex-column '>
                            <div className='d-flex flex-row mt-3 justify-content-between'>
                                <div className='d-flex flex-row'>
                                    <h6>Total Orders</h6>
                                    <div className='bg-warning mb-3 ml-3 rounded-circle' style={{ width: 80 }}>
                                        <h6 className='align-middle   ml-3'>-6.8%</h6>
                                    </div>
                                </div>
                                <h5 className='mr-5'>16,2400</h5>
                            </div>
                          <h5>Last 7 days</h5>
                        </div>
                        <div className='model-body p-2 shadow-lg'>

                            <div class="progress mt-3 d-flex flex-row ">
                                <div class="progress-bar bg-primary " role="progressbar" style={{ width: "35%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "25%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "20%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "45%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "75%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='model-footer d-flex flex-column mt-5 mb-4'>
                        <span className='w-100 bg-dark' style={{height:2}}></span>
                            <div className='d-flex flex-row justify-content-between '>
                                <div className='d-flex flex-row align-items-center'>
                                    <div className='bg-primary mt-1' style={{ width: '50px',height:15,borderRadius:'40px' }}>
                                    </div>
                                    <span className='align-middle ml-2'>Completed</span>
                                </div>
                                <span className='mr-5'>52%</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between '>
                                <div className='d-flex flex-row align-items-center'>
                                    <div className='shadow-lg  mt-1'     style={{ width: '50px',height:15,borderRadius:'40px',background:'#F5F7FA' }}>
                                    </div>
                                    <span className='align-middle ml-2'>Pendding Payment</span>
                                </div>
                                <span className='mr-5'>48%</span>
                            </div>
                        </div>

                    </div>
                    <div className='model col-md-11 col-lg-5 shadow-lg ml-3 mr-5'>
                        <div className='model-header d-flex flex-column '>
                            <div className='d-flex flex-row mt-3 justify-content-between'>
                                <div className='d-flex flex-row'>
                                    <h6>New Custemors</h6>
                                    <div className='bg-warning mb-3 ml-3 rounded-circle' style={{ width: 80 }}>
                                        <h6 className='align-middle   ml-3'>+26.5%</h6>
                                    </div>
                                </div>
                                <h5 className='mr-5'>356</h5>
                            </div>
                          <h5>Last 7 days</h5>
                        </div>
                        <div className='model-body'>

                            <div class="progress mt-3 d-flex flex-row ">
                                <div class="progress-bar bg-primary " role="progressbar" style={{ width: "15%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "40%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "15%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "55%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "65%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="progress mt-3">
                                <div class="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='model-footer d-flex flex-column mt-5 mb-4'>
                            
                            <span className='w-100 bg-dark' style={{height:2}}></span>
                        </div>

                    </div>
                   
                </div>

            </div> 
        </>
    )
}

export default Model