import React from 'react'

const contact = (props) => {
  return (
    <div id="contact" className="container section">
        <h2><b>Contact</b></h2>
        <p>{props.data ? props.data.paragraph : "Loading.."}</p>
        <div className='row services_thumbnail'>
          <div className="bg-light">
            <div className="row">
              <div className="col-lg-8 col-md-12 p-5 bg-white rounded-3">
                <div className="d-flex mb-3 flex-column">
                  <h1 className="h5 text-capitalize my-4">What service You need ?</h1>
                  <div className="d-flex flex-wrap">
                    <div className="
                            d-flex
                            flex-wrap
                            justify-content-center
                            align-items-center
                            me-4
                          ">
                      <input type="checkbox" name="webdev" className="form-check-input m-0 me-3" id="webdev" />
                      <label for="webdev"> Web Development</label>
                    </div>
                    <div className="
                            d-flex
                            flex-wrap
                            justify-content-center
                            align-items-center
                            me-4
                          ">
                      <input type="checkbox" name="webdes" className="form-check-input m-0 me-3" id="webdes" />
                      <label for="webdes"> Web Design</label>
                    </div>
                    <div className="
                            d-flex
                            flex-wrap
                            justify-content-center
                            align-items-center
                            me-4
                          ">
                      <input type="checkbox" name="logodes" className="form-check-input m-0 me-3" id="logodes" />
                      <label for="logodes"> Logo Design</label>
                    </div>
                    <div className="
                            d-flex
                            flex-wrap
                            justify-content-center
                            align-items-center
                            me-4
                          ">
                      <input type="checkbox" name="others" className="form-check-input m-0 me-3" id="others" />
                      <label for="others"> Others </label>
                    </div>
                  </div>
                </div>
                <form className="row mb-3">
                  <div className="col-md-6 p-3">
                    <input required placeholder="first name" type="text" name="" id="" />
                  </div>
                  <div className="col-md-6 p-3">
                    <input required placeholder="last name" type="text" name="" id="" />
                  </div>
                  <div className="col-md-6 p-3">
                    <input required placeholder="E-mail" type="email" name="" id="" />
                  </div>
                  <div className="col-md-6 p-3">
                    <input required placeholder="phone" type="tel" name="" id="" />
                  </div>
                  <div className="col-md">
                    <textarea required name="" placeholder="write your message" id="" cols="30" rows="1"></textarea>
                  </div>
                  <div className="text-end mt-4">
                    <input className="btn px-4 py-3 btn-outline-dark" type="submit" value="Send Message" />
                  </div>
                </form>
              </div>
              
              <div className="col-lg-4 col-md-12 text-white aside px-4 py-5">
                <div className="mb-5">
                  <h1 className="h3">Contact Information</h1>
                  <p className="opacity-50">
                    <small>
                      Fill out the from and we will get back to you whitin 24 hours
                    </small>
                  </p>
                </div>
                <div className="d-flex flex-column px-0">
                  <ul className="m-0 p-0">
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                        <ion-icon name="call"></ion-icon>
                      </span>
                      <span>{props.data ? props.data.phone : "Loading.."}</span>
                    </li>
                    <li className="d-flex align-items-center r mb-4">
                      <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                        <ion-icon name="mail"></ion-icon>
                      </span>
                      <span>{props.data ? props.data.email : "Loading.."}</span>
                    </li>
                    <li className="d-flex justify-content-start align-items-center mb-4">
                      <span className="opacity-50 d-flex align-items-center me-3 fs-2">
                        <ion-icon name="pin"></ion-icon>
                      </span>
                      <span>{props.data ? props.data.address : "Loading.."}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default contact
