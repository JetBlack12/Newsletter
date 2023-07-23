// setting up project/dependencies
"use client"
import Image from "next/image"
import checkmark from "../../public/icon-list.svg"
import success from "../../public/icon-success.svg"
import illustration from "../../public/illustration-sign-up-desktop.svg"
import { useEffect, useState } from "react";


export default function Home() {
  // settings states
  const [email, setEmail] =  useState("")
  const [error, setError] =  useState("")
  const [correct, setCorrect] = useState(false)

  // creating handlers
  const onChange = (e) => {
    setEmail(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  const onClick = (e) => {
    if(error == ""){
      setCorrect(true)
    }
    else{
      setCorrect(false)
    }
  }

  // email validation with regex
  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regex = new RegExp(emailRegex)
    if(email != ""){
      if(regex.test(email)){
        setError("")
      }
      else{
        setError("Invalid email")
      }
    }
    else{
      setError("Please enter email")
    }
  },[email])

  return (
    <main>
      <section role="part-two-form-container" aria-label="modal-container" className={correct == true ? "container-vi": "container2"}>
        <Image src={success} aria-label="success-checkmark"/>
        <h1 aria-label="modal-header">
          Thanks for subscribing!
        </h1>
        <p aria-label="psa-text">
          A confirmation email has been sent to <br/> <span>{email}</span>. Please open it and click<br/> the button inside to confirm your subscription.
        </p>
        <button>
          Dismiss message
        </button>
      </section> 
      <section role="part-one-form-container" className={correct == true ? "container-invi": "container"}>
        <div>
          <h1 aria-label="webpage-header">
            Stay updated!
          </h1>
          <p aria-label="content-preface" aria-description="A short preface detailing the amount of users all using the newsletter, acting as a hook for viewers.">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul aria-label="cotent-list">
            <li aria-label="newsletter-benefit">
              <Image src={checkmark} aria-label="checkmark image"/><span>Product discovery and building what mattters</span>
            </li>
            <li aria-label="newsletter-benefit">
              <Image src={checkmark} aria-label="checkmark image"/> <span>Measuring to ensure updates are a success</span>
            </li>
            <li aria-label="newsletter-benefit">
              <Image src={checkmark} aria-label="checkmark image"/> <span>And much more!</span>
            </li>
          </ul>
          <form aria-label="sign-up-form" onSubmit={onSubmit}>
            <label aria-label="input-description" className={error == "" ? "label" : "errL"}>
              Email address<span>{error}</span>
            </label>
            <input type="text" id="email-input" aria-label="email-input" placeholder="email@company.com" onChange={onChange}  className={error == "" ? "input" : "errI"}/>
            <button onClick={onClick}>
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <Image aria-label="accent-image" src={illustration}/>
      </section>
    </main>
      
    )
  }
    
    