import "./Dashboard.css";
import Footer from "./Footer";
import Header from "./Header";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handleImageClick = (category: string, event: React.MouseEvent) => {
    event.preventDefault();
    Swal.fire({
      title: "¡Categoría seleccionada!",
      text: `${category}`,
      icon: "info",
      confirmButtonText: "Cerrar",
      background: "#fff",
      customClass: {
        popup: "my-popup",
      },
    });
  };

  return (
    <div className="login-page">
      <Header></Header>
      <div
        className="column-text"
        style={{ paddingTop: 80, width: "1300px", height: "5px" }}
      >
        <h2>Recursos educativos para la educación de calidad</h2>
      </div>
      <div className="resource-container">
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://miro.medium.com/v2/resize:fit:1200/0*wyWkqFlcBrHS4n9s.jpg"
                alt="Tecnología"
                onClick={(e) =>
                  handleImageClick(
                    "La tecnología es el conjunto de herramientas," +
                      "técnicas y conocimientos aplicados para resolver problemas y facilitar tareas. " +
                      "Desde la informática hasta la biotecnología, ha transformado sectores como la medicina, la educación y la comunicación.",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Tecnología</p>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://dl.acm.org/subject/ai"
                    className="btn btn-primary"
                  >
                    Ir al recurso
                  </a>
                  <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/commentsection")}
                  >
                    Ir al foro
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://concepto.de/wp-content/uploads/2018/02/microscopio-ciencia-e1504203035744-800x420.jpeg"
                alt="Ciencias"
                onClick={(e) =>
                  handleImageClick(
                    "Las ciencias son disciplinas que estudian los fenómenos naturales, sociales y formales a través de la observación, experimentación y análisis. " +
                      "Abarcan áreas como la biología, la física, la química y las ciencias sociales, entre otras, busca siempre comprender el mundo que nos rodea",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Ciencias</p>
                <a
                  href="https://www.youtube.com/@KQEDDeepLook"
                  className="btn btn-primary"
                >
                  Ir al recurso
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://i0.wp.com/epthinktank.eu/wp-content/uploads/2016/09/eprs-briefing-589794-regional-minority-languages-eu-final.jpg?fit=1000%2C979&ssl=1"
                alt="Card image cap"
                onClick={(e) =>
                  handleImageClick(
                    "Los lenguajes son sistemas de comunicación que utilizan palabras, símbolos o gestos para expresar ideas, pensamientos y emociones. " +
                      "Existen muchos tipos de lenguajes, incluyendo lenguajes hablados, escritos y de señas, cada cultura tiene su propio conjunto de lenguas que representan su identidad.",
                    e
                  )
                }
              ></img>
              <div className="Lenguajes">
                <p className="card-text">Lenguajes</p>
                <a
                  href="https://www.loecsen.com/es"
                  className="btn btn-primary"
                >
                  Ir al recurso
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://introduccionalestudiodelderechounivia.wordpress.com/wp-content/uploads/2013/11/shutterstock_90107215.jpg"
                alt="Leyes"
                onClick={(e) =>
                  handleImageClick(
                    "Las leyes son un conjunto de normas y reglas establecidas por una autoridad competente que regulan el comportamiento de las personas en una sociedad. " +
                      "Estas reglas pueden abarcar aspectos como derechos, deberes, responsabilidades y sanciones, y son fundamentales para mantener el orden y la justicia en una comunidad.",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Leyes</p>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.asamblea.go.cr/Centro_de_informacion/Consultas_SIL/SitePages/ConsultaLeyes.aspx"
                    className="btn btn-primary"
                  >
                    Ir al recurso
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://www.symbols.com/images/symbol/1653_summation.png"
                alt="Matemática"
                onClick={(e) =>
                  handleImageClick(
                    "Las matemáticas son el estudio de los números, las formas y las estructuras. " +
                      "A través de las matemáticas, podemos modelar y entender el mundo a través de fórmulas, ecuaciones y patrones que se aplican en una amplia variedad de disciplinas, desde la física hasta la economía.",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Matemática</p>
                <a
                  href="https://www.youtube.com/@julioprofe"
                  className="btn btn-primary"
                >
                  Ir al recurso
                </a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://stvp.stanford.edu/wp-content/uploads/sites/3/2017/10/eCorner_Arts_Tech5.jpg"
                alt="Artes"
                onClick={(e) =>
                  handleImageClick(
                    "El arte es una expresión de la creatividad humana, que puede tomar muchas formas como la pintura, la escultura, la música y la danza. " +
                      "A través del arte, los seres humanos han transmitido ideas, emociones y historias a lo largo de la historia, y sigue siendo una parte fundamental de la cultura y la sociedad.",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Artes</p>
                <a
                  href="https://artsandculture.google.com/project/art-camera"
                  className="btn btn-primary"
                >
                  Ir al recurso
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-crw0gMQo_4KCXAtx9fxfrNr7eFEBmI1X4g&s"
                alt="Literatura"
                onClick={(e) =>
                  handleImageClick(
                    "La literatura es el arte de la expresión escrita, que incluye géneros como la poesía, la narrativa, el ensayo y el teatro. " +
                      "A través de las palabras, los escritores exploran temas universales como el amor, la muerte, la justicia y la identidad, creando mundos y personajes que resuenan con los lectores a lo largo del tiempo.",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Literatura</p>
                <div className="d-flex justify-content-center">
                  <a
                    href="https://openlibrary.org/"
                    className="btn btn-primary"
                  >
                    Ir al recurso
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://cas.stthomas.edu/_media-library/_images/history/1920x1080/stthomas-history-time.jpg"
                alt="Historia"
                onClick={(e) =>
                  handleImageClick(
                    "La historia es el estudio de los hechos y eventos que han ocurrido en el pasado, desde la prehistoria hasta la actualidad. " +
                      "A través de la historia, podemos entender cómo las sociedades, culturas, economías y gobiernos han evolucionado a lo largo del tiempo.",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Historia</p>
                <a
                  href="https://www.youtube.com/channel/UC88lvyJe7aHZmcvzvubDFRg"
                  className="btn btn-primary"
                >
                  Ir al recurso
                </a>
              </div>
            </div>
          </div>
          <div></div>
          <div className="column">
            <div className="card">
              <img
                className="card-img-top"
                src="https://www.centropsico.es/wp-content/uploads/2019/11/salud.jpg"
                alt="Card image cap"
                onClick={(e) =>
                  handleImageClick(
                    "El bienestar se refiere al estado de salud física, mental y emocional de una persona. " +
                      "Implica tener una buena calidad de vida, experimentar satisfacción personal y disfrutar de una vida equilibrada, tanto en el ámbito personal como social.",
                    e
                  )
                }
              ></img>
              <div className="card-body">
                <p className="card-text">Bienestar</p>
                <a href="https://kidshealth.org/" className="btn btn-primary">
                  Ir al recurso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
