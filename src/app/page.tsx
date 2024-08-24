import style from "./styles/home.module.scss"

const Home = () => {
    return (
      <main className={style.main}>
        <h2> Site en cours de construction </h2>
        <p> Vous pouvez me contacter sur instagram :
          <a href="https://www.instagram.com/adelevrc/"> @adelevrc</a> 
           {' '}ou par<a href="mailto:adele.vercaygne@gmail.com"> mail  </a>
    
           </p>
       <article>
        <p>Les cours de yoga de la semaine sur Zoom : </p>
        <ul>
          <li> <span> Mercredi 19h - 20h  </span>: yoga dynamique  </li>
          <li> <span> Vendredi 19h - 20h </span> : yoga dynamique </li>
          <li> <span> Dimanche de 10h - 11h </span> : yoga dynamique </li>
          <li className={style.info}> 1 heure de cours en ligne : 10 euros  </li>
          <li> <span> Dimanche de 19h à 19h30 </span> : méditation guidée <span className={style.price}> (5 euros)</span> </li> 
          <li> <span>Offre :   Premier samedi de chaque mois 10h - 11h </span>: yoga dynamique - prix libre <span className={style.price}>(minimum 3 euros)</span> </li>
        </ul>
       </article>

      </main>
    );
  }

  export default Home