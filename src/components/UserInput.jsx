import { useState } from "react"

export default function UserInput() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })


  const handleChange = (inputIdentifier, newValue) => {
    //The updated state needs to depend on the old data for the inputs
    //that where not changed. We use a function for to get the prev state
    //we then return the old obj into the new object
        setUserInput(prevUserInput => {
          return {
            ...prevUserInput,
            [inputIdentifier]: newValue
          }
        })
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input 
              type="number" 
              required
              value={userInput.initialInvestment}  
              onChange={(event) => handleChange('initialInvestment', event.target.value)}
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input 
              type="number" 
              required
              value={userInput.annualInvestment}  
              onChange={(event) => handleChange('annualInvestment', event.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input 
              type="number" 
              required
              value={userInput.expectedReturn}  
              onChange={(event) => handleChange('expectedReturn', event.target.value)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input 
              type="number" 
              required
              value={userInput.duration}  
              onChange={(event) => handleChange('duration', event.target.value)}
            />
          </p>
        </div>

      </section>
    </>
  )
}