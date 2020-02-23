import React from 'react';

import styles from './Church.module.css';
import { Carousel } from 'antd';

const Church = () => {
  return (
    <div className={styles.Church}>
      <h1>Nuestra Iglesia</h1>
      <Carousel autoplay speed={500}>
        <div className={styles.CarouselPicture}>
          <img
            src='https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80'
            alt='church-hat'
          />
        </div>
        <div className={styles.CarouselPicture}>
          <img
            src='https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80'
            alt='worship'
          />
        </div>
        <div className={styles.CarouselPicture}>
          <img
            src='https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80'
            alt='bible study'
          />
        </div>
      </Carousel>
      <p className={styles.Paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id deleniti
        aliquid quis, ea enim ad molestias ut, provident rerum accusantium magni
        doloremque quam animi aliquam eligendi, iste aperiam inventore non nisi
        adipisci illo nihil! Earum in incidunt suscipit hic ex saepe dolor
        doloribus at rem totam, error ad ipsa. Recusandae, totam velit
        repellendus doloribus exercitationem magnam omnis reprehenderit ducimus
        voluptatem et non esse ipsum fuga quia earum dolores reiciendis sunt
        eveniet. Adipisci dolores doloribus recusandae dolor mollitia qui ut
        tenetur, nihil magni incidunt quidem! Excepturi numquam sit eveniet,
        architecto rerum, reprehenderit sunt sapiente nam, unde maxime vel
        veritatis ut omnis?
      </p>
    </div>
  );
};

export default Church;
