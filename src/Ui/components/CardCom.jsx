import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { Heart } from 'lucide-react'

export default function CardCom(props) {
  return (
    <>
      <Card
        className='m-2'
        style={{
          width: '18rem'
        }}
      >
        <img
          className='m-2'
          style={{
            width: '150px',
            height: '250px',
            alignSelf: 'center'
          }}
          alt="Sample"
          src={props?.data?.imageURL}
        />
        <CardBody>
          <CardTitle tag="h5">
            {props?.data?.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h3">
            Rs: {props?.data?.price}
          </CardSubtitle>
          <Button className='w-100 mb-2' style={{ color: "#964b00", backgroundColor: '#BAB86C' }}>
            Buy Now
          </Button>
          <Button className='w-100' style={{ color: "#964b00", backgroundColor: '#BAB86C' }}>
            <Heart color="black" /> Wishlist
          </Button>
        </CardBody>
      </Card >
    </>
  )
}
