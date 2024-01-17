import './App.css'

function App() {
  const projects = [
    { _id: '127fae', name: 'EatBCN', techStack: 'React, Express, MongoDB' },
    { _id: '985afw', name: 'TravelLiterdsds', techStack: 'React, Express, Redux' },
    { _id: '347eef', name: 'IronClub', techStack: 'Express, HBS, MongoDB' },
    { _id: '90af21', name: 'ChatApp', techStack: 'React, Express, SocketIO' }
  ];


  return (
    <>
      <ul>
        {/* Esto es lo mismo que el #each en HBS */}
        {projects.map((element) => <li key={element._id}>Name: {element.name}. Tech Stack: {element.techStack}</li>)}
      </ul>
    </>
  )
}

export default App
