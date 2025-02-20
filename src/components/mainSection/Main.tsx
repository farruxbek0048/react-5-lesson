
import './Main.css'

function Main() {

  const titles = [
    {
        id: 1,
        name: 'Getting Started',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 2,
        name: 'Sales Questions',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 3,
        name: 'Uses Guides',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 4,
        name: 'My Account',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 5,
        name: 'Payment & Billing',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    },
    {
        id: 6,
        name: 'Knowledgebase',
        text: 'Lorem ipsum dolor sit amet consectetur adipisci venenatis venenatis eget tellus diam ante facilisis',
        title: 'Browse Airticle'
    }

]


  return (
    <div className='category container'>
      <div className="main-title">Browse Questions by Category</div>
      {titles.map(Main => {
        return(
          <div key={Main.id} className='category-list'>
            <div className='title'>{Main.name}</div>
            <p>{Main.text}</p>
            <b>{Main.title}</b>
          </div>
        )
      })}
    </div>
  )
}

export default Main
