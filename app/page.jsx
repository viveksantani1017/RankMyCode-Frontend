import Card from './components/Card'

export default function Home() {
  const contestData = [
    {
      id:1,
      contestName:"Contest Name 1",
      contestInformation:"This is description for contest 1"
    },
    {
      id:2,
      contestName:"Contest Name 2",
    contestInformation:"This is description for contest 2"
  },
  {
    id:3,
    contestName:"Contest Name 3",
    contestInformation:"This is description for contest 3"
  },
  {
    id:4,
    contestName:"Contest Name 4",
    contestInformation:"This is description for contest 4"
  }
]

  return (
    <>
    
<h1 class="mb-4 mt-20 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl text-center">You Are Enrolled In <br/>Follwing Contests</h1>


    <div className='grid lg:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 gap-12 py-12 px-12'>
      {contestData.map((contest)=>
        <Card id={contest.id} contestInformation={contest.contestInformation} contestName={contest.contestName} />
    )}
      
    </div>
    </>
      )
}
