import { FC } from 'react';
import { Slide as SlideType } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from './UI/Button';

interface SlideType {
  url: string;
  caption: string;
  buttonText: string;
  link: string;
}

const slideImages: SlideType[] = [
  {
    url: 'https://genelab.pl/wp-content/uploads/2018/12/zmieniamy_sie.jpg',
    caption: 'Зарегистрируйся в личном кабинете',
    buttonText: 'Зарегистрироваться!',
    link: '/registration',
  },
  {
    url: 'https://www.britishcardiovascularsociety.org/__data/assets/image/0016/25504/UK-Cardiology-News2.jpg',
    caption: 'Перейти на страницу профиля',
    buttonText: 'В профиль!',
    link: '/profile',
  },
  {
    url: 'http://www.anywheremobilehealth.com/wp-content/uploads/2019/06/inner1-1.jpg',
    caption: 'Записаться на приём',
    buttonText: 'Запись!',
    link: '/users',
  },
];

const Slideshow: FC = () => {
  return (
    <div className='slide-container'>
      <SlideType>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <SliderWrapper
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <Content>
                <span>{slideImage.caption}</span>
                <Link href={slideImage.link}>
                  <GoToButton text={slideImage.buttonText} />
                </Link>
              </Content>
            </SliderWrapper>
          </div>
        ))}
      </SlideType>
    </div>
  );
};

const Content = styled.div`
  display: flex;
  padding: '20px';
  background: ${colors.opacityWhite};
  color: ${colors.black};
  padding: 30px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 22px;
  font-family: 'Inter Bold';
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 600px;
`;

const GoToButton = styled(Button)`
  width: auto;
  color: ${colors.white};
  background-color: ${colors.orange};
  border: 1px solid ${colors.blue};
  margin-bottom: 0;
  margin-top: 10px;
  border-radius: 5px;
  width: auto;
  height: 40px;
`;

const Link = styled.a`
  text-decoration: none;
`;

export default Slideshow;
