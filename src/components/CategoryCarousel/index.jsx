import { api } from '../../services/api.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title, ContainerItems, CategoryButton } from './styles.js';
import CarouselLib from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carousel = CarouselLib?.default ?? CarouselLib;


export function CategoryCarousel() {
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            try {
                const { data } = await api.get('/categories');
                const categoriesData = data.categories || data;
                setCategories(categoriesData);

            } catch (error) {
                console.error("Erro na API:", error);
            }
        }
        loadCategories();
    }, []);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
        tablet: { breakpoint: { max: 1280, min: 690 }, items: 3 },
        mobile: { breakpoint: { max: 690, min: 0 }, items: 2.3 },
    };

    return (
        <Container>
            <Title>Categorias</Title>
            { }
            {Array.isArray(categories) && categories.length > 0 ? (
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    itemClass="carousel-item"
                >
                    {categories.map((category) => (
                        <ContainerItems key={category.id} imageUrl={category.url}>
                            <CategoryButton to={`/cardapio?categoria=${category.id}`}>
                                {category.name}
                            </CategoryButton>
                        </ContainerItems>
                    ))}
                </Carousel>
            ) : (
                <p>Nenhuma categoria encontrada.</p>
            )}
        </Container>
    );
}