import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody,Button } from "reactstrap"
import ModalAlumno from "./components/ModalAlumno"
import TablaAlumno from "./components/TablaAlumno"

const App = () => {

    const [alumnos, setAlumnos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false) //guardar
    const [editar,setEditar] = useState(null) //editar

    const mostrarAlumnos = async () => {
        const response = await fetch("api/alumno/Lista");
        if (response.ok) {
            const data = await response.json();
            setAlumnos(data)
        } else {
            console.log("Error al cargar datos en la lista");
        }
    }
    useEffect(() => {
        mostrarAlumnos()
    }, [])

    const guardarAlumno = async (alumno) => {
        const response = await fetch("api/alumno/Guardar", {
            method: 'POST',
            headers: { 'content-type': "application/json;charset=utf-8 " },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    const editarAlumno = async (alumno) => {
        const response = await fetch("api/alumno/Editar", {
            method: 'PUT',
            headers: { 'content-type': "application/json;charset=utf-8 " },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    const eliminarAlumno = async (id) => {
        var respuesta = window.confirm("Desea eliminar al alumno")
        if (!respuesta) {
            return;
        }

        const response = await fetch("api/alumno/Eliminar/" + id, {
            method:'DELETE'
            })

        if (response.ok) {
            mostrarAlumnos();
        }
    }

    return(
    <Container>
        <Row className="mt-5">
            <Col sm="12">
                <Card>
                    <CardHeader>
                    <h5>Lista de Alumnos</h5>
                    </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Registro</Button>
                        <hr></hr>
                            <TablaAlumno data={alumnos}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarAlumno={eliminarAlumno}
                                />
                    </CardBody>
                </Card>
            </Col>
            </Row>
            <ModalAlumno
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarAlumno={guardarAlumno}
                editar={editar }
                setEditar={setEditar}
                editarAlumno={editarAlumno}/>
    </Container>
    )
}

export default App;
