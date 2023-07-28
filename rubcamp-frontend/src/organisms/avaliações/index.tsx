import * as S from "./styles";
import card1 from "../../assets/Cedryk.png";
import card2 from "../../assets/Fabio.png";
import card3 from "../../assets/Gui.png";
import card4 from "../../assets/Gusta.png";
import card5 from "../../assets/Lucas.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useEffect } from "react";

const cards = [card1, card2, card3, card4, card5];

const Avaliacoes = () => {
  const [cardsNum, setCardsNum] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1530) {
        setCardsNum(1);
      } else {
        setCardsNum(2);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Container id="avaliacoes">
      <S.Content>
        <S.TextBox>
          <S.Title>NOSSOS USUÁRIOS CONFIRMAM:</S.Title>
        </S.TextBox>

        {window.innerWidth > 730 ? (
          <Swiper
            slidesPerView={cardsNum}
            pagination={{ clickable: true }}
            navigation
          >
            {cards.map((item) => (
              <SwiperSlide key={item}>
                <img
                  style={{
                    width: 'auto',
                    maxHeight: 450,
                  }}
                  src={item}
                  alt={`Card ${cards.indexOf(item) + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {cards.map((item) => (
              <SwiperSlide key={item}>
                <img
                  style={{
                    width: 'auto',
                    maxHeight: window.innerWidth > 730? 330 : (window.innerWidth> 360 ? 220 : 200),
                  }}
                  src={item}
                  alt={`Card ${cards.indexOf(item) + 1}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Avaliacoes;