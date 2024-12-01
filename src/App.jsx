import { useState } from 'react'
import './App.css'
import Card from './components/card'
// import theme_green from "./components/theme_green.css"

function App(props) {
  return (
    <>
      <h1>Список тарифов</h1>
      <div className='tarif_conainer'>

      <Card 
      containerClass="containerClass"
      name="Безлимитный 300"
      nameClass="name_red" 
      sale="300 руб/мес"
      saleClass="sale_red" 
      sale_cl ="sale_cl"
      size="до 10 Мбит/сек" 
      footer="Объём включенного трафика не ограничен"
     />
      
      <Card 
      containerClass="containerClass"
      name="Безлимитный 450" 
      nameClass="name_green" 
      sale="450 руб/мес"
      saleClass="sale_green" 
      sale_cl ="sale_cl"
      size="до 50 Мбит/сек" 
      footer="Объём включенного трафика не ограничен"/>

      <Card 
      containerClass="containerClass"
      name="Безлимитный 550" 
      nameClass="name_blue" 
      sale="550 руб/мес"
      saleClass="sale_blue"
      sale_cl ="sale_cl"
      size="до 100 Мбит/сек" 
      footer="Объём включенного трафика не ограничен"/>

      <Card
      containerClass="containerClass"
      name="Безлимитный 1000" 
      nameClass="name_black" 
      sale="1000 руб/мес"
      saleClass="sale_black" 
      sale_cl ="sale_cl"
      size="до 200 Мбит/сек" 
      footer="Объём включенного трафика не ограничен"/>
      </div>


      <div className="footer">
      </div>

   
    </>
  )
}

export default App
