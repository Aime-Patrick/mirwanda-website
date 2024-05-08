import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineMail} from 'react-icons/ai'
import {HiHome} from 'react-icons/hi'
import{BsFillTelephoneFill, BsInfoLg} from 'react-icons/bs'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Contact() {
  const nav = useNavigate();
  const [input,setInput]=useState([])

  function handleAdd(e){
  const name=e.target.name;
  const value=e.target.value;
  setInput(values => ({...values,[name]: value}));
  console.log(input);
  }
  function handleSend(e){
  let formData=new FormData();
  formData.append('name',input.name);
  formData.append('email',input.email);
  formData.append('phonenumber',input.phonenumber);
  formData.append('comment',input.comment);

  axios({
    method:'post',
    url :'http://localhost:80/mirwanda_php/index2.php',
        data: formData,
        config : {headers: {'Content-Type' : 'multipart/form-data'}}
      }
      ).then(function (params) {
        console.log(params.data)
        alert('Message Sent');
        nav('/')
      }).catch(function (params){
        console.log(params)
      })
  }
  return (
    <>
    <Meta title="Contact" />
    <BreadCrumb title ="Contact" />
    <div className='conctact-wrapper home-wrapper-2 py-5'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.930864499318!2d30.04350068086573!3d-1.9569370326687296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42936c4fc0b%3A0x8c6a59bcc69b83fb!2sNyarugenge%2C%20Kigali!5e0!3m2!1sen!2srw!4v1693599025746!5m2!1sen!2srw" 
        width="600" 
        height="450" 
        className='border-0 w-100'
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
        <div className='col-12 mt-5'>
          <div className='contact-wrapper d-flex justify-content-between '>
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form className='d-flex flex-column gap-15' onSubmit={handleSend}>
                  <div>
                    <input type='text' className='form-control' placeholder='name' name='name' onChange={handleAdd}/>
                  </div><div>
                    <input type='email' className='form-control' placeholder='Email' name='email' onChange={handleAdd}/>
                  </div><div>
                    <input type='tel' className='form-control' placeholder='Phone Number' name='phonenumber' onChange={handleAdd}/>
                  </div><div>
                    <textarea name='comment' className='w-100 form-control' cols={30} rows={4} placeholder='comments' onChange={handleAdd}></textarea>
                  </div>
                  <div>
                  <input type="submit" id="submit" value="Submit" className='button border-0' />
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get in Touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-10 align-items-center' >
                      <HiHome className='fs-4'/>
                      <address className='mb-0'> kn 20 Ave,kigali,Rwanda</address>
                      </li>
                    <li className='mb-3 d-flex gap-10 align-items-center'>
                      <BsFillTelephoneFill className='fs-4'/>
                      <a href='tel:+250 785669809' className='text-dark'>(+250) 785669809</a>
                      </li>
                    <li className='mb-3 d-flex gap-10 align-items-center'>
                      <AiOutlineMail className='fs-4'/>
                      <a href='mailto:ndagijimanapazo64@gmail.com' className='text-dark'>ndagijimanapazo64@gmail.com</a>
                      </li>
                    <li className='mb-3 d-flex gap-10 align-items-center'>
                      <BsInfoLg className='fs-4'/>
                      <p className='mb-0'>Monday - Friday 9:40AM - 8:00 PM</p>
                      </li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact