import Image from 'next/image'

export default function Home() {
  return (
     <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form>
        <input type='text' placeholder='type your name.....'>

        </input>
        <button type='submit'>Predict Data</button>
      </form>
     </div>
  )
}
