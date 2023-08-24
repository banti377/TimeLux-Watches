import React, { useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { Heart } from 'lucide-react'

export default function CardCom(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <Card
        className='m-2'
        style={{
          width: '18rem'
        }}
      >
        <div
          className='m-4'
          style={{
            height: '250px',
            alignSelf: 'center',
            overflow: 'hidden',
            transition: 'transform 0.3s',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            alt="Sample"
            src={props?.data?.imageURL}
            style={{
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <CardBody>
          <CardTitle tag="h5">
            {props?.data?.name}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h3">
            Rs: {props?.data?.price}
          </CardSubtitle>
          <Button className='w-100 mb-2'>
            Buy Now
          </Button>
          <Button className='w-100'>
            <Heart /> Wishlist
          </Button>
        </CardBody>
      </Card >
    </>
  )
}
