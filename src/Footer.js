import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
export default function Footer() {
  return (
    <div>
      <MDBFooter className='bg-light text-center text-white' >
      <MDBContainer className='p-4 pb-0' >
        <section className='socials' >
          <MDBBtn 
            floating
            className='mx-3'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faTwitter} />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faGoogle} />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </MDBBtn>

          <MDBBtn
            floating
            className='mx-3'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <FontAwesomeIcon icon={faGithub} />
          </MDBBtn>
        </section>
        
        <section className='menu my-3'>
        <MDBRow>
          <MDBCol>
            <a href='#!' className='text-black'>
              Use Cases
            </a>
          </MDBCol>
          <MDBCol>
            <a href='#!' className='text-black'>
              Industries
            </a>
          </MDBCol>
          <MDBCol>
            <a href='#!' className='text-black'>
              Customers
            </a>
          </MDBCol>
          <MDBCol>
            <a href='#!' className='text-black'>
              Research
            </a>
          </MDBCol>
          <MDBCol>
            <a href='#!' className='text-black'>
              Company
            </a>
          </MDBCol>
          <MDBCol>
            <a href='#!' className='text-black'>
              Blog
            </a>
          </MDBCol>
      </MDBRow>
    </section>

    <section className='my-3'>
      <h6 className='text-black'>Address: 1197 Sainik Colony Sector 49, Faridabad HR 121001 India</h6>
    </section>

    <section className='my-3'>
      <h6 className='text-black'>Email: admin@mavvexlabs.com</h6>
    </section>

    <section className='text-center p-2 text-black my-3' >
        © {new Date().getFullYear()} MAVVEX
      </section>

      </MDBContainer>      
    </MDBFooter>
  </div>
  )
}