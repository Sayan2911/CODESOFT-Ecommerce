import {Container, Row,Col} from 'react-bootstrap'

const Footer = () => {
    var currentYear= new Date().getFullYear()

  return (
 <footer>
    <Container>
        <Row>
            <Col className='text-center py-3'>
                <p>Proshop &copy; {currentYear} . made with ❤️ by sayan das</p>
            </Col>
        </Row>
    </Container>

 </footer>
  )
}

export default Footer