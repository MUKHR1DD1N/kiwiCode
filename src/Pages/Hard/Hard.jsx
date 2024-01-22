import React, { useRef, useState } from 'react'
import "./Hard.css"
import { useTranslation } from 'react-i18next'


export const Hard = () => {
  const { t, i18n } = useTranslation()

  let [name, setName] = useState("")
  let [namber, setNamber] = useState("")
  let [email, setEmail] = useState("")

  let chat = {
    token: "6511739808:AAEYKf4CH2NpNIzqmz5w8LWTrJMeSWSR7So",
    chatId: "-1002096036011",
    email: "username",
    content: `Raqamingiz: ${namber}, Email: ${email},  Ismingiz: ${name},  `,
  }

  function sentMessage() {}


  return (
    <div className="tontent">
      <div class="input form-control">
        <select>
          <option>Samarqand</option>
          <option>Toshkent</option>
          <option>Jizzax</option>
          <option>Namangon</option>
          <option>Bangladesh</option>
        </select>

        <select>
          <option >Samarqand shahar</option>
          <option >Nuroboq</option>
          <option>Qora qamich</option>
          <option>Qora soy</option>
        </select>

      </div>



      <div className="karta">
        <iframe width="860" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=300&amp;height=400&amp;hl=en&amp;q=%20Samarqand%20Buyuk%20Avlod+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://maps-generator.com/ru'></a>
      </div ><br /><br />
    </div> 





  )
}

export default Hard