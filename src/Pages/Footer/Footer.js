import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
library.add(fab,  faCoffee);

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={['fab', 'facebook']} />
    const Google = <FontAwesomeIcon icon={['fab', 'google']} />
    const Github = <FontAwesomeIcon icon={['fab', 'github']}  />
    return (
        <div>
            <div className="">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: '#929fba' }}
                >
                    <div className="container p-4 pb-0">
                        <section >
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Bangladesh Tourism
                                    </h6>
                                    <p>
                                    Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways. Its Padma (Ganges), Meghna and Jamuna rivers create fertile plains, and travel by boat is common. On the southern coast, the Sundarbans, an enormous mangrove forest shared with Eastern India, is home to the royal Bengal tiger.
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Best tour place</h6>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Lawachara National Park</Link>
                                    </p>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Sundarban</Link>
                                    </p>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Kutubdia</Link>
                                    </p>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Jaflong</Link>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />


                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> House #20 (3rd Floor) Road # 17, Nikanjia-2 Dhaka,</p>
                                    <p><i className="fas fa-envelope mr-3"></i> Tourism@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 880 1522228889</p>
                                    <p><i className="fas fa-print mr-3"></i> + 880 1922223339</p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#3b5998" }}
                                        to="#!"
                                        
                                    >{facebook}
                                    </Link>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#dd4b39' }}
                                        to="#!"
                                        
                                    >{Google}</Link>                            

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#333333' }}
                                        to="#!"
                                       
                                    >{Github}</Link>
                                </div>
                            </div>

                        </section>

                    </div>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <Link className="text-decoration-none text-white" to="https://mdbootstrap.com/"
                        >Bangladesh-Tourism.com</Link>
                    </div>

                </footer>

            </div>

        </div>
    );
};

export default Footer;