import React from "react";
import styled from "styled-components";

const CaroHeader = styled.div`
  display: flex;
`;
const LeftSide = styled.div`
  width: 23%;
  padding: 2px 20px;
`;
const RightSide = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  .navl {
    margin: 10px 0;
  }
  .navl a {
    text-decoration: none;
    color: black;

    margin: 5px;
    font-size: 17px;
    font-weight: 600;
  }
`;
const CarouselContainer = styled.div`
  position: relative;
`;

const CarouselSliderWrapper = styled.div`
  display: flex;
  text-align: center;
`;

const Card = styled.div`
  width: 10%;
  /* animation: fadeInUp 0.5s forwards; */
  border: 1px solid gray;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: lightgoldenrodyellow;
`;

const Figure = styled.figure`
  overflow: hidden;
`;

const Image = styled.img`
  width: 70%; /* Make the image responsive */
  height: auto;
`;

const HeadingCard = styled.p`
  font-weight: bold;
`;

const ItemCount = styled.span`
  display: block;
`;
const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

const Carousel = () => {
  const categories = [
    {
      title: "Red Apple",
      items: "26 items",
      imgSrc: "/src/assets/cat-9.png",
    },
    {
      title: "Snack",
      items: "26 items",
      imgSrc: "/src/assets/cat-3.png",
    },

    {
      title: "Vegetables ",
      items: "26 items",
      imgSrc: "/src/assets/cat-1.png",
    },
    {
      title: "Strawberry",
      items: "26 items",
      imgSrc: "/src/assets/cat-2.png",
    },
    {
      title: "Black plum",
      items: "26 items",
      imgSrc: "/src/assets/cat-4.png",
    },
    {
      title: "Custard apple",
      items: "26 items",
      imgSrc: "/src/assets/cat-5.png",
    },
    {
      title: "Coffe & Tea",
      items: "26 items",
      imgSrc: "/src/assets/cat-14.png",
    },
    {
      title: "Headphone",
      items: "26 items",
      imgSrc: "/src/assets/cat-15.png",
    },
    {
      title: "Cake & Milk",
      items: "26 items",
      imgSrc: "/src/assets/cat-13.png",
    },
    {
      title: "Organic Kiwi",
      items: "26 items",
      imgSrc: "/src/assets/cat-12.png",
    },
  ];

  return (
    <>
      <CaroHeader>
        <LeftSide>
          <h2> Featured Categories</h2>
        </LeftSide>
        <RightSide>
          <div className="navl">
            <a href="#">Pet Foods</a>
            <a className="text-success" href="#">
              Vegetables
            </a>
            <a href="#">Cake & Milk</a>
            <a href="#">Coffee & Tea</a>
          </div>
          <div className="arrows">
            <i class="fa-solid fa-arrow-left bg-info  p-2 rounded-circle border-3"></i>
            <i class="fa-solid fa-arrow-right bg-info  p-2 m-2 rounded-circle border-3"></i>
          </div>
        </RightSide>
      </CaroHeader>
      <CarouselContainer>
        <CarouselSliderWrapper id="carousel-10-columns" title="Top Categories">
          {categories.map((category, index) => (
            <Card key={index}>
              <Figure>
                <Anchor>
                  <Image src={category.imgSrc} alt={category.title} />
                </Anchor>
              </Figure>
              <HeadingCard>
                <Anchor title={category.title}>{category.title}</Anchor>
              </HeadingCard>
              <ItemCount>{category.items}</ItemCount>
            </Card>
          ))}
        </CarouselSliderWrapper>
      </CarouselContainer>
    </>
  );
};

export default Carousel;