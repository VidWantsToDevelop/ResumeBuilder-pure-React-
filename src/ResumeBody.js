import React from 'react'
import ReactDom from 'react-dom'
import { useMyContext } from './context'
import './style/ResumeBody.css'

//UseMyContext stuff

const ResumeBody = () => {
  const value = useMyContext()
  const data = value.data
  return (
    <>
      <main>
        <h1>Previous resumes</h1>
        <section className='resume-body'>
          {data.map((el) => {
            return (
              <div
                className='resume-unit'
                key={new Date().getDate().toString()}
              >
                <div className='resume-header'>
                  <p>{el.name}</p>
                  <p>{el.age}</p>
                </div>

                <div className='resume-main'>{el.occupation}</div>
                <div className='resume-contacts'>
                  <p>{el.email}</p>
                  <p>{el.phoneNumber}</p>
                </div>
              </div>
            )
          })}
        </section>
      </main>
    </>
  )
}

export default ResumeBody
