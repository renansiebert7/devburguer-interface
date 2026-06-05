import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';
import { Container, Title } from './styles.js';
import { CardProduct } from '../CardProduct';
import CarouselLib from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carousel = CarouselLib?.default ?? CarouselLib;

export function OffersCarousel() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const { data } = await api.get('/products');

            const onlyOffers = data.products.filter((product) => product.offer);

            setOffers(onlyOffers);
        }

        loadProducts();
    }, []);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
        tablet: { breakpoint: { max: 1280, min: 690 }, items: 3 },
        mobile: { breakpoint: { max: 690, min: 0 }, items: 2 }
    };

    return (
        <Container>
            <Title>Ofertas do Dia</Title>

            {Array.isArray(offers) && offers.length > 0 ? (
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    itemClass="carousel-item"
                >
                    {offers.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </Carousel>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </Container>
    );
}