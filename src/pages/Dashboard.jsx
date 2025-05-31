import Footer from '../components/Footer'
import Header from '../components/Header'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="p-4 flex justify-center items-center">
        <h1 className='text bg-red-800'>Dashboard</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Dashboard