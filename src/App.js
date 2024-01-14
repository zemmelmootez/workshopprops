import React from 'react'
import PlacesList from './PlacesList'
import TunisiaNavbar from './TunisiaNavbar'
import CarouselTunisia from './CarouselTunisa'
import Footer from './Footer'

function App() {

  const places=[{name:"sid bou said " , img:"https://resize.prod.femina.ladmedia.fr/rblr/652,438/img/var/2020-02/sidi-bou-sai-d.jpg" , description:"Célèbre pour se, et la demeure historique Dar el-Annabi abrite des personnages de cire vêtus de costumes traditionnels. Un port de plaisance se trouve à côté d'une plage de"},
  {name:"bizerte " , img:"https://media-cdn.tripadvisor.com/media/photo-c/768x250/0c/4e/62/2e/a-few-days-in-bizerte.jpg" , description:"Bizerte ou Banzart est une ville du nord de la Tunisie située entre la mer Méditerranée et le lac de Bizerte. Elle est le chef-lieu d'un gouvernorat peuplé de plus d'un demi-million d'habitants. La ville compte 136 917 habitants en 2014."},
  {name:"kairouan" , img:"https://villa-romana-monastir.com/wp-content/uploads/2019/01/la-Grande-Mosquee-de-Kairouan-1024x565.jpg" , description:"bled rani"}
]
  return (
    <div>
      <TunisiaNavbar></TunisiaNavbar>
      <CarouselTunisia items={places}></CarouselTunisia>

      <PlacesList items={places}></PlacesList>

      <Footer></Footer>
    </div>
  )
}

export default App
