

function Profile(props) {
  return (
    <div className="profile-main">
      <h1>{props.name}</h1>
      <p>
        Valmistuin tietojenkäsittelyn tradenomiksi Tampereen ammattikorkeakoulusta
        vuoden 2019 lopussa. Olen kiinnostunut tekemään töitä fullstack- tai frontend-kehityksen parissa.
      </p>
      <p>
        Tämä sivu on rakennettu Reactilla. Sivulta löytyvillä "Muokkaa"-napeilla pääsee muuttamaan eri tekstien sisältöjä sekä lisäämään tai poistamaan sisältöä.
      </p>
    </div>
  );
}

export default Profile;