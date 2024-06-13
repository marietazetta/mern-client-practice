import './ItemCard.css'
import { Card } from 'react-bootstrap'

const ItemCard = () => {

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Wave Jet</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Final Project - Ironhack</Card.Subtitle>
                <Card.Text>
                    Corporate Aviation website allowing user and admin operations
                </Card.Text>
                <Card.Link href="#">View Project</Card.Link>
                <Card.Link href="#">Github</Card.Link>
            </Card.Body>
        </Card>
    )

}
export default ItemCard