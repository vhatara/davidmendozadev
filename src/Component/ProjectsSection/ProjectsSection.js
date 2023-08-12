import React from 'react'
import  {Row, Col } from 'react-bootstrap'
import projectListArray from './ProjectList'
import Card from 'react-bootstrap/Card'

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <div className='project-wrapper '>
        <h1 className='section-title-project d-flex justify-content-center'> Featured Projects </h1>
          <Row xs={1} md={2} lg={3} className='d-flex justify-content-between g-4 py-5'>
            {projectListArray.map((project)=> (
              <Col align="center" className='px-5' key={project.id}>
                    <Card>
                      <Card.Img variant="top" src={project.image} draggable="false"/>
                      <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                        <Card.Text>
                          {project.description}
                        </Card.Text>
                        <div>
                        <a href={project.sourcecode} target='_blank' rel="noreferrer" className='sourcecode-a'>
                          <i className="fa-brands fa-github"></i>
                        </a>
                        <a href={project.weblink} target='_blank' rel="noreferrer" className='sourcecode-a'>
                          <i className="fa-solid fa-globe"></i>
                        </a>
                        </div>
                      </Card.Body>
                    </Card>
              </Col>
            ))}
          </Row>

      </div>
    </section>
  )
}

export default ProjectsSection